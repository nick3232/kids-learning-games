import { initializeQuiz } from "../shared/quiz.js";

// Add levels here; selection, advancement, and final-level replay are automatic.
export const levels = [
  {
    questions: [
      { emoji: "⭐", count: 1, choices: [1, 2, 3, 4] },
      { emoji: "🍎", count: 2, choices: [1, 2, 3, 4] },
      { emoji: "🐶", count: 3, choices: [2, 3, 4, 5] },
      { emoji: "🚗", count: 4, choices: [3, 4, 5, 6] },
      { emoji: "🌈", count: 5, choices: [4, 5, 6, 7] },
      { emoji: "🍌", count: 1, choices: [1, 2, 3, 4] },
      { emoji: "🐸", count: 2, choices: [1, 2, 3, 4] },
      { emoji: "⚽", count: 3, choices: [2, 3, 4, 5] },
      { emoji: "🦋", count: 4, choices: [3, 4, 5, 6] },
      { emoji: "🍪", count: 5, choices: [4, 5, 6, 7] }
    ],
  },
  {
    questions: [
      { emoji: "⭐", count: 6, choices: [5, 6, 7, 8] },
      { emoji: "🍎", count: 7, choices: [6, 7, 8, 9] },
      { emoji: "🐶", count: 8, choices: [7, 8, 9, 10] },
      { emoji: "🚗", count: 9, choices: [8, 9, 10, 11] },
      { emoji: "🌈", count: 10, choices: [9, 10, 11, 12] },
      { emoji: "🍌", count: 6, choices: [5, 6, 7, 8] },
      { emoji: "🐸", count: 7, choices: [6, 7, 8, 9] },
      { emoji: "⚽", count: 8, choices: [7, 8, 9, 10] },
      { emoji: "🦋", count: 9, choices: [8, 9, 10, 11] },
      { emoji: "🍪", count: 10, choices: [9, 10, 11, 12] }
    ],
  }
];

function getGridColumns(count) {
  if (count <= 3) return count;
  if (count <= 6) return 3;
  if (count <= 8) return 4;
  return 5;
}

initializeQuiz({
  levels,
  getAnswer: question => question.count,
  renderQuestion(question, levelNumber) {
    document.getElementById("countLabel").textContent = "Level " + levelNumber;
    const grid = document.getElementById("emojiGrid");
    grid.replaceChildren();
    grid.style.gridTemplateColumns = `repeat(${getGridColumns(question.count)}, minmax(0, auto))`;
    for (let i = 0; i < question.count; i++) {
      const item = document.createElement("div");
      item.className = "emoji-item";
      item.textContent = question.emoji;
      grid.appendChild(item);
    }
  },
});
