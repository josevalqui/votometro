import React, { useState, useEffect } from "react";
import { useQuiz } from "./useQuiz";
import { db } from "./firebase"; // adjust path if needed
import { collection, addDoc } from "firebase/firestore";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Methodology from "./metodologia";
import Contacto from "./contacto";
import './App.css';

function Menu({ open, onClose }) {
  return open ? (
    <div className="menu-panel">
      <ul style={{textDecoration: "none", listStyle: "none", margin: 0, padding: 10 }}>
        <li className="menu-list-item"><Link to="/" onClick={onClose}>Encuesta</Link></li>
        <li className="menu-list-item"><Link to="/metodologia" onClick={onClose}>Metodología</Link></li>
        <li className="menu-list-item"><Link to="/contacto"    onClick={onClose}>Contacto</Link></li>
      </ul>
    </div>
  ) : null;
}

export default function App() {
  const [election, setElection] = useState(null);
  const { state, dispatch, config, electionConfigs } = useQuiz(election);
  const resultTypes = config.resultTypes || [];
  const [showMenu, setShowMenu] = useState(false); // <-- add near your other useState hooks
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const [selectedResultType, setSelectedResultType] = 
    useState(resultTypes[0] || null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const handleMobileToggle = (entity, type) => {
    const id = type === "party" ? entity.party : entity.name;
    setMobileOpen(prev => {
      const isSame = prev === id;
      if (!isSame) handleEntityClick(entity, type);
      return isSame ? null : id;
    });
  };

  // helper for both mobile (inline) and desktop details
  const EntityDetails = ({ inline = false }) => {
    if (!state.selectedEntity) return null

    const wrapperClass = inline
      ? "entity-details-inline"
      : "entity-details-container"
    const { candidate_meta, party_meta, details } = state.entityDetails

    return (
      <div className={wrapperClass}>
        <h2 style={{ margin: inline ? "4px 0" : "8px 0" }}>
          {state.selectedEntity.name || state.selectedEntity.party}
        </h2>

        {candidate_meta && (
          <>
            {!config.isPresidentialElection && (
              <>
                <strong>Edad:</strong> {candidate_meta.age}<br/>
                <strong>Asistencia:</strong> {candidate_meta.attendance || "N/A"}<br/>
              </>
            )}
            <strong>Partido:</strong> {candidate_meta.party}<br/><br/>
          </>
        )}

        {party_meta && config.name !== "chile" && !config.isPresidentialElection && (
          <>
            <strong>Edad promedio:</strong> {party_meta.average_age}<br/>
            <strong>Asistencia promedio:</strong> {party_meta.average_attendance_percentage || "N/A"}%<br/><br/>
          </>
        )}

        {details && details.length > 0 ? (
          state.questionDetails.length > 0 ? (
            state.questionDetails.map((qd, idx) => {
              const d = details.find(x => x.id === qd.id)
              if (!d) return null
              const src = qd.source

              return (
                <div key={idx} style={{ marginBottom: inline ? "4px" : "2px", lineHeight: "1.2" }}>
                  <p style={{ margin: "2px 0" }}>
                    <strong>Tema:</strong> {qd.question}<br/>
                    {config.showLawInfo && qd.law && (
                      <small style={{ color: "gray", fontSize: "0.9em" }}>
                        <strong>Proyecto de ley:</strong> {qd.law}
                      </small>
                    )}
                  </p>

                  {config.showLawInfo && !config.isPresidentialElection && (
                    <p style={{ margin: "2px 0" }}>
                      <strong>Fecha:</strong> {d.date || "N/A"}<br/>
                    </p>
                  )}

                  <p style={{ margin: "2px 0" }}>
                    <strong>Tu respuesta:</strong> {userAnswerMapping[state.answers[idx]] || "Sin respuesta"}<br/>
                  </p>

                  <p style={{ margin: "2px 0" }}>
                    {party_meta ? (
                      d.vote_counts ? (
                        <>
                          <strong>Votos del partido:</strong> A favor: {d.vote_counts["A favor"] || 0}, En contra: {d.vote_counts["En contra"] || 0}, Abstención: {d.vote_counts["Abstención"] || 0}<br/>
                        </>
                      ) : (
                        <>
                          <strong>Voto más común:</strong> {d.vote || "N/A"}<br/>
                        </>
                      )
                    ) : config.isPresidentialElection ? (
                      <>
                        <strong>Opinión del candidato:</strong>{" "}
                          {d.vote === "1" ? "A favor" : d.vote === "0.5" ? "Neutral" : "En contra"}<br/>
                        {d.comment && (<><strong>Comentario:</strong> {d.comment}<br/></>)}
                        {d.source  && (<><strong>Fuente:</strong>{" "}
                          <a href={d.source} target="_blank" rel="noopener noreferrer">
                            {d.source.slice(0,40)}…
                          </a><br/>
                        </>)}
                      </>
                    ) : (
                      <>
                        <strong>Voto del congresista:</strong> {d.vote}<br/>
                      </>
                    )}
                  </p>

                  {src && src.startsWith("http") && (
                    <p style={{ margin: "2px 0" }}>
                      {config.showLawInfo ? (
                        <>
                          <strong>Documento y noticias:</strong>{" "}
                          <a href={src} target="_blank" rel="noopener noreferrer">
                            {new URL(src).hostname.replace("www.","")}…
                          </a><br/>
                        </>
                      ) : (
                        <>
                          <strong>Noticias:</strong>{" "}
                          <a href={src} target="_blank" rel="noopener noreferrer">
                            {new URL(src).hostname.replace("www.","")}…
                          </a><br/>
                        </>
                      )}
                    </p>
                  )}

                  <br/>
                </div>
              )
            })
          ) : (
            <p style={{ margin: "2px 0" }}>No vote details available.</p>
          )
        ) : (
          <p style={{ margin: "2px 0" }}>No vote details available.</p>
        )}
      </div>
    )
  }


  
  useEffect(() => {                                
    if (resultTypes.length) {                      
      setSelectedResultType(resultTypes[0]);
    }
  }, [resultTypes]);

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



  // Paste inside App(), alongside your other handlers:
  const goTo = idx =>
    dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: idx });

  // Replace handleSkip and handleGoBack with these:
  const handleSkip    = () => goTo(state.currentQuestionIndex + 1);
  const handleGoBack  = () => goTo(state.currentQuestionIndex - 1);

  // And shrink handleAnswerClick to:
  const handleAnswerClick = option => {
    dispatch({ type: "ANSWER", index: state.currentQuestionIndex, answer: option });
    if (state.currentQuestionIndex < state.questions.length - 1)
      goTo(state.currentQuestionIndex + 1);
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
    const base = import.meta.env.BASE_URL;
    console.log("Parliamentary votes URL:", base + config.parlVotesFile);
    console.log("Presidential votes URL: ", base + config.presVotesFile);
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


    // only fetch parliamentary votes when needed
    const parlPromise = config.questionTypes.includes("parliamentary")
      ? fetch(base + config.parlVotesFile)
          .then(r => { if (!r.ok) throw new Error("Parl fetch failed"); return r.json() })
      : Promise.resolve(null);

    // only fetch presidential votes when needed
    const presPromise = config.questionTypes.includes("presidential") && config.presVotesFile
      ? fetch(base + config.presVotesFile)
          .then(r => { if (!r.ok) throw new Error("Pres fetch failed"); return r.json() })
      : Promise.resolve(null);

    Promise.all([parlPromise, presPromise])
      .then(([parlData, presData]) => {
        // 1) parliamentaryResults
        const parliamentaryResults = parlData
          ? Object.values(parlData.candidates.processed || {}).map(cand => {
              let weightedDiff = 0;
              let totalWeight = 0;
              Object.entries(cand.votes).forEach(([qid, vote]) => {
                const nv = config.processCandidateVote(vote);
                const ua = userAnswers[qid];
                if (ua != null && !Number.isNaN(nv)) {
                  weightedDiff += Math.abs(ua.answer - nv) * ua.weight;
                  totalWeight += ua.weight;
                }
              });
              return {
                name: cand.name,
                party: cand.party || cand.candidate_meta?.party,
                similarity_score: totalWeight
                  ? Math.round((1 - weightedDiff / totalWeight) * 100)
                  : 0
              };
            }).sort((a, b) => b.similarity_score - a.similarity_score)
          : [];

        // 2) partyResults
        const partyResults = config.resultTypes.includes("party")
          ? (() => {
              const agg = {};
              parliamentaryResults.forEach(({ party, similarity_score }) => {
                if (!agg[party]) agg[party] = { total: 0, count: 0 };
                agg[party].total += similarity_score;
                agg[party].count += 1;
              });
              return Object.entries(agg)
                .map(([party, stats]) => ({
                  party,
                  average_similarity_score: Math.round(stats.total / stats.count)
                }))
                .sort((a, b) => b.average_similarity_score - a.average_similarity_score);
            })()
          : [];

        // 3) presidentialResults
        const presidentialResults = presData
          ? Object.entries(presData.candidates).map(([name, info]) => {
              let weightedDiff = 0;
              let totalWeight = 0;
              Object.entries(info.votes).forEach(([qid, qobj]) => {
                const nv = parseFloat(qobj.vote);
                const ua = userAnswers[qid];
                if (ua != null && !Number.isNaN(nv)) {
                  weightedDiff += Math.abs(ua.answer - nv) * ua.weight;
                  totalWeight += ua.weight;
                }
              });
              return {
                name,
                party: info.party,
                similarity_score: totalWeight
                  ? Math.round((1 - weightedDiff / totalWeight) * 100)
                  : 0
              };
            }).sort((a, b) => b.similarity_score - a.similarity_score)
          : [];

        // dispatch all three result sets
        dispatch({
          type: "SET_COMPARISON_RESULTS",
          payload: {
            individual_results:   parliamentaryResults,
            party_results:        partyResults,
            presidential_results: presidentialResults
          }
        });
      })
      .catch(err => console.error("Error fetching votes:", err));
  };

  const handleEntityClick = (entity, type) => {
    dispatch({ type: "SET_SELECTED_ENTITY", payload: entity });
    const base = import.meta.env.BASE_URL;
    const file = type === "presidential"
      ? config.presVotesFile
      : config.parlVotesFile;

    fetch(base + file)
      .then(r => {
        if (!r.ok) throw new Error(`Fetch failed for ${file}`);
        return r.json();
      })
      .then(data => {
        if (type === "presidential") {
          const candObj = data.candidates[entity.name];
          if (!candObj) {
            console.error("No candidate data for", entity.name);
            return;
          }
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
            payload: {
              candidate_meta: { party: candObj.party },
              details:        detailsArr
            }
          });
        } else if (type === "party") {
          dispatch({
            type: "SET_ENTITY_DETAILS",
            payload: {
              party_meta: data.parties.meta[entity.party]   || {},
              details:    data.parties.details[entity.party] || []
            }
          });
        } else {
          // individual (parliamentary) candidate
          dispatch({
            type: "SET_ENTITY_DETAILS",
            payload: data.candidates.details[entity.name] || {}
          });
        }
      })
      .catch(err => console.error("Error fetching votes:", err));
  };

  useEffect(() => {
    if (!state.comparisonResults || !selectedResultType) return;

    let list = [];
    let type = "";

    if (selectedResultType === "party") {
      list = state.comparisonResults.party_results;
      type = "party";
    } else if (selectedResultType === "parliamentaryCandidates") {
      list = state.comparisonResults.individual_results;
      type = "individual";
    } else if (selectedResultType === "presidentialCandidates") {
      list = state.comparisonResults.presidential_results;
      type = "presidential";
    }

    if (list.length > 0) {
      handleEntityClick(list[0], type);
    }
  }, [state.comparisonResults, selectedResultType]);

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
          <button className="menu-button" onClick={() => setShowMenu(!showMenu)}>
            Menu
          </button>
        <Menu open={showMenu} onClose={() => setShowMenu(false)} />

        <Routes>
          <Route 
            path="/" 
            element={
              <div className="main-container"
              >
                {!election ? (
                  <div className="election-selection-container">
                    <h2>Elecciones</h2>
                    <button onClick={() => setElection("chile_2025")}>
                      Chile: Elecciones generales (15.11.2025)
                    </button>
                    {/* <button onClick={() => setElection("chile_diputados_2025")}>
                      Chile: Elección parlamentaria (15.11.2025)
                    </button>
                    <button onClick={() => setElection("chile_presidencial_2025")}>
                      Chile: Elección presidencial (15.11.2025)
                    </button> */}
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
                        <div className = "question-text-container">
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
                                    ? "#20292e"
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
                        {resultTypes.length > 1 && (
                          <div className="results-toggle-container">
                            {resultTypes.map(rt => (
                              <button
                                key={rt}
                                className="option-button"
                                onClick={() => setSelectedResultType(rt)}
                                onMouseEnter={() => dispatch({ type: "SET_HOVERED_OPTION", payload: rt })}
                                onMouseLeave={() => dispatch({ type: "SET_HOVERED_OPTION", payload: null })}
                                style={{
                                  backgroundColor:
                                    selectedResultType === rt || state.hoveredOption === rt
                                      ? "#20292e"
                                      : "darkslategrey"
                                }}
                              >
                                {rt === "party"                   && "Partidos políticos"}
                                {rt === "parliamentaryCandidates" && "Diputados"}
                                {rt === "presidentialCandidates"  && "Candidatos presidenciales"}
                              </button>
                            ))}
                          </div>
                        )}

                        <div style={{display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%"}}>
                          <div style={{ flex: 1 }}>
                            {state.comparisonResults && (
                              <>
                                {selectedResultType === "party" && (
                                  <>
                                    <div className="candidate-party-similarity-header">
                                      <span>Partido</span>
                                      <span>Similaridad</span>
                                    </div>
                                    <ul style={{ listStyleType: "none", padding: 0, textAlign: "left", width: "100%" }}>
                                      {state.comparisonResults.party_results.map((partyResult, index) => (
                                      <>
                                        <li
                                          className="candidate-party-similarity-item"
                                          key={index}
                                          onClick={() =>
                                            isMobile
                                              ? handleMobileToggle(partyResult, "party")
                                              : handleEntityClick(partyResult, "party")
                                          }
                                        >
                                          <div className="candidate-party-similarity-item">
                                            <span><strong>{partyResult.party}</strong></span>
                                            <span className="result-score">
                                              {partyResult.average_similarity_score}%
                                            </span>
                                          </div>
                                        </li>

                                        {isMobile && mobileOpen === partyResult.party && <EntityDetails inline />}
                                      </>
                                      ))}
                                    </ul>
                                  </>
                                )}
                      
                                {selectedResultType === "parliamentaryCandidates" && (
                                  <>
                                    <div className="candidate-party-similarity-header">
                                      <span>Candidatos parlamentarios</span>
                                      <span>Similaridad</span>
                                    </div>
                                    <ul className="parties-and-candidates-list">
                                      {state.comparisonResults.individual_results.map((result, index) => (
                                      <>
                                        <li
                                          className="candidate-party-similarity-item"
                                          key={index}
                                          onClick={() =>
                                            isMobile
                                              ? handleMobileToggle(result, "individual")
                                              : handleEntityClick(result, "individual")
                                          }
                                        >
                                          <span>{result.names?.join(", ") || result.name}</span>
                                          <span className="result-score">
                                            {result.similarity_score}%
                                          </span>
                                        </li>

                                        {isMobile && mobileOpen === result.name && <EntityDetails inline />}
                                      </>
                                      ))}
                                    </ul>
                                  </>
                                )}
                      
                                {selectedResultType === "presidentialCandidates" && (
                                  <>
                                    <div className="candidate-party-similarity-header">
                                      <span>Candidatos presidenciales</span>
                                      <span>Similaridad</span>
                                    </div>
                                    <ul className="parties-and-candidates-list">
                                      {state.comparisonResults.presidential_results.map((result, index) => (
                                    <>
                                      <li
                                        className="candidate-party-similarity-item"
                                        key={index}
                                        onClick={() =>
                                          isMobile
                                            ? handleMobileToggle(result, "presidential")
                                            : handleEntityClick(result, "presidential")
                                        }
                                      >
                                        <span>{result.name}</span>
                                        <span className="result-score">
                                          {result.similarity_score}%
                                        </span>
                                      </li>

                                      {isMobile && mobileOpen === result.name && <EntityDetails inline />}
                                    </>
                                      ))}
                                    </ul>
                                  </>
                                )}
                              </>
                            )}
                          </div>

                          <EntityDetails />

                        </div>
                        <div>
                          <button className = "back-to-survey-button"
                            onClick={() =>
                              dispatch({ type: "SET_CURRENT_QUESTION_INDEX", payload: state.questions.length - 1 })
                            }
                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#20292e")}
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