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
  },
  {
    questions: [
      { problem: "5 × 8", correct: 40, choices: [38, 39, 40, 41] },
      { problem: "6 × 9", correct: 54, choices: [53, 54, 55, 56] },
      { problem: "7 × 9", correct: 63, choices: [61, 62, 63, 64] },
      { problem: "3 × 12", correct: 36, choices: [35, 36, 37, 38] },
      { problem: "4 × 11", correct: 44, choices: [42, 43, 44, 45] },
      { problem: "5 × 12", correct: 60, choices: [59, 60, 61, 62] },
      { problem: "7 × 11", correct: 77, choices: [75, 76, 77, 78] },
      { problem: "8 × 11", correct: 88, choices: [87, 88, 89, 90] },
      { problem: "9 × 11", correct: 99, choices: [97, 98, 99, 100] },
      { problem: "11 × 11", correct: 121, choices: [119, 120, 121, 122] }
    ],
  },
  {
    questions: [
      { problem: "4 × 12", correct: 48, choices: [47, 48, 49, 50] },
      { problem: "5 × 11", correct: 55, choices: [53, 54, 55, 56] },
      { problem: "6 × 11", correct: 66, choices: [65, 66, 67, 68] },
      { problem: "6 × 12", correct: 72, choices: [70, 71, 72, 73] },
      { problem: "7 × 12", correct: 84, choices: [83, 84, 85, 86] },
      { problem: "8 × 12", correct: 96, choices: [94, 95, 96, 97] },
      { problem: "9 × 12", correct: 108, choices: [107, 108, 109, 110] },
      { problem: "10 × 12", correct: 120, choices: [118, 119, 120, 121] },
      { problem: "3 × 13", correct: 39, choices: [38, 39, 40, 41] },
      { problem: "4 × 13", correct: 52, choices: [50, 51, 52, 53] }
    ],
  },
  {
    questions: [
      { problem: "5 × 14", correct: 70, choices: [68, 69, 70, 71] },
      { problem: "6 × 13", correct: 78, choices: [77, 78, 79, 80] },
      { problem: "7 × 13", correct: 91, choices: [89, 90, 91, 92] },
      { problem: "8 × 13", correct: 104, choices: [103, 104, 105, 106] },
      { problem: "9 × 13", correct: 117, choices: [115, 116, 117, 118] },
      { problem: "6 × 14", correct: 84, choices: [83, 84, 85, 86] },
      { problem: "7 × 14", correct: 98, choices: [96, 97, 98, 99] },
      { problem: "8 × 14", correct: 112, choices: [111, 112, 113, 114] },
      { problem: "5 × 15", correct: 75, choices: [73, 74, 75, 76] },
      { problem: "12 × 12", correct: 144, choices: [142, 143, 144, 145] }
    ],
  }
];

initializeQuiz({ levels });
