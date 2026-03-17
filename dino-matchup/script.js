// Dino Match-Up Level 2 — Score + Timer + Fun Facts Button
const dinos = [
  {
    name: "Triceratops",
    img: "images/triceratops.png",
    fact: "Triceratops had three horns and a huge frill for defense.",
    link: "https://en.wikipedia.org/wiki/Triceratops"
  },
  {
    name: "Stegosaurus",
    img: "images/stegosaurus.png",
    fact: "Stegosaurus used tail spikes called a thagomizer to defend itself.",
    link: "https://en.wikipedia.org/wiki/Stegosaurus"
  },
  {
    name: "Tyrannosaurus",
    img: "images/tyrannosaurus.png",
    fact: "Tyrannosaurus rex could bite through bone with incredible force!",
    link: "https://en.wikipedia.org/wiki/Tyrannosaurus"
  },
  {
    name: "Velociraptor",
    img: "images/velociraptor.png",
    fact: "Velociraptor had feathers and may have hunted in packs.",
    link: "https://en.wikipedia.org/wiki/Velociraptor"
  },
  {
    name: "Brachiosaurus",
    img: "images/brachiosaurus.png",
    fact: "Brachiosaurus had long front legs that helped it reach tall trees.",
    link: "https://en.wikipedia.org/wiki/Brachiosaurus"
  },
  {
    name: "Ankylosaurus",
    img: "images/ankylosaurus.png",
    fact: "Ankylosaurus had armor plates and a club-like tail.",
    link: "https://en.wikipedia.org/wiki/Ankylosaurus"
  }
];

let cards = [];
dinos.forEach(d => {
  cards.push({ type: "name", value: d.name, fact: d.fact, link: d.link });
  cards.push({ type: "image", value: d.img, name: d.name, fact: d.fact, link: d.link });
});
cards = cards.sort(() => Math.random() - 0.5);

const board = document.getElementById("game-board");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");
const scoreBox = document.getElementById("score");
const timerBox = document.getElementById("timer");
const backToGamesBtn = document.getElementById("backToGamesBtn");

let flipped = [];
let matchedCount = 0;
let score = 0;
let timer = 0;
let timerInterval;
let gameStarted = false;

// Build cards
cards.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("card");
  if (card.type === "name") div.textContent = card.value;
  div.addEventListener("click", () => flipCard(div, card));
  board.appendChild(div);
});

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    timer++;
    timerBox.textContent = `⏱ ${timer}s`;
  }, 1000);
}

function flipCard(div, card) {
  if (!gameStarted) {
    gameStarted = true;
    backToGamesBtn.classList.add("hidden");
  }

  if (!timerInterval) startTimer();
  if (div.classList.contains("matched") || flipped.length === 2) return;

  div.classList.add("flipped");

  if (card.type === "image") {
    const img = document.createElement("img");
    img.src = card.value;
    div.textContent = "";
    div.appendChild(img);
  }

  flipped.push({ div, card });

  if (flipped.length === 2) {
    const [a, b] = flipped;
    if (
      (a.card.type === "name" && b.card.name === a.card.value) ||
      (b.card.type === "name" && a.card.name === b.card.value)
    ) {
      handleMatch(a, b);
    } else {
      setTimeout(() => resetCards(flipped), 900);
    }
  }
}

function handleMatch(a, b) {
  a.div.classList.add("matched");
  b.div.classList.add("matched");
  flipped = [];
  matchedCount++;
  score++;
  scoreBox.textContent = `⭐ Score: ${score}`;

  message.style.display = "block";
  message.textContent = "🦕 " + (a.card.fact || b.card.fact);
  message.style.color = "#8be9fd";

  setTimeout(() => {
    if (matchedCount < dinos.length) {
      message.textContent = "";
      message.style.display = "none";
    }
  }, 4500);

  if (matchedCount === dinos.length) endGame();
}

function resetCards(toReset) {
  toReset.forEach(f => {
    f.div.classList.remove("flipped");
    f.div.innerHTML = "";
    if (f.card.type === "name") f.div.textContent = f.card.value;
  });
  flipped = [];
}

function endGame() {
  clearInterval(timerInterval);
  message.style.display = "block";
  message.style.color = "#06d6a0";
  message.textContent = `🎉 You matched all ${dinos.length} dinosaurs! Score: ${score}, Time: ${timer}s`;

  backToGamesBtn.classList.remove("hidden");

  if (!document.getElementById("facts-btn")) {
    const factsBtn = document.createElement("button");
    factsBtn.id = "facts-btn";
    factsBtn.textContent = "Fun Facts";
    factsBtn.addEventListener("click", () => {
      window.location.href = "funfacts.html";
    });

    message.after(factsBtn);
  }
}

restartBtn.addEventListener("click", () => location.reload());