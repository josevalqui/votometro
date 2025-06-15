import React, { useState, useEffect } from "react";
import { useQuiz } from "./useQuiz";
import { db } from "./firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { HashRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Methodology from "./metodologia";
import Contacto from "./contacto";
import './App.css';

export default function App() {
  const [election, setElection] = useState(null);
  const { state, dispatch, config, electionConfigs } = useQuiz(election);
  const [showMenu, setShowMenu] = useState(false); // <-- add near your other useState hooks

  // Map quiz options to labels.
  const userAnswerMapping = { 
    "Estoy de acuerdo": "A favor", 
    "No tengo una opinión sobre este tema": "Neutral", 
    "No estoy de acuerdo": "En contra" 
  };

// In your App component, delete the two separate useEffect hooks and paste this instead:
useEffect(() => {
  if (!state.comparisonResults) return;

  // Determine which array to use (individual vs. party)
  const currConfig = electionConfigs[election];
  const resultsArray = state.showIndividualResults
    ? state.comparisonResults.individual_results
    : state.comparisonResults.party_results;

  // If there’s at least one entity, select the first
  if (resultsArray && resultsArray.length > 0) {
    const type = state.showIndividualResults ? "individual" : "party";
    handleEntityClick(resultsArray[0], type);
  }
}, [
  state.comparisonResults,
  state.showIndividualResults,
  electionConfigs, // make sure these are defined where you need them
  election,        // (this assumes electionConfigs[election] must be up to date)
]);
// eslint-disable-next-line react-hooks/exhaustive-deps



  const handleAnswerClick = (selectedOption) => {
    dispatch({ type: "ANSWER", index: state.currentQuestionIndex, answer: selectedOption });
    if (state.currentQuestionIndex < state.questions.length - 1) {
      dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.currentQuestionIndex + 1 });
    }
  };

  const handleSkip = () => {
    if (state.currentQuestionIndex < state.questions.length - 1) {
      dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.currentQuestionIndex + 1 });
    }
  };

  const handleGoBack = () => {
    if (state.currentQuestionIndex > 0) {
      dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.currentQuestionIndex - 1 });
    }
  };

  const submitAnswers = () => {
    const answersData = state.questions.map((q, i) => ({
      id: q.id,
      question: q.question,
      answer: state.answers[i] || "Sin respuesta",
      weight: state.weights[i],
    }));
    console.log("Submitted answers:", answersData);
  };

  const submitAnswersToFirebase = async () => {
    const answersMap = state.questions.reduce((acc, q, i) => {
      acc[q.id] = {
        answer: state.answers[i] || "Sin respuesta",  // fallback if no answer
        weight: state.weights[i],
      };
      return acc;
    }, {});

    // 2. send exactly one addDoc payload
    const answersData = {
      userId: localStorage.getItem("userId") || Date.now(),
      responses: answersMap,
      createdAt: new Date(),
    };
    localStorage.setItem("userId", answersData.userId);
    try {
      const docRef = await addDoc(collection(db, "quizAnswers"), answersData);
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };

  const handleEndQuiz = () => {
    // Log and submit answers.
    submitAnswers();
    submitAnswersToFirebase();
    dispatch({ type: "SET_SELECTED_ENTITY", payload: null });
    dispatch({ type: "SET_SHOW_INDIVIDUAL_RESULTS", payload: config.isPresidentialElection });
    // Mark quiz end by setting currentQuestionIndex beyond last question.
    dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.questions.length });

    // Process user answers into numeric values.
    const userAnswers = {};
    state.questions.forEach((q, i) => {
      const rawAnswer = state.answers[i] || "No tengo una opinión sobre este tema";
      const normalizedAnswer = rawAnswer.trim().toLowerCase();
      const userMapping = { 
        "estoy de acuerdo": 1, 
        "no tengo una opinión sobre este tema": 0.5, 
        "no estoy de acuerdo": 0 
      };
      let numericAnswer = userMapping[normalizedAnswer];
      if (numericAnswer === undefined) {
        console.log(`Mapping failed for answer: "${rawAnswer}". Falling back to 0.5.`);
        numericAnswer = 0.5;
      }
      if (q.polarity === "-") {
        numericAnswer = numericAnswer === 1 ? 0 : numericAnswer === 0 ? 1 : numericAnswer;
      }
      userAnswers[q.id] = { answer: numericAnswer, weight: state.weights[i] };
    });

    // Fetch candidate votes and compute similarity scores.
    fetch(import.meta.env.BASE_URL + config.votesFile)
      .then((res) => res.json())
      .then((data) => {
        const processedCandidates = config.isPresidentialElection
          // For presidential: data.candidates is { "Name": { party, votes }, ... }
          ? Object.entries(data.candidates).map(([name, info]) => ({
              name,
              party: info.party,
              votes: info.votes
            }))
          // For non‐presidential: keep existing behavior
          : Object.values(data.candidates.processed);
        const individualResults = processedCandidates.map((candidate) => {
          let weightedDiff = 0,
            totalWeight = 0;
          Object.entries(candidate.votes).forEach(([voteCol, candidateVote]) => {
            if (candidateVote === null) return;

          let numericCandidateVote;
          if (config.isPresidentialElection) {
            // vote is now a string, so parse it
            numericCandidateVote = parseFloat(candidateVote.vote);
          } else {
            numericCandidateVote = config.processCandidateVote(candidateVote);
          }
          if (Number.isNaN(numericCandidateVote)) return;


            const pdf_id = voteCol; // as you changed already

            if (userAnswers[pdf_id]) {
              const { answer: userAns, weight } = userAnswers[pdf_id];
              weightedDiff += Math.abs(userAns - numericCandidateVote) * weight;
              totalWeight += weight;
            }
          });

          const similarity =
            totalWeight > 0 ? Math.round((1 - weightedDiff / totalWeight) * 100) : 0;
          return { name: candidate.name, party: candidate.party || candidate.candidate_meta?.party, similarity_score: similarity };
        });
        individualResults.sort((a, b) => b.similarity_score - a.similarity_score);
        if (!config.isPresidentialElection) {
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
          dispatch({
            type: "SET_COMPARISON_RESULTS",
            payload: { individual_results: individualResults, party_results: partyResults },
          });
        } else {
          dispatch({
            type: "SET_COMPARISON_RESULTS",
            payload: { individual_results: individualResults, party_results: [] },
          });
        }
      })
      .catch((err) => console.error("Error fetching combined votes:", err));
  };

  const handleEntityClick = (entity, type) => {
    dispatch({ type: "SET_SELECTED_ENTITY", payload: entity });

    fetch(import.meta.env.BASE_URL + config.votesFile)
      .then(res => res.json())
      .then(data => {
        if (type === "individual") {
          if (config.isPresidentialElection) {
            const candObj = data.candidates[entity.name];
            if (!candObj) {
              console.error("No candidate data for", entity.name);
              return;
            }
            // Build details array from each question in candObj.votes
            const detailsArr = Object.entries(candObj.votes).map(
              ([qid, qobj]) => ({
                id:       qid,
                question: qobj.question,
                vote:     qobj.vote,
                comment:  qobj.comment,
                source:   qobj.source
              })
            );
            dispatch({
              type: "SET_ENTITY_DETAILS",
              payload: { candidate_meta: { party: candObj.party }, details: detailsArr }
            });
          } else {
            // parliamentary: use precomputed "data.candidates.details"
            dispatch({
              type: "SET_ENTITY_DETAILS",
              payload: data.candidates.details[entity.name] || {}
            });
          }
        } else if (type === "party") {
          dispatch({
            type: "SET_ENTITY_DETAILS",
            payload: {
              party_meta: data.parties.meta[entity.party] || {},
              details:    data.parties.details[entity.party] || []
            }
          });
        }
      })
      .catch(err => console.error("Error fetching combined votes:", err));
  };

  const handleReset = () => {
    setElection(null);
    dispatch({ type: "RESET" });
  };

  function formatDate(dateStr) {
    if (!dateStr || dateStr === "N/A") return "N/A";
    const year = dateStr.substring(0, 4);
    const month = parseInt(dateStr.substring(4, 6), 10);
    const day = parseInt(dateStr.substring(6, 8), 10);
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    return `${day} de ${months[month - 1]} de ${year}`;
  }

  // Replace your App.js return block with the following code:

  return (
    <Router>   
    <>
        {/* Global Menu Button */}
        <button className="menu-button"
          onClick={() => setShowMenu(!showMenu)} 
          >
          Menu
        </button> 

        {showMenu && (
          <div className="menu-panel">
            <ul style={{ listStyle: 'none', margin: 0, padding: '10px' }}>
              <li className="menu-list-item">
                <Link
                  to="/"
                  onClick={() => setShowMenu(false)}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Encuesta
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/metodologia"
                  onClick={() => setShowMenu(false)}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Metodología
                </Link>
              </li>
              <li className="menu-list-item">
                <Link
                  to="/contacto"
                  onClick={() => setShowMenu(false)}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}

        <Routes>
          <Route 
            path="/" 
            element={
              <div className="main-container"
              >
                {!election ? (
                  <div className="election-selection-container">
                    <h2>Selecciona una elección</h2>
                    <button onClick={() => setElection("chile_combinada_2025")}>
                      Chile: Parlamentaria + Presidencial (15.11.2025)
                    </button>
                    <button onClick={() => setElection("chile_diputados_2025")}>
                      Chile: Elección parlamentaria (15.11.2025)
                    </button>
                    <button onClick={() => setElection("chile_presidencial_2025")}>
                      Chile: Elección presidencial (15.11.2025)
                    </button>
                    <button onClick={() => setElection("peru_parl_2026")}>
                      Perú: Elección parlamentaria (12.04.2026)
                    </button>
                  </div>
                ) : (
                  <div className = "election-content-area">
                    {election && (
                      <button onClick={handleReset} className = "reset-button">
                        Reiniciar
                      </button>
                    )}
                    {state.questions.length === 0 ? (
                      <h2>Cargando...</h2>
                    ) : state.currentQuestionIndex < state.questions.length ? (
                      <>
                        <div>
                          <h3>
                            {state.currentQuestionIndex + 1} / {state.questions.length}
                          </h3>
                        </div>
                        <div>
                          <label>Qué tan importante te parece este tema?</label>
                          <br />
                          <div className = "importance-slider-container">
                            <span>Poco importante</span>
                            <input
                              type="range"
                              min="1"
                              max="5"
                              value={state.weights[state.currentQuestionIndex]}
                              onChange={(e) =>
                                dispatch({
                                  type: "SET_WEIGHTS",
                                  index: state.currentQuestionIndex,
                                  weight: Number(e.target.value),
                                })
                              }
                            />
                            <span>Muy importante</span>
                          </div>
                        </div>
                        <div class = "question-text-container">
                          <h2>{state.questions[state.currentQuestionIndex].question}</h2>
                        </div>
                        <div >
                          {state.questions[state.currentQuestionIndex].options.map((option, index) => (
                            <button className = "option-button"
                              key={index}
                              onClick={() => handleAnswerClick(option)}
                              onMouseEnter={() =>
                                dispatch({ type: "SET_HOVERED_OPTION", payload: option })
                              }
                              onMouseLeave={() =>
                                dispatch({ type: "SET_HOVERED_OPTION", payload: null })
                              }
                              style={{
                                backgroundColor:
                                  state.answers[state.currentQuestionIndex] === option ||
                                  state.hoveredOption === option
                                    ? "black"
                                    : "darkslategrey"
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        <div>
                          <button className = "back-and-skip-buttons"
                          onClick={handleGoBack} disabled={state.currentQuestionIndex === 0}
                          >
                            Volver
                          </button>
                          <button className = "back-and-skip-buttons"
                            onClick={() => {
                              if (state.currentQuestionIndex === state.questions.length - 1) {
                                handleEndQuiz();
                              } else {
                                handleSkip();
                              }
                            }}

                            >
                            {state.currentQuestionIndex === state.questions.length - 1
                              ? "Terminar encuesta"
                              : "Saltar"}
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div id="recaptcha-container"></div>
                        <h2>Resultados</h2>
                        <div className = "results-toggle-container">
                          {!electionConfigs[election].isPresidentialElection && (
                            <button className = "results-toggle-button"
                              onClick={() =>
                                dispatch({ type: "SET_SHOW_INDIVIDUAL_RESULTS", payload: false })
                              }
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "black";
                                e.target.style.color = "white";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = state.showIndividualResults
                                  ? "darkslategrey"
                                  : "black";
                              }}
                              style={{
                                backgroundColor: state.showIndividualResults ? "darkslategrey" : "black",
                                transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                              }}
                            >
                              Partidos políticos
                            </button>
                          )}
                          {!config.isPresidentialElection && (
                            <button className="results-toggle-button"
                              onClick={() =>
                                dispatch({ type: "SET_SHOW_INDIVIDUAL_RESULTS", payload: true })
                              }
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "black";
                                e.target.style.color = "white";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = state.showIndividualResults
                                  ? "black"
                                  : "darkslategrey";
                              }}
                              style={{
                                backgroundColor: state.showIndividualResults ? "black" : "darkslategrey",
                                transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
                              }}
                            >
                              Candidatos
                            </button>
                          )}
                        </div>
                        <div style={{ display: "flex", width: "100%" }}>
                          <div style={{ flex: 1 }}>
                            {state.comparisonResults && (
                              <div style={{ marginTop: "20px", width: "100%" }}>
                                {state.showIndividualResults ? (
                                  <ul className = "parties-and-candidates-list">
                                    <div className = "candidate-party-similarity-header">
                                      <span>Candidato</span>
                                      <span>
                                        Similaridad
                                      </span>
                                    </div>
                                    {state.comparisonResults.individual_results.map((result, index) => (
                                      <li className = "candidate-party-similarity-item"
                                        key={index}
                                        onClick={() => handleEntityClick(result, "individual")}
                                      >
                                        <span>{result.names?.join(", ") || result.name}</span>
                                        <span className = "result-score">
                                          {result.similarity_score}%
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                ) : (
                                  <>
                                    <div className = "candidate-party-similarity-header">
                                      <span>Partido</span>
                                      <span>Similaridad</span>
                                    </div>
                                    <ul style={{ listStyleType: "none", padding: 0, textAlign: "left", width: "100%" }}>
                                      {state.comparisonResults.party_results.map((partyResult, index) => (
                                        <li className = "candidate-party-similarity-item"
                                          key={index}
                                          onClick={() => handleEntityClick(partyResult, "party")}
                                        >
                                          <div className = "candidate-party-similarity-item">
                                            <span>
                                              <strong>{partyResult.party}</strong>
                                            </span>
                                            <span className = "result-score">
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
                          <div className = "entity-details-container">
                            {state.selectedEntity ? (
                              <>
                                <h2 style={{ margin: "8px 0" }}>
                                  {state.selectedEntity.name ? state.selectedEntity.name : state.selectedEntity.party}
                                </h2>
                                {state.entityDetails.candidate_meta && (
                                  <div style={{ marginBottom: "4px" }}>
                                    <p style={{ margin: "2px 0" }}>
                                    <>
                                      {!config.isPresidentialElection && (
                                        <>
                                          <strong>Edad:</strong> {state.entityDetails.candidate_meta.age}
                                          <br />
                                          <strong>Sentencia penal:</strong> {state.entityDetails.candidate_meta.sentencia_penal}
                                          <br />
                                          <strong>Asistencia:</strong> {state.entityDetails.candidate_meta.attendance || "N/A"}
                                          <br />
                                        </>
                                      )}
                                      <strong>Partido:</strong> {state.entityDetails.candidate_meta.party}
                                      <br /><br />
                                    </>

                                    </p>
                                  </div>
                                )}

                                {state.entityDetails.party_meta && config.name !== "chile" && (
                                  <div style={{ marginBottom: "4px" }}>
                                    <p style={{ margin: "2px 0" }}>
                                      <strong>Edad promedio:</strong> {state.entityDetails.party_meta.average_age}
                                      <br />
                                      <strong>Asistencia promedio:</strong> {state.entityDetails.party_meta.average_attendance_percentage || "N/A"}%
                                      <br />
                                      <strong>Sentencia penal:</strong> {state.entityDetails.party_meta.sentencia_penal.yes}/{state.entityDetails.party_meta.sentencia_penal.total} congresistas
                                      <br />
                                    </p>
                                    <br />
                                  </div>
                                )}

                                {state.entityDetails.details && state.entityDetails.details.length > 0 ? (
                                  state.questionDetails.length > 0 ? (
                                    state.questionDetails.map((qd, idx) => {
                                      const detail = state.entityDetails.details.find((d) => d.id === qd.id);
                                      if (!detail) return null;
                                      const actualSource = qd.source;
                                      return (
                                        <div key={idx} style={{ marginBottom: "2px", lineHeight: "1.2" }}>
                                          <p style={{ margin: "2px 0" }}>
                                            <strong>Opinión:</strong> {qd.question} <br />
                                            {config.showLawInfo && qd.law && (
                                              <small style={{ color: "gray", fontSize: "0.9em" }}>
                                                <strong>Proyecto de ley:</strong> {qd.law}
                                              </small>
                                            )}
                                          </p>
                                          {config.showLawInfo && (
                                            <p style={{ margin: "2px 0" }}>
                                              <strong>Fecha de la votación:</strong> {detail.date || "N/A"} <br />
                                            </p>
                                          )}
                                          <p style={{ margin: "2px 0" }}>
                                            <strong>Tu respuesta:</strong> {userAnswerMapping[state.answers[idx]] || "Sin respuesta"}
                                          </p>
                                          <p style={{ margin: "2px 0" }}>
                                            {state.entityDetails.party_meta ? (
                                              detail.vote_counts ? (
                                                <>
                                                  <strong>Votos del partido:</strong> A favor: {detail.vote_counts["A favor"] || 0},{" "}
                                                  En contra: {detail.vote_counts["En contra"] || 0},{" "}
                                                  Abstención: {detail.vote_counts["Abstención"] || 0}
                                                  <br />
                                                </>
                                              ) : (
                                                <>
                                                  <strong>Voto más común del partido:</strong> {detail.vote || "N/A"} <br />
                                                </>
                                              )
                                              
                                              ) : (
                                                <>
                                                  {config.isPresidentialElection ? (
                                                    <>
                                                      <p style={{ margin: "2px 0" }}>
                                                        <strong>Opinión del candidato:</strong>{" "}
                                                        {detail.vote === "1"
                                                          ? "A favor"
                                                          : detail.vote === "0.5"
                                                          ? "Neutral"
                                                          : detail.vote === "0"
                                                          ? "En contra"
                                                          : detail.vote}
                                                      </p>
                                                      {detail.comment && (
                                                        <p style={{ margin: "2px 0" }}>
                                                          <strong>Comentario:</strong> {detail.comment}
                                                        </p>
                                                      )}
                                                      {detail.source && (
                                                        <p style={{ margin: "2px 0" }}>
                                                          <strong>Fuente:</strong>{" "}
                                                          <a href={detail.source} target="_blank" rel="noopener noreferrer">
                                                            {detail.source.slice(0, 40) + (detail.source.length > 30 ? "..." : "")}
                                                          </a>
                                                        </p>
                                                      )}
                                                    </>
                                                  ) : (
                                                    <p style={{ margin: "2px 0" }}>
                                                      <strong>Voto del congresista:</strong> {detail.vote} <br />
                                                    </p>
                                                  )}
                                                </>
                                              )}
                                          </p>
                                          {actualSource && actualSource.startsWith("http") && (
                                            <p style={{ margin: "2px 0" }}>
                                              {config.showLawInfo ? (
                                                <>
                                                  <strong>Documento y noticias:</strong>{" "}
                                                  <a href={actualSource} target="_blank" rel="noopener noreferrer">
                                                    {new URL(actualSource).hostname.replace("www.", "") + "/..."}
                                                  </a>
                                                </>
                                              ) : (
                                                <>
                                                  <strong>Noticias:</strong>{" "}
                                                  <a href={actualSource} target="_blank" rel="noopener noreferrer">
                                                    {new URL(actualSource).hostname.replace("www.", "") + "/..."}
                                                  </a>
                                                </>
                                              )}
                                            </p>
                                          )}
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
                        <div>
                          <button className = "back-to-survey-button"
                            onClick={() =>
                              dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.questions.length - 1 })
                            }
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "black")}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = "darkslategrey")}
                            style={{
                              backgroundColor: "darkslategrey",
                              transition: "background-color 0.2s ease-in-out",
                            }}
                          >
                            Volver a la encuesta
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            }
          />
          <Route path="/metodologia" element={<Methodology />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </>
    </Router>
  );
  }