const config = {
    name: "chile",
    questionsURL: "https://josevalqui.github.io/votometro/combined_questions_chile_2025.json",
    votesURL: "https://josevalqui.github.io/votometro/combined_votes_chile_2025.json",
    processCandidateVote: (candidateVote) => candidateVote, // Candidate votes are numbers.
    showLawInfo: true,
    isPresidentialElection: false,
  };
  
  export default config;
  