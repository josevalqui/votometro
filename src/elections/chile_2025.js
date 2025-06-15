// src/elections/chile_combinada_2025.js
export default {
  name: "chile_2025",
  // parliamentary files
  parlQuestionsFile: "combined_questions_chile_parl_2025.json",  // ← parliamentary questions
  parlVotesFile:     "combined_votes_chile_parl_2025.json",      // ← parliamentary votes
  // presidential file
  presVotesFile:     "combined_votes_chile_pres_2025.json",  // ← presidential votes
  isPresidentialElection: true,
  processCandidateVote: v => v,
  showLawInfo: true,
  questionTypes:   ["parliamentary", "presidential"],
  resultTypes:     ["party", "parliamentaryCandidates", "presidentialCandidates"]
}