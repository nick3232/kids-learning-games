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
  },
  {
    questions: [
      { problem: "12 - 6", correct: 6, choices: [4, 5, 6, 7] },
      { problem: "14 - 3", correct: 11, choices: [10, 11, 12, 13] },
      { problem: "15 - 7", correct: 8, choices: [7, 8, 9, 10] },
      { problem: "16 - 6", correct: 10, choices: [8, 9, 10, 11] },
      { problem: "17 - 8", correct: 9, choices: [8, 9, 10, 11] },
      { problem: "18 - 4", correct: 14, choices: [12, 13, 14, 15] },
      { problem: "18 - 9", correct: 9, choices: [7, 8, 9, 10] },
      { problem: "19 - 6", correct: 13, choices: [12, 13, 14, 15] },
      { problem: "20 - 8", correct: 12, choices: [10, 11, 12, 13] },
      { problem: "21 - 4", correct: 17, choices: [16, 17, 18, 19] }
    ],
  },
  {
    questions: [
      { problem: "20 - 7", correct: 13, choices: [12, 13, 14, 15] },
      { problem: "21 - 9", correct: 12, choices: [10, 11, 12, 13] },
      { problem: "22 - 6", correct: 16, choices: [15, 16, 17, 18] },
      { problem: "23 - 8", correct: 15, choices: [13, 14, 15, 16] },
      { problem: "24 - 4", correct: 20, choices: [18, 19, 20, 21] },
      { problem: "25 - 10", correct: 15, choices: [14, 15, 16, 17] },
      { problem: "26 - 7", correct: 19, choices: [17, 18, 19, 20] },
      { problem: "27 - 11", correct: 16, choices: [14, 15, 16, 17] },
      { problem: "28 - 14", correct: 14, choices: [13, 14, 15, 16] },
      { problem: "29 - 12", correct: 17, choices: [16, 17, 18, 19] }
    ],
  },
  {
    questions: [
      { problem: "26 - 12", correct: 14, choices: [12, 13, 14, 15] },
      { problem: "27 - 9", correct: 18, choices: [17, 18, 19, 20] },
      { problem: "28 - 15", correct: 13, choices: [11, 12, 13, 14] },
      { problem: "29 - 13", correct: 16, choices: [15, 16, 17, 18] },
      { problem: "30 - 8", correct: 22, choices: [20, 21, 22, 23] },
      { problem: "31 - 14", correct: 17, choices: [15, 16, 17, 18] },
      { problem: "32 - 13", correct: 19, choices: [18, 19, 20, 21] },
      { problem: "33 - 11", correct: 22, choices: [21, 22, 23, 24] },
      { problem: "34 - 18", correct: 16, choices: [14, 15, 16, 17] },
      { problem: "36 - 19", correct: 17, choices: [16, 17, 18, 19] }
    ],
  }
];

initializeQuiz({ levels });
