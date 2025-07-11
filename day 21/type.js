const sentences = [
    "I love my India.",
    "A computer is an Electronic device.",
    "Computer are Interconnected with one to one ",
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript makes web pages interactive and dynamic"
];

let currentSentence = "";
let startTime;
let errors = 0;
let totalTyped = 0;

const sentenceDisplay = document.getElementById("sentence");
const inputBox = document.getElementById("input");
const wpmDisplay = document.getElementById("wpm");
const errorDisplay = document.getElementById("errors");
const accuracyDisplay = document.getElementById("accuracy");
const progressBar = document.getElementById("progress-bar");

function getRandomSentence() {
  return sentences[Math.floor(Math.random() * sentences.length)];
}

function startTest() {
  currentSentence = getRandomSentence();
  sentenceDisplay.textContent = currentSentence;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();
  startTime = new Date().getTime();
  errors = 0;
  totalTyped = 0;
  updateStats();
}

inputBox.addEventListener("input", () => {
  const typed = inputBox.value;
  totalTyped++;
  let correct = true;
  let displayText = "";

  for (let i = 0; i < currentSentence.length; i++) {
    if (i < typed.length) {
      if (typed[i] === currentSentence[i]) {
        displayText += currentSentence[i];
      } else {
        displayText += `<span style="color:red;text-decoration:underline wavy red;">${currentSentence[i]}</span>`;
        correct = false;
        errors++;
      }
    } else {
      displayText += currentSentence[i];
    }
  }

  sentenceDisplay.innerHTML = displayText;

  const elapsedMinutes = (new Date().getTime() - startTime) / 60000;
  const wordsTyped = typed.trim().split(/\s+/).length;
  const wpm = Math.round(wordsTyped / elapsedMinutes);
  const accuracy = Math.max(0, Math.round(((typed.length - errors) / typed.length) * 100));

  wpmDisplay.textContent = isNaN(wpm) ? 0 : wpm;
  errorDisplay.textContent = errors;
  accuracyDisplay.textContent = isNaN(accuracy) ? 100 : accuracy;

  const progress = Math.min(100, (typed.length / currentSentence.length) * 100);
  progressBar.style.width = progress + "%";

  if (typed === currentSentence) {
    inputBox.disabled = true;
  }
});

function updateStats() {
  wpmDisplay.textContent = "0";
  errorDisplay.textContent = "0";
  accuracyDisplay.textContent = "100";
  progressBar.style.width = "0%";
}

