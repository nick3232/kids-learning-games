import { initializeQuiz } from "../shared/quiz.js";

// Add levels here; selection, advancement, and final-level replay are automatic.
export const levels = [
  {
    questions: [
      { problem: "3 - 1", correct: 2, choices: [1, 2, 3, 4] },
      { problem: "4 - 1", correct: 3, choices: [2, 3, 4, 5] },
      { problem: "5 - 2", correct: 3, choices: [2, 3, 4, 5] },
      { problem: "6 - 2", correct: 4, choices: [3, 4, 5, 6] },
      { problem: "7 - 3", correct: 4, choices: [3, 4, 5, 6] },
      { problem: "8 - 3", correct: 5, choices: [4, 5, 6, 7] },
      { problem: "9 - 4", correct: 5, choices: [4, 5, 6, 7] },
      { problem: "10 - 4", correct: 6, choices: [5, 6, 7, 8] },
      { problem: "11 - 4", correct: 7, choices: [6, 7, 8, 9] },
      { problem: "12 - 4", correct: 8, choices: [7, 8, 9, 10] }
    ],
  },
  {
    questions: [
      { problem: "10 - 5", correct: 5, choices: [4, 5, 6, 7] },
      { problem: "11 - 5", correct: 6, choices: [5, 6, 7, 8] },
      { problem: "12 - 5", correct: 7, choices: [6, 7, 8, 9] },
      { problem: "13 - 5", correct: 8, choices: [7, 8, 9, 10] },
      { problem: "14 - 5", correct: 9, choices: [8, 9, 10, 11] },
      { problem: "15 - 5", correct: 10, choices: [9, 10, 11, 12] },
      { problem: "16 - 5", correct: 11, choices: [10, 11, 12, 13] },
      { problem: "17 - 5", correct: 12, choices: [11, 12, 13, 14] },
      { problem: "18 - 5", correct: 13, choices: [12, 13, 14, 15] },
      { problem: "20 - 5", correct: 15, choices: [13, 14, 15, 16] }
    ],
  }
];

initializeQuiz({ levels });
