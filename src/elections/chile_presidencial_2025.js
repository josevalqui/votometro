// file: src/elections/chile_diputados_2025.js
export default {
  name: "chile_presidencial_2025",
  presVotesFile:     "combined_votes_chile_pres_2025.json",  // ← presidential votes
  processCandidateVote: v => v,
  showLawInfo: false,
  isPresidentialElection: true,
  questionTypes: ["presidential"],
  resultTypes:   ["presidentialCandidates"]
}