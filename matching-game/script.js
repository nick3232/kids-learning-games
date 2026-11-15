/* =========================================================
   Matching Grid Game — Logic with Selection Menu & Forced First Choice
========================================================= */

const boards = {
  fruit: [ "🍌", "🍇", "🍓", "🍒", "🥝", "🍋"],
  shapes: ["🔺", "🔵", "🟩", "🟠", "⭐", "❤️"],
  transportation: ["🚓","🚑","🚒","🚜","✈️","🚀"],
};

const symbolNames = {
  "🍌": "Banana", "🍇": "Grapes", "🍓": "Strawberry", "🍒": "Cherries",
  "🥝": "Kiwi", "🍋": "Lemon", "🔺": "Red triangle", "🔵": "Blue circle",
  "🟩": "Green square", "🟠": "Orange circle", "⭐": "Star", "❤️": "Heart",
  "🚓": "Police car", "🚑": "Ambulance", "🚒": "Fire engine", "🚜": "Tractor",
  "✈️": "Airplane", "🚀": "Rocket",
};

let currentBoard = null;
let cardsData = [];
let firstCard = null;
let lock = false;
let matches = 0;
let boardSelectedOnce = false;
let boardVersion = 0;
const pendingTimers = new Set();
let menuOpener = null;

const grid = document.getElementById("grid");
const feedback = document.getElementById("feedback");
const boardName = document.getElementById("boardName");
const menuOverlay = document.getElementById("menuOverlay");
const closeMenuBtn = document.getElementById("closeMenu");
const bottomBar = document.querySelector(".bottom-bar");

function setBoardTimeout(callback, delay) {
  const version = boardVersion;
  const timer = setTimeout(() => {
    pendingTimers.delete(timer);
    if (version === boardVersion) callback();
  }, delay);
  pendingTimers.add(timer);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function setCardFlipped(card, flipped) {
  card.classList.toggle("flipped", flipped);
  card.setAttribute("aria-pressed", String(flipped));
  card.setAttribute("aria-label", `Card ${card.dataset.number}, ${flipped ? card.dataset.name : "face down"}`);
}

function createCard(symbol, index) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "card";
  card.dataset.number = index + 1;
  card.dataset.name = symbolNames[symbol];
  setCardFlipped(card, false);
  const inner = document.createElement("span");
  inner.className = "card-inner";
  inner.setAttribute("aria-hidden", "true");

  const front = document.createElement("span");
  front.className = "card-face card-front";

  const back = document.createElement("span");
  back.className = "card-face card-back";
  back.textContent = symbol;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);

  card.addEventListener("click", () => flipCard(card, symbol));
  return card;
}

function flipCard(card, symbol) {
  if (lock || card.disabled || card.classList.contains("flipped") || !grid.contains(card)) return;
  setCardFlipped(card, true);

  if (!firstCard) {
    firstCard = { card, symbol };
    return;
  }

  lock = true;
  const selectedFirst = firstCard;
  const secondCard = { card, symbol };

  if (selectedFirst.symbol === secondCard.symbol) {
    [selectedFirst.card, secondCard.card].forEach(matched => {
      matched.classList.add("matched");
      matched.disabled = true;
      matched.setAttribute("aria-label", matched.getAttribute("aria-label") + ", matched");
    });
    matches++;
    feedback.textContent = "✅ Match found!";
    feedback.style.color = "var(--correct)";
    firstCard = null;
    lock = false;
    if (matches === boards[currentBoard].length) {
      setBoardTimeout(() => {
        if (grid.querySelectorAll(".card.matched").length === cardsData.length) {
          feedback.textContent = "🎉 All matches found!";
        }
      }, 300);
    }
  } else {
    feedback.textContent = "❌ Try again!";
    feedback.style.color = "var(--incorrect)";
    setBoardTimeout(() => {
      [selectedFirst.card, secondCard.card].forEach(selected => {
        selected.querySelector(".card-inner").classList.add("no-transition");
        setCardFlipped(selected, false);
      });
      setBoardTimeout(() => {
        selectedFirst.card.querySelector(".card-inner").classList.remove("no-transition");
        secondCard.card.querySelector(".card-inner").classList.remove("no-transition");
        firstCard = null;
        lock = false;
      }, 50);
    }, 1500); // increased delay for incorrect match
  }
}

function buildGrid() {
  boardVersion++;
  pendingTimers.forEach(timer => clearTimeout(timer));
  pendingTimers.clear();
  firstCard = null;
  lock = false;
  grid.innerHTML = "";
  matches = 0;
  feedback.textContent = "";
  feedback.style.color = "";
  cardsData = [...boards[currentBoard], ...boards[currentBoard]];
  shuffle(cardsData);
  cardsData.forEach((symbol, index) => grid.appendChild(createCard(symbol, index)));
  boardName.textContent =
    "Board: " + currentBoard.charAt(0).toUpperCase() + currentBoard.slice(1);
}

function openMenu() {
  menuOpener = document.activeElement;
  menuOverlay.inert = false;
  menuOverlay.setAttribute("aria-hidden", "false");
  grid.inert = true;
  bottomBar.inert = true;
  closeMenuBtn.disabled = !boardSelectedOnce;
  menuOverlay.classList.add("active");
  menuOverlay.querySelector("[data-board]").focus();
}

function closeMenu() {
  // Prevent closing the menu before any board is selected
  if (!boardSelectedOnce) return;
  menuOverlay.classList.remove("active");
  menuOverlay.inert = true;
  menuOverlay.setAttribute("aria-hidden", "true");
  grid.inert = false;
  bottomBar.inert = false;
  if (menuOpener && !menuOverlay.contains(menuOpener)) menuOpener.focus();
}

function selectBoard(boardKey) {
  currentBoard = boardKey;
  boardSelectedOnce = true;
  buildGrid();
  closeMenu();
  grid.querySelector(".card").focus();
}

document
  .getElementById("restartBtn")
  .addEventListener("click", () => buildGrid());

document.getElementById("menuBtn").addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

menuOverlay.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMenu();
  if (e.key !== "Tab") return;
  const controls = [...menuOverlay.querySelectorAll("button:not(:disabled), a[href]")];
  const first = controls[0];
  const last = controls[controls.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

// Close menu when clicking outside the box (after a board has been chosen)
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) closeMenu();
});

// Handle selection buttons
document.querySelectorAll(".menu-option[data-board]").forEach((btn) => {
  btn.addEventListener("click", () => selectBoard(btn.dataset.board));
});

// Show menu on initial load
openMenu();
