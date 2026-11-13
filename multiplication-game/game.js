import { initializeQuiz } from "../shared/quiz.js";

// Add levels here; selection, advancement, and final-level replay are automatic.
export const levels = [
  {
    questions: [
      { problem: "1 × 2", correct: 2, choices: [1, 2, 3, 4] },
      { problem: "1 × 5", correct: 5, choices: [4, 5, 6, 7] },
      { problem: "2 × 2", correct: 4, choices: [2, 3, 4, 5] },
      { problem: "2 × 3", correct: 6, choices: [4, 5, 6, 7] },
      { problem: "2 × 5", correct: 10, choices: [8, 9, 10, 11] },
      { problem: "3 × 3", correct: 9, choices: [7, 8, 9, 10] },
      { problem: "3 × 4", correct: 12, choices: [10, 11, 12, 13] },
      { problem: "4 × 4", correct: 16, choices: [14, 15, 16, 17] },
      { problem: "4 × 5", correct: 20, choices: [18, 19, 20, 21] },
      { problem: "5 × 5", correct: 25, choices: [22, 24, 25, 27] }
    ],
  },
  {
    questions: [
      { problem: "6 × 6", correct: 36, choices: [34, 35, 36, 37] },
      { problem: "6 × 7", correct: 42, choices: [40, 41, 42, 43] },
      { problem: "6 × 8", correct: 48, choices: [46, 47, 48, 49] },
      { problem: "7 × 7", correct: 49, choices: [47, 48, 49, 50] },
      { problem: "7 × 8", correct: 56, choices: [54, 55, 56, 57] },
      { problem: "8 × 8", correct: 64, choices: [62, 63, 64, 65] },
      { problem: "8 × 9", correct: 72, choices: [70, 71, 72, 73] },
      { problem: "9 × 9", correct: 81, choices: [79, 80, 81, 82] },
      { problem: "10 × 11", correct: 110, choices: [108, 109, 110, 111] },
      { problem: "11 × 12", correct: 132, choices: [129, 130, 132, 134] }
    ],
  }
];

initializeQuiz({ levels });
