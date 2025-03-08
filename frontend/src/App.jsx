import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // <-- Adjust the path if your firebase.js is located elsewhere
import { collection, addDoc } from "firebase/firestore";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

export default function App() {
  // State variables
  const [questions, setQuestions] = useState([]);
  const [questionDetails, setQuestionDetails] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [weights, setWeights] = useState([]);
  const [comparisonResults, setComparisonResults] = useState(null);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [entityDetails, setEntityDetails] = useState({});
  const [hoveredOption, setHoveredOption] = useState(null);
  const [showIndividualResults, setShowIndividualResults] = useState(false);

  // Fetch quiz questions
  useEffect(() => {
    fetch("https://josevalqui.github.io/votometro/questions.json")

      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched questions:", data);
        if (Array.isArray(data) && data.length > 0) {
          setQuestions(data);
          setAnswers(Array(data.length).fill(null));
        } else {
          console.error("Invalid questions data:", data);
        }
      })
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  // Fetch static question details
  useEffect(() => {
    fetch("https://josevalqui.github.io/votometro/question_details.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched question details:", data);
        setQuestionDetails(data);
      })
      .catch((err) => console.error("Error fetching question details:", err));
  }, []);

  // Set default weights when questions load
  useEffect(() => {
    if (questions.length) {
      setWeights(Array(questions.length).fill(3));
    }
  }, [questions]);

  // Handle answer selection
  const handleAnswerClick = (selectedOption) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = selectedOption;
      return updated;
    });
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Skip and go back
  const handleSkip = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleGoBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Submit answers (for logging)
  const submitAnswers = () => {
    console.log("Submitted answers:", questions.map((q, i) => ({
      id: q.id,
      question: q.question,
      answer: answers[i] || "Sin respuesta",
      weight: weights[i],
    })));
  };

