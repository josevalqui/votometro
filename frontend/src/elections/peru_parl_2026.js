const config = {
    name: "peru",
    questionsURL: "https://josevalqui.github.io/votometro/combined_questions_peru_2026.json",
    votesURL: "https://josevalqui.github.io/votometro/combined_votes_peru_2026.json",
    processCandidateVote: (candidateVote) => candidateVote, // Candidate votes are numbers.
    showLawInfo: true,
    isPresidentialElection: false,
  };
  
  export default config;
  