import { initI18n, t, onLangChange } from "../shared/i18n.js";

initI18n("setup");

const STEPS = ["welcome", "players", "setup", "app", "rules"];
let currentStep = 0;
let playerCount = 0;

function showStep(idx) {
  currentStep = idx;
  document.querySelectorAll(".step").forEach((el, i) => {
    el.classList.toggle("active", i === idx);
  });
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateProgress() {
  document.querySelectorAll(".progress-bar .dot").forEach((dot, i) => {
    dot.classList.remove("done", "current");
    if (i < currentStep) dot.classList.add("done");
    if (i === currentStep) dot.classList.add("current");
  });
}

function next() {
  if (currentStep < STEPS.length - 1) showStep(currentStep + 1);
}

function prev() {
  if (currentStep > 0) showStep(currentStep - 1);
}

function getPlayerInfo(n) {
  return `<div class="investigator-note">${t(`players.info.${n}`)}</div>`;
}

function selectPlayers(n) {
  playerCount = n;
  document.querySelectorAll(".tile[data-n]").forEach((btn) => {
    btn.classList.toggle("selected", parseInt(btn.dataset.n, 10) === n);
  });
  document.getElementById("player-info").innerHTML = getPlayerInfo(n);
  document.getElementById("next-from-players").disabled = false;
}

function toggleCheck(el) {
  el.classList.toggle("done");
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const items = document.querySelectorAll("#setup-checklist li");
  const done = document.querySelectorAll("#setup-checklist li.done");
  document.getElementById("checklist-counter").textContent = `${done.length} / ${items.length}`;
}

function toggleRule(el) {
  el.parentElement.classList.toggle("open");
}

function resetWizard() {
  playerCount = 0;
  document.querySelectorAll(".tile[data-n]").forEach((btn) => btn.classList.remove("selected"));
  document.getElementById("player-info").innerHTML = "";
  document.getElementById("next-from-players").disabled = true;
  document.querySelectorAll(".checklist li").forEach((li) => li.classList.remove("done"));
  updateChecklistProgress();
  document.querySelectorAll(".rules-section").forEach((s) => s.classList.remove("open"));
  showStep(0);
}

onLangChange(() => {
  if (playerCount) {
    document.getElementById("player-info").innerHTML = getPlayerInfo(playerCount);
  }
});

window.next = next;
window.prev = prev;
window.selectPlayers = selectPlayers;
window.toggleCheck = toggleCheck;
window.toggleRule = toggleRule;
window.resetWizard = resetWizard;
