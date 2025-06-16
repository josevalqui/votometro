// useQuiz.js
import { useReducer, useMemo, useEffect } from "react";
import peruConfig from "./elections/peru_parl_2026";
import chileConfig from "./elections/chile_diputados_2025";
import chilePresidencial2025 from "./elections/chile_presidencial_2025";
import chile2025     from "./elections/chile_2025";  // ← PASTE HERE

// Map election types to their configuration objects.
const electionConfigs = {
  peru_parl_2026: peruConfig,
  chile_diputados_2025: chileConfig,
  chile_presidencial_2025: chilePresidencial2025,
  chile_2025: chile2025,
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
    // load parliamentary questions if requested
    // inside useEffect(…) in useQuiz.js, replace the old fetches with:
    const loadParlQs = config.questionTypes.includes("parliamentary")
      ? fetch(import.meta.env.BASE_URL + config.parlQuestionsFile).then(r => r.json())
      : Promise.resolve([]);

    const loadPresQs = config.questionTypes.includes("presidential")
      ? fetch(import.meta.env.BASE_URL + config.presVotesFile)
          .then(r => r.json())
          .then(data => {
            // build questions array from the first candidate’s votes
            const sample = Object.values(data.candidates)[0].votes;
            return Object.entries(sample).map(([id, q]) => ({
              id,
              question: q.question,
              options: [
                "Estoy de acuerdo",
                "Neutral",
                "No estoy de acuerdo"
              ],
              polarity: ""
            }));
          })
      : Promise.resolve([]);

    Promise.all([loadParlQs, loadPresQs])
      .then(([parlQs, presQs]) =>
        dispatch({ type: "SET_QUESTIONS", payload: [...parlQs, ...presQs] })
      )
      .catch(err => console.error("Error loading questions:", err));
  }, [
    election,
    config.questionsFile,
    config.votesFile,
    config.questionTypes
  ]);

  return { state, dispatch, config, electionConfigs };
}
