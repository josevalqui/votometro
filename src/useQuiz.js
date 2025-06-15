// useQuiz.js
import { useReducer, useMemo, useEffect } from "react";
import peruConfig from "./elections/peru_parl_2026";
import chileConfig from "./elections/chile_diputados_2025";
import chilePresidencial2025 from "./elections/chile_presidencial_2025";

// Map election types to their configuration objects.
const electionConfigs = {
  peru_parl_2026: peruConfig,
  chile_diputados_2025: chileConfig,
  chile_presidencial_2025: chilePresidencial2025, 
};

const initialState = {
  questions: [],
  questionDetails: [],
  currentQuestionIndex: 0,
  answers: [],
  weights: [],
  comparisonResults: null,
  selectedEntity: null,
  entityDetails: {},
  hoveredOption: null,
  showIndividualResults: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        questionDetails: action.payload,
        answers: Array(action.payload.length).fill(null),
        weights: Array(action.payload.length).fill(3),
      };
    case "SET_CURRENT_QUESTION_INDEX":
      return { ...state, currentQuestionIndex: action.payload };
    case "ANSWER":
      const newAnswers = [...state.answers];
      newAnswers[action.index] = action.answer;
      return { ...state, answers: newAnswers };
    case "SET_WEIGHTS":
      const newWeights = [...state.weights];
      newWeights[action.index] = action.weight;
      return { ...state, weights: newWeights };
    case "SET_COMPARISON_RESULTS":
      return { ...state, comparisonResults: action.payload };
    case "SET_SELECTED_ENTITY":
      return { ...state, selectedEntity: action.payload };
    case "SET_ENTITY_DETAILS":
      return { ...state, entityDetails: action.payload };
    case "SET_HOVERED_OPTION":
      return { ...state, hoveredOption: action.payload };
    case "SET_SHOW_INDIVIDUAL_RESULTS":
      return { ...state, showIndividualResults: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function useQuiz(election) {
  // Memoize config so it updates only when election changes.
  const config = useMemo(() => (election ? electionConfigs[election] : {}), [election]);
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    if (!election) return;

    if (config.isPresidentialElection) {
      // Presidential: derive questions from the first candidate’s votes object
      fetch(import.meta.env.BASE_URL + config.votesFile)
        .then(res => res.json())
        .then(data => {
          const candidatesArr = Object.values(data.candidates);
          if (candidatesArr.length === 0) {
            console.error("No candidates in votesFile for presidential election");
            return;
          }
          const firstVotes = candidatesArr[0].votes;
          const questionsArr = Object.entries(firstVotes).map(
            ([qid, qobj]) => ({
              id:        qid,
              question:  qobj.question,
              options: [
                "Estoy de acuerdo",
                "No tengo una opinión sobre este tema",
                "No estoy de acuerdo"
              ],
              polarity: ""  // no polarity info for presidential
            })
          );
          dispatch({ type: "SET_QUESTIONS", payload: questionsArr });
        })
        .catch(err =>
          console.error("Error fetching votesFile for presidential:", err)
        );
    } else {
      // Non-presidential (diputados, etc.): fetch a separate questionsFile
      fetch(import.meta.env.BASE_URL + config.questionsFile)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data) && data.length > 0) {
            dispatch({ type: "SET_QUESTIONS", payload: data });
          } else {
            console.error("Invalid combined questions data:", data);
          }
        })
        .catch(err => console.error("Error fetching questionsFile:", err));
    }
  }, [
    election,
    config.isPresidentialElection,
    config.questionsFile,
    config.votesFile
  ]);

  return { state, dispatch, config, electionConfigs };
}
