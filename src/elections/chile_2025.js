// paste into src/elections/chile_combinada_2025.js
export default {
    name: "chile_combinada",
    // both question sets in order [parl, pres]
    questionsFile: [
      "combined_questions_chile_parl_2025.json",
      "combined_questions_chile_pres_2025.json"
    ],
    votesFile: [
      "combined_votes_chile_parl_2025.json",
      "combined_votes_chile_pres_2025.json"
    ],
    processCandidateVote: v => v,
    showLawInfo: true,
    isCombinedElection: true
}
