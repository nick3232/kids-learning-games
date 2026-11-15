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
  },
  {
    questions: [
      { emoji: "🎩", word: "Hat", correct: "H", choices: ["H", "N", "M", "A"] },
      { emoji: "🍦", word: "Ice cream", correct: "I", choices: ["I", "E", "A", "O"] },
      { emoji: "🧃", word: "Juice", correct: "J", choices: ["J", "G", "T", "F"] },
      { emoji: "🪁", word: "Kite", correct: "K", choices: ["K", "R", "H", "P"] },
      { emoji: "🦁", word: "Lion", correct: "L", choices: ["L", "I", "T", "D"] },
      { emoji: "🌙", word: "Moon", correct: "M", choices: ["M", "N", "W", "B"] },
      { emoji: "👃", word: "Nose", correct: "N", choices: ["N", "M", "H", "S"] },
      { emoji: "🐙", word: "Octopus", correct: "O", choices: ["O", "Q", "C", "G"] },
      { emoji: "🐰", word: "Rabbit", correct: "R", choices: ["R", "P", "B", "K"] },
      { emoji: "☀️", word: "Sun", correct: "S", choices: ["S", "C", "Z", "T"] },
      { emoji: "☂️", word: "Umbrella", correct: "U", choices: ["U", "V", "Y", "A"] },
      { emoji: "🦓", word: "Zebra", correct: "Z", choices: ["Z", "S", "N", "E"] }
    ],
  }
];

initializeQuiz({
  levels,
  renderQuestion(question, levelNumber) {
    document.getElementById("emojiDisplay").textContent = question.emoji;
    document.getElementById("wordDisplay").textContent = question.word.toUpperCase();
    document.querySelector("#endScreen .title").textContent =
      levelNumber === levels.length ? "Game Complete!" : "Great Job!";
  },
});
