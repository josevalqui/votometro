// src/elections/chile_combinada_2025.js
export default {
  name: "peru_2025",
  // parliamentary files
  parlQuestionsFile: "combined_questions_peru_2026.json",  // ← parliamentary questions
  parlVotesFile:     "combined_votes_peru_2026.json",      // ← parliamentary votes
  // presidential file
  presVotesFile:     "combined_votes_peru_pres_2026.json",  // ← presidential votes
  isPresidentialElection: true,
  processCandidateVote: v => v,
  showLawInfo: true,
  questionTypes:   ["parliamentary", "presidential"],
  resultTypes:     ["party", "parliamentaryCandidates", "presidentialCandidates"]
}