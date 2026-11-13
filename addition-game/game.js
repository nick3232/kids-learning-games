import { initializeQuiz } from "../shared/quiz.js";

// Add levels here; selection, advancement, and final-level replay are automatic.
export const levels = [
  {
    questions: [
      { problem: "1 + 1", correct: 2, choices: [1, 2, 3, 4] },
      { problem: "1 + 2", correct: 3, choices: [2, 3, 4, 5] },
      { problem: "2 + 1", correct: 3, choices: [1, 2, 3, 4] },
      { problem: "2 + 2", correct: 4, choices: [3, 4, 5, 6] },
      { problem: "2 + 3", correct: 5, choices: [4, 5, 6, 7] },
      { problem: "3 + 1", correct: 4, choices: [2, 3, 4, 5] },
      { problem: "3 + 2", correct: 5, choices: [3, 4, 5, 6] },
      { problem: "4 + 1", correct: 5, choices: [4, 5, 6, 7] },
      { problem: "4 + 2", correct: 6, choices: [5, 6, 7, 8] },
      { problem: "5 + 1", correct: 6, choices: [4, 5, 6, 7] }
    ],
  },
  {
    questions: [
      { problem: "5 + 5", correct: 10, choices: [9, 10, 11, 12] },
      { problem: "6 + 4", correct: 10, choices: [10, 11, 12, 13] },
      { problem: "6 + 5", correct: 11, choices: [10, 11, 12, 13] },
      { problem: "7 + 5", correct: 12, choices: [11, 12, 13, 14] },
      { problem: "8 + 5", correct: 13, choices: [12, 13, 14, 15] },
      { problem: "7 + 7", correct: 14, choices: [13, 14, 15, 16] },
      { problem: "8 + 7", correct: 15, choices: [14, 15, 16, 17] },
      { problem: "9 + 7", correct: 16, choices: [15, 16, 17, 18] },
      { problem: "9 + 8", correct: 17, choices: [16, 17, 18, 19] },
      { problem: "9 + 9", correct: 18, choices: [17, 18, 19, 20] }
    ],
  },
  {
    questions: [
      { problem: "1 + 10", correct: 11, choices: [10, 11, 12, 13] },
      { problem: "2 + 11", correct: 13, choices: [12, 13, 14, 15] },
      { problem: "3 + 12", correct: 15, choices: [14, 15, 16, 17] },
      { problem: "4 + 13", correct: 17, choices: [16, 17, 18, 19] },
      { problem: "5 + 14", correct: 19, choices: [18, 19, 20, 21] },
      { problem: "6 + 15", correct: 21, choices: [20, 21, 22, 23] },
      { problem: "7 + 10", correct: 17, choices: [16, 17, 18, 19] },
      { problem: "8 + 11", correct: 19, choices: [18, 19, 20, 21] },
      { problem: "9 + 12", correct: 21, choices: [20, 21, 22, 23] },
      { problem: "4 + 15", correct: 19, choices: [17, 18, 19, 20] }
    ],
  },
  {
    questions: [
      { problem: "1 + 16", correct: 17, choices: [16, 17, 18, 19] },
      { problem: "2 + 17", correct: 19, choices: [18, 19, 20, 21] },
      { problem: "3 + 18", correct: 21, choices: [20, 21, 22, 23] },
      { problem: "4 + 19", correct: 23, choices: [22, 23, 24, 25] },
      { problem: "5 + 20", correct: 25, choices: [24, 25, 26, 27] },
      { problem: "6 + 16", correct: 22, choices: [21, 22, 23, 24] },
      { problem: "7 + 17", correct: 24, choices: [23, 24, 25, 26] },
      { problem: "8 + 18", correct: 26, choices: [25, 26, 27, 28] },
      { problem: "9 + 19", correct: 28, choices: [27, 28, 29, 30] },
      { problem: "3 + 20", correct: 23, choices: [22, 23, 24, 25] }
    ],
  }
];

initializeQuiz({ levels });
