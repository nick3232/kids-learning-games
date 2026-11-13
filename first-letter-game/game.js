import { initializeQuiz } from "../shared/quiz.js";

// Add levels here; selection, advancement, and final-level replay are automatic.
export const levels = [
  {
    questions: [
      { emoji: "🍎", word: "Apple", correct: "A", choices: ["A", "B", "C", "D"] },
      { emoji: "🍌", word: "Banana", correct: "B", choices: ["B", "M", "S", "T"] },
      { emoji: "🐱", word: "Cat", correct: "C", choices: ["C", "D", "P", "R"] },
      { emoji: "🐶", word: "Dog", correct: "D", choices: ["D", "L", "N", "S"] },
      { emoji: "🐘", word: "Elephant", correct: "E", choices: ["E", "F", "H", "K"] },
      { emoji: "🐟", word: "Fish", correct: "F", choices: ["F", "J", "Q", "W"] },
      { emoji: "🍇", word: "Grapes", correct: "G", choices: ["G", "L", "O", "Y"] },
      { emoji: "🚜", word: "Tractor", correct: "T", choices: ["T", "B", "C", "M"] },
      { emoji: "🏗️", word: "Crane", correct: "C", choices: ["C", "D", "G", "P"] },
      { emoji: "🚛", word: "Truck", correct: "T", choices: ["T", "F", "L", "R"] },
      { emoji: "🚚", word: "Van", correct: "V", choices: ["V", "N", "S", "W"] },
      { emoji: "🛻", word: "Pickup", correct: "P", choices: ["P", "H", "K", "R"] }
    ],
  }
];

initializeQuiz({
  levels,
  completionText: "Congratulations, you completed the game.",
  renderQuestion(question) {
    document.getElementById("emojiDisplay").textContent = question.emoji;
    document.getElementById("wordDisplay").textContent = question.word.toUpperCase();
  },
});
