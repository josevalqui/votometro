// file: src/elections/chile_diputados_2025.js
export default {
  name: "chile",
  parlQuestionsFile: "combined_questions_chile_parl_2025.json",  // ← parliamentary questions
  parlVotesFile:     "combined_votes_chile_parl_2025.json",      // ← parliamentary votes
  processCandidateVote: v => v,  // votes are already numeric
  showLawInfo: true,
  questionTypes:      ["parliamentary"],           // ← new
  resultTypes:        ["party", "parliamentaryCandidates"]  // ← new
}
