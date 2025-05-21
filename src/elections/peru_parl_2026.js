// elections/peru_parl_2026.js
export default {
  name: 'peru',
  questionsFile: 'combined_questions_peru_2026.json',   // ← just the filename
  votesFile:     'combined_votes_peru_2026.json',
  processCandidateVote: v => v,
  showLawInfo: true,
  isPresidentialElection: false
}
