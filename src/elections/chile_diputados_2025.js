const config = {
    name: "chile",
    questionsURL: process.env.NODE_ENV === "development"
    ? "/votometro/combined_questions_chile_2025.json"
    : "https://josevalqui.github.io/votometro/combined_questions_chile_2025.json",
  
  votesURL: process.env.NODE_ENV === "development"
    ? "/votometro/combined_votes_chile_2025.json"
    : "https://josevalqui.github.io/votometro/combined_votes_chile_2025.json",
    processCandidateVote: (candidateVote) => candidateVote, // Candidate votes are numbers.
    showLawInfo: true,
    isPresidentialElection: false,
  };
  
  export default config;
  