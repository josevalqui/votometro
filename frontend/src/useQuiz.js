// useQuiz.js
import { useReducer, useMemo, useEffect } from "react";
import peruConfig from "./elections/peru_parl_2026";
import ecuadorConfig from "./elections/ecuador_pres_2025";

// Map election types to their configuration objects.
const electionConfigs = {
  peru_parl_2026: peruConfig,
  ecuador_pres_2025: ecuadorConfig,
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
    fetch(config.questionsURL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          dispatch({ type: "SET_QUESTIONS", payload: data });
        } else {
          console.error("Invalid combined questions data:", data);
        }
      })
      .catch((err) => console.error("Error fetching questions:", err));
  }, [election, config.questionsURL]);

  return { state, dispatch, config, electionConfigs };
}
