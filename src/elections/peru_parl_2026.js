// elections/peru_parl_2026.js
export default {
  name: "peru",
  parlQuestionsFile: "combined_questions_peru_2026.json",  // ← parliamentary questions
  parlVotesFile:     "combined_votes_peru_2026.json",      // ← parliamentary votes
  processCandidateVote: v => v,
  showLawInfo: true,
  questionTypes: ["parliamentary"],
  resultTypes:   ["party", "parliamentaryCandidates"]
}