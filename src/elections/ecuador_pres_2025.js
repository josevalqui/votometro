const config = {
    name: "ecuador",
    questionsURL: "https://josevalqui.github.io/votometro/combined_questions_ecuador_2025.json",
    votesURL: "https://josevalqui.github.io/votometro/combined_votes_ecuador_2025.json",
    processCandidateVote: (candidateVote) => {
      // Map string answers to numeric values.
      if (typeof candidateVote === "string") {
        const mapping = { 
          "estoy de acuerdo": 1, 
          "no tengo una opinión sobre este tema": 0.5, 
          "no estoy de acuerdo": 0 
        };
        return mapping[candidateVote.trim().toLowerCase()] ?? 0;
      }
      return candidateVote;
    },
    showLawInfo: false, // No law info for Ecuador.
    isPresidentialElection: true,
  };
  
  export default config;
  