// Replace submitAnswersToSheet with this function:
const submitAnswersToFirebase = async () => {
  const answersData = {
    userId: localStorage.getItem("userId") || Date.now(), // Unique User ID
    answers,
    createdAt: new Date(), // Timestamp for the entry
  };

  // Save userId in localStorage so it's consistent across visits
  localStorage.setItem("userId", answersData.userId);

  try {
    // Adds a new document in the "quizAnswers" collection in Firestore
    const docRef = await addDoc(collection(db, "quizAnswers"), answersData);
    console.log("Document written with ID:", docRef.id);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
  
  // Compute similarity scores using processed_votes.json
  const handleEndQuiz = () => {
    submitAnswers();
    submitAnswersToFirebase();
    setSelectedEntity(null);
    setShowIndividualResults(false);
    setCurrentQuestionIndex(questions.length);

    const userAnswers = {};
    const userMapping = { "Sí": 1, "No tengo una opinión sobre este tema": 0.5, "No": 0 };
    questions.forEach((q, i) => {
      const answer = answers[i] || "No tengo una opinión sobre este tema";
      userAnswers[q.id] = { answer: userMapping[answer] || 0.5, weight: weights[i] };
    });

    fetch("https://josevalqui.github.io/votometro/processed_votes.json")
      .then((res) => res.json())
      .then((data) => {
        const individualResults = data.candidates.map((candidate) => {
          let weightedDiff = 0, totalWeight = 0;
          Object.entries(candidate.votes).forEach(([voteCol, candidateVote]) => {
            if (candidateVote === null) return;
            const pdf_id = voteCol.split("_")[0];
            if (userAnswers[pdf_id]) {
              const { answer: userAns, weight } = userAnswers[pdf_id];
              weightedDiff += Math.abs(userAns - candidateVote) * weight;
              totalWeight += weight;
            }
          });
          
          const similarity = totalWeight > 0 ? Math.round((1 - weightedDiff / totalWeight) * 100) : 0;
          return { name: candidate.name, party: candidate.party, similarity_score: similarity };
        });
        individualResults.sort((a, b) => b.similarity_score - a.similarity_score);

        const partyAggregation = {};
        individualResults.forEach((cand) => {
          if (!partyAggregation[cand.party]) {
            partyAggregation[cand.party] = { total: 0, count: 0 };
          }
          partyAggregation[cand.party].total += cand.similarity_score;
          partyAggregation[cand.party].count += 1;
        });
        const partyResults = Object.entries(partyAggregation).map(([party, stats]) => ({
          party,
          average_similarity_score: Math.round(stats.total / stats.count),
        }));
        partyResults.sort((a, b) => b.average_similarity_score - a.average_similarity_score);

        setComparisonResults({
          individual_results: individualResults,
          party_results: partyResults,
        });
      })
      .catch((err) => console.error("Error fetching processed votes:", err));
  };

  // When an entity (candidate or party) is selected, fetch vote_details.json and set details.
  const handleEntityClick = (entity, type) => {
    setSelectedEntity(entity);
    fetch("https://josevalqui.github.io/votometro/vote_details.json")
      .then((res) => res.json())
      .then((data) => {
        if (type === "individual") {
          setEntityDetails(data.candidates[entity.name] || {});
        } else if (type === "party") {
          setEntityDetails({
            party_meta: data.party_meta[entity.party] || {},
            details: data.parties[entity.party] || []
          });
        }
      })
      .catch((err) => console.error("Error fetching vote details:", err));
  };

  // Render vote info (for candidate, simply return the vote)
  const renderVote = (detail) => detail.vote;

  // Format date (expects yyyymmddhhmm format)
  function formatDate(dateStr) {
    if (!dateStr || dateStr === "N/A") return "N/A";
    const year = dateStr.substring(0, 4);
    const month = parseInt(dateStr.substring(4, 6), 10);
    const day = parseInt(dateStr.substring(6, 8), 10);
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return `${day}. de ${months[month - 1]} de ${year}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "flex-start", minHeight: "90vh", width: "100vw", overflowY: "auto", padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "1100px" }}>
        {questions.length === 0 ? (
          <h2>Loading...</h2>
        ) : currentQuestionIndex < questions.length ? (
          <>
            <div style={{ marginBottom: "10px" }}>
              <h3>{currentQuestionIndex + 1} / {questions.length}</h3>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label>Importancia de este tema:</label><br />
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "14px" }}>Poca</span>
                <input type="range" min="1" max="5"
                  value={weights[currentQuestionIndex] !== undefined ? weights[currentQuestionIndex] : 3}
                  onChange={(e) => {
                    const newWeights = [...weights];
                    newWeights[currentQuestionIndex] = Number(e.target.value);
                    setWeights(newWeights);
                  }}
                  style={{ flexGrow: 1 }} />
                <span style={{ fontSize: "14px" }}>Mucha</span>
              </div>
            </div>
            <h2>{questions[currentQuestionIndex].question}</h2>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index}
                onClick={() => handleAnswerClick(option)}
                onMouseEnter={() => setHoveredOption(option)}
                onMouseLeave={() => setHoveredOption(null)}
                style={{
                  margin: "10px", padding: "10px 40px", fontSize: "16px", cursor: "pointer",
                  display: "block", width: "100%",
                  backgroundColor: (answers[currentQuestionIndex] === option || hoveredOption === option) ? "black" : "darkslategrey",
                  color: "white", border: "1px solid #ccc", borderRadius: "5px",
                }}>
                {option}
              </button>
            ))}
            <div style={{ marginTop: "20px" }}>
              <button onClick={handleGoBack}
                disabled={currentQuestionIndex === 0}
                style={{
                  marginRight: "10px", padding: "10px 20px", fontSize: "16px",
                  cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
                  opacity: currentQuestionIndex === 0 ? 0.5 : 1,
                }}>Volver</button>
              <button onClick={() => {
                if (currentQuestionIndex === questions.length - 1) {
                  handleEndQuiz();
                } else {
                  handleSkip();
                }
              }}
                style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
                {currentQuestionIndex === questions.length - 1 ? "Terminar encuesta" : "Saltar"}
              </button>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3>Current Answers:</h3>
              <ul style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
                {answers.map((answer, index) => (
                  <li key={index}><strong>Q{index + 1}:</strong> {answer || "Sin respuesta"}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div id="recaptcha-container"></div>

            <h2>Completaste el Votómetro!</h2>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "flex-start", width: "100%" }}>
              <button onClick={() => setShowIndividualResults(false)}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "black"; e.target.style.color = "white"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = showIndividualResults ? "darkslategrey" : "black"; }}
                style={{
                  padding: "10px 20px", fontSize: "16px", cursor: "pointer",
                  backgroundColor: showIndividualResults ? "darkslategrey" : "black",
                  color: "white", border: "1px solid #ccc", borderRadius: "5px",
                  transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                }}>Partidos políticos</button>
              <button onClick={() => setShowIndividualResults(true)}
                onMouseEnter={(e) => { e.target.style.backgroundColor = "black"; e.target.style.color = "white"; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = showIndividualResults ? "black" : "darkslategrey"; }}
                style={{
                  padding: "10px 20px", fontSize: "16px", cursor: "pointer",
                  backgroundColor: showIndividualResults ? "black" : "darkslategrey",
                  color: "white", border: "1px solid #ccc", borderRadius: "5px",
                  transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                }}>Congresistas</button>
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <div style={{ flex: 1 }}>
                {comparisonResults && (
                  <div style={{ marginTop: "20px", width: "100%" }}>
                    {showIndividualResults ? (
                      <ul style={{
                        listStyleType: "none", padding: 0, textAlign: "left",
                        maxHeight: "40vh", overflowY: "auto",
                      }}>
                        <div style={{
                          display: "flex", justifyContent: "space-between", fontWeight: "bold",
                          paddingBottom: "5px", borderBottom: "1px solid #ccc", paddingRight: "10px",
                        }}>
                          <span>Congresista</span>
                          <span style={{ marginLeft: "auto", paddingRight: "10px" }}>Similaridad</span>
                        </div>
                        {comparisonResults.individual_results.map((result, index) => (
                          <li key={index} style={{
                            cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
                          }}
                            onClick={() => handleEntityClick(result, "individual")}>
                            <span>{result.names?.join(", ") || result.name} ({result.party})</span>
                            <span style={{ marginLeft: "auto", fontWeight: "bold", paddingRight: "15px" }}>
                              {result.similarity_score}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        <div style={{
                          display: "flex", justifyContent: "space-between", fontWeight: "bold",
                          paddingBottom: "5px", borderBottom: "1px solid #ccc", paddingRight: "10px",
                        }}>
                          <span>Partido</span>
                          <span style={{ marginLeft: "auto", paddingRight: "10px" }}>Similaridad</span>
                        </div>
                        <ul style={{ listStyleType: "none", padding: 0, textAlign: "left", width: "100%" }}>
                          {comparisonResults.party_results.map((partyResult, index) => (
                            <li key={index} style={{
                              cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "5px 0",
                            }}
                              onClick={() => handleEntityClick(partyResult, "party")}>
                              <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                <span><strong>{partyResult.party}</strong></span>
                                <span style={{ fontWeight: "bold", paddingRight: "15px" }}>
                                  {partyResult.average_similarity_score}%
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
              <div style={{
                width: "50%", padding: "0px 0px 0px 15px", borderLeft: "1px solid #ccc",
                overflowY: "auto", maxHeight: "45vh", textAlign: "left",
              }}>
                {selectedEntity ? (
                  <>
                    <h2 style={{ margin: "2px 0" }}>
                      {selectedEntity.name ? selectedEntity.name : selectedEntity.party}
                    </h2>
                    {/* Candidate Meta */}
                    {entityDetails.candidate_meta && (
                      <div style={{ marginBottom: "4px" }}>
                        <p style={{ margin: "2px 0" }}>
                          <strong>Edad (2024):</strong> {entityDetails.candidate_meta.age}<br />
                          <strong>Sentencia penal:</strong> {entityDetails.candidate_meta.sentencia_penal}<br />
                          <strong>Partido:</strong> {entityDetails.candidate_meta.party}<br />
                          <strong>Asistencia:</strong> {entityDetails.candidate_meta.attendance || "N/A"}<br /><br />
                        </p>
                      </div>
                    )}
                    {/* Party Meta */}
                    {entityDetails.party_meta && (
                      <div style={{ marginBottom: "4px" }}>
                        <p style={{ margin: "2px 0" }}>
                          <strong>Edad promedio:</strong> {entityDetails.party_meta.average_age}<br />
                          <strong>Asistencia promedio:</strong> {entityDetails.party_meta.average_attendance_percentage || "N/A"}%<br />
                          <strong>Sentencia penal:</strong> {entityDetails.party_meta.sentencia_penal.yes}/{entityDetails.party_meta.sentencia_penal.total} congresistas<br />
                        </p><br />
                      </div>
                    )}
                    {entityDetails.details && entityDetails.details.length > 0 ? (
                      questionDetails.length > 0 ? (
                        questionDetails.map((qd, idx) => {
                          // If it's a candidate, match by pdf id; if it's a party, use aggregated details.
                          let detail = entityDetails.details.find(d => d.id === qd.id) || {};
                          return (
                            <div key={idx} style={{ marginBottom: "2px", lineHeight: "1.2" }}>
                              <p style={{ margin: "2px 0" }}>
                                <strong>Statement:</strong> {qd.question} <br />
                                <small style={{ color: "gray", fontSize: "0.9em" }}>
                                  <strong>Proyecto de ley:</strong> {qd.law ? qd.law : "N/A"}
                                </small>
                              </p>
                              <p style={{ margin: "2px 0" }}>
                                <strong>Fecha de la votación:</strong> {detail.date || "N/A"} <br />
                                {entityDetails.party_meta ? (
                                  <>
                                    <strong>Voto más común:</strong> {detail.vote || "N/A"} <br />
                                  </>
                                ) : (
                                  <>
                                    <strong>Voto:</strong> {detail.vote || "N/A"} <br />
                                  </>
                                )}
                              </p>
                              <p style={{ margin: "2px 0" }}>
                                <strong>Documento y noticias:</strong>{" "}
                                {qd.source ? (
                                  <>
                                    <a href={qd.pdf_link} target="_blank" rel="noopener noreferrer">
                                      Documento
                                    </a>{" "}
                                    |{" "}
                                    <a href={qd.source} target="_blank" rel="noopener noreferrer">
                                      {new URL(qd.source).hostname.replace("www.", "") + "/..."}
                                    </a>
                                  </>
                                ) : (
                                  "N/A"
                                )}
                              </p>
                              <br />
                            </div>
                          );
                        })
                      ) : (
                        <p style={{ margin: "2px 0" }}>No vote details available.</p>
                      )
                    ) : (
                      <p style={{ margin: "2px 0" }}>No vote details available.</p>
                    )}
                  </>
                ) : (
                  <p> </p>
                )}
              </div>
            </div>
            <ul style={{ listStyleType: "none", padding: 0, textAlign: "left" }}>
              <strong>Tus respuestas:</strong>
              {answers.map((answer, index) => (
                <li key={index}>
                  {questions[index]?.question}: {answer || "Sin respuesta"}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <button onClick={() => setCurrentQuestionIndex(questions.length - 1)}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "black")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "darkslategrey")}
                style={{
                  padding: "10px 20px", fontSize: "16px", cursor: "pointer",
                  backgroundColor: "darkslategrey", color: "white", border: "1px solid #ccc",
                  borderRadius: "5px", transition: "background-color 0.2s ease-in-out",
                }}>
                Volver a la encuesta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
