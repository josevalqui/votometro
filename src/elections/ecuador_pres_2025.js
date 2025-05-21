// file: src/elections/ecuator_pres_2025.js
export default {
  name: "ecuador",
  questionsFile: "combined_questions_ecuador_2025.json",  // put this JSON in /public/
  votesFile:     "combined_votes_ecuador_2025.json",
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
  showLawInfo: false,           // Ecuador has no law info
  isPresidentialElection: true,
};
