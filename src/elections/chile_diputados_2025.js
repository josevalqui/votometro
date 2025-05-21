// file: src/elections/chile_diputados_2025.js
export default {
  name: "chile",
  questionsFile: "combined_questions_chile_2025.json",  // put this JSON in /public/
  votesFile:     "combined_votes_chile_2025.json",
  processCandidateVote: v => v,  // votes are already numeric
  showLawInfo: true,
  isPresidentialElection: false,
};
