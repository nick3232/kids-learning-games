// Shared behavior for the five multiple-choice games. Question data and custom
// presentation live in each game's game.js; no build step is required.
export function initializeQuiz({
  levels,
  renderQuestion = renderArithmeticQuestion,
  getAnswer = question => question.correct,
  completionText,
}) {
  const app = document.querySelector(".app");
  const startScreen = document.getElementById("startScreen");
  const gameScreen = document.getElementById("gameScreen");
  const endScreen = document.getElementById("endScreen");
  const endPlayBtn = document.getElementById("endPlayBtn");
  const choices = document.getElementById("choices");
  const message = document.getElementById("message");
  const progress = document.getElementById("progress");
  const nextBtn = document.getElementById("nextBtn");
  const overlay = document.getElementById("levelModalOverlay");
  const modal = overlay.querySelector(".modal");
  const closeBtn = document.getElementById("closeModalBtn");
  let levelIndex = 0;
  let questions = [];
  let questionIndex = 0;
  let answered = false;
  let modalOpener = null;

  function showScreen(screen) {
    [startScreen, gameScreen, endScreen].forEach(item => item.classList.remove("active"));
    screen.classList.add("active");
    screen.setAttribute("tabindex", "-1");
    screen.focus();
    window.scrollTo(0, 0);
  }

  function closeLevelModal() {
    overlay.classList.remove("active");
    app.inert = false;
    if (modalOpener) modalOpener.focus();
  }

  function openLevelModal(event) {
    modalOpener = event.currentTarget;
    overlay.classList.add("active");
    app.inert = true;
    modal.querySelector("button").focus();
  }

  function startLevel(index) {
    levelIndex = index;
    questions = shuffle(levels[index].questions);
    questionIndex = 0;
    closeLevelModal();
    showScreen(gameScreen);
    renderItem();
  }

  function renderItem() {
    answered = false;
    message.textContent = "";
    nextBtn.disabled = true;
    const question = questions[questionIndex];
    renderQuestion(question, levelIndex + 1);
    progress.textContent = (questionIndex + 1) + " / " + questions.length;
    choices.replaceChildren();
    shuffle(question.choices).forEach(choice => {
      const button = document.createElement("button");
      button.className = "choice-btn";
      button.textContent = choice;
      button.addEventListener("click", () => handleChoice(button, choice, getAnswer(question)));
      choices.appendChild(button);
    });
  }

  function handleChoice(button, choice, answer) {
    if (answered) return;
    if (choice === answer) {
      answered = true;
      button.classList.add("correct");
      message.textContent = "Great job!";
      nextBtn.disabled = false;
      choices.querySelectorAll("button").forEach(item => {
        item.disabled = true;
        if (item.textContent === String(answer)) item.classList.add("correct");
      });
    } else {
      button.classList.add("wrong");
      message.textContent = "Try again!";
      button.disabled = true;
    }
  }

  function showCompletion() {
    endScreen.querySelector(".subtitle").textContent = completionText
      ?? "You completed Level " + (levelIndex + 1) + ".";
    const isFinalLevel = levelIndex === levels.length - 1;
    const replayIndex = isFinalLevel ? levelIndex : levelIndex + 1;
    endPlayBtn.textContent = "Play Level " + (replayIndex + 1) + (isFinalLevel ? " Again" : "");
    endPlayBtn.onclick = () => startLevel(replayIndex);
    showScreen(endScreen);
  }

  // Derive the selection menu from the same levels used for play and replay.
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.className = "level-btn modal-level-btn level-" + (index + 1) + "-btn";
    button.dataset.level = index + 1;
    button.textContent = "Play Level " + (index + 1);
    button.addEventListener("click", () => startLevel(index));
    closeBtn.before(button);
  });

  document.getElementById("playStartBtn").addEventListener("click", () => startLevel(0));
  document.getElementById("openLevelSelectFromStartBtn").addEventListener("click", openLevelModal);
  document.getElementById("openLevelSelectFromEndBtn").addEventListener("click", openLevelModal);
  closeBtn.addEventListener("click", closeLevelModal);
  nextBtn.addEventListener("click", () => {
    if (!answered) return;
    questionIndex++;
    if (questionIndex === questions.length) showCompletion();
    else renderItem();
  });

  overlay.addEventListener("click", event => {
    if (event.target === overlay) closeLevelModal();
  });
  overlay.addEventListener("keydown", event => {
    if (event.key === "Escape") closeLevelModal();
    if (event.key !== "Tab") return;
    const buttons = [...modal.querySelectorAll("button")];
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function renderArithmeticQuestion(question, levelNumber) {
  document.getElementById("problemLabel").textContent = "Level " + levelNumber;
  document.getElementById("problemDisplay").textContent = question.problem;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
