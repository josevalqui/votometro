// file: src/elections/chile_diputados_2025.js
export default {
  name: "chile_presidencial_2025",
  votesFile: "combined_votes_chile_pres_2025.json",
  processCandidateVote: v => v,  // votes are already numeric
  showLawInfo: false,
  isPresidentialElection: true
}
