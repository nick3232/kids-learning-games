/* =========================================================
   Matching Grid Game — Logic with Selection Menu & Forced First Choice
========================================================= */

const boards = {
  fruit: [ "🍌", "🍇", "🍓", "🍒", "🥝", "🍋"],
  shapes: ["🔺", "🔵", "🟩", "🟠", "⭐", "❤️"],
  transportation: ["🚓","🚑","🚒","🚜","✈️","🚀"],
};

let currentBoard = null;
let cardsData = [];
let firstCard = null;
let lock = false;
let matches = 0;
let boardSelectedOnce = false; // NEW — track if a board has been chosen

const grid = document.getElementById("grid");
const feedback = document.getElementById("feedback");
const boardName = document.getElementById("boardName");
const menuOverlay = document.getElementById("menuOverlay");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createCard(symbol) {
  const card = document.createElement("div");
  card.className = "card";
  const inner = document.createElement("div");
  inner.className = "card-inner no-transition";

  const front = document.createElement("div");
  front.className = "card-face card-front";
  // front.textContent = "🎴"; // optional decorative emoji

  const back = document.createElement("div");
  back.className = "card-face card-back";
  back.textContent = symbol;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => flipCard(card, symbol));
  return card;
}

function flipCard(card, symbol) {
  if (lock || card.classList.contains("flipped")) return;
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = { card, symbol };
    return;
  }

  lock = true;
  const secondCard = { card, symbol };

  if (firstCard.symbol === secondCard.symbol) {
    matches++;
    feedback.textContent = "✅ Match found!";
    feedback.style.color = "var(--correct)";
    firstCard = null;
    lock = false;
    if (matches === boards[currentBoard].length) {
      setTimeout(() => (feedback.textContent = "🎉 All matches found!"), 300);
    }
  } else {
    feedback.textContent = "❌ Try again!";
    feedback.style.color = "var(--incorrect)";
    setTimeout(() => {
      firstCard.card.classList.add("no-transition");
      secondCard.card.classList.add("no-transition");
      firstCard.card.classList.remove("flipped");
      secondCard.card.classList.remove("flipped");
      setTimeout(() => {
        firstCard.card.classList.remove("no-transition");
        secondCard.card.classList.remove("no-transition");
        firstCard = null;
        lock = false;
      }, 50);
    }, 1500); // increased delay for incorrect match
  }
}

function buildGrid() {
  grid.innerHTML = "";
  matches = 0;
  feedback.textContent = "";
  cardsData = [...boards[currentBoard], ...boards[currentBoard]];
  shuffle(cardsData);
  cardsData.forEach((symbol) => grid.appendChild(createCard(symbol)));
  boardName.textContent =
    "Board: " + currentBoard.charAt(0).toUpperCase() + currentBoard.slice(1);
}

function openMenu() {
  menuOverlay.classList.add("active");
}

function closeMenu() {
  // Prevent closing the menu before any board is selected
  if (!boardSelectedOnce) return;
  menuOverlay.classList.remove("active");
}

function selectBoard(boardKey) {
  currentBoard = boardKey;
  boardSelectedOnce = true; // now we can close menu freely
  closeMenu();
  buildGrid();
}

document
  .getElementById("restartBtn")
  .addEventListener("click", () => buildGrid());

document.getElementById("menuBtn").addEventListener("click", openMenu);
document.getElementById("closeMenu").addEventListener("click", closeMenu);

// Close menu when clicking outside the box (after a board has been chosen)
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) closeMenu();
});

// Handle selection buttons
document.querySelectorAll(".menu-option").forEach((btn) => {
  btn.addEventListener("click", () => selectBoard(btn.dataset.board));
});

// Show menu on initial load
openMenu();
