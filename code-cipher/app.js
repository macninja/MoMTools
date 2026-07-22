import { solve, validateFeedback, suggestNextGuess } from "./solver.js";
import { initI18n, t, onLangChange } from "../shared/i18n.js";

initI18n("cipher");

const STORAGE_KEY = "mom-code-solver";
const RUNE_COLORS = ["#6b2c2c", "#2c4a5a", "#3d5a3a", "#7a5c20", "#6e7268", "#2a5a52"];

const els = {
  setup: document.getElementById("setup"),
  solver: document.getElementById("solver"),
  length: document.getElementById("length"),
  variance: document.getElementById("variance"),
  style: document.getElementById("style"),
  startBtn: document.getElementById("start-btn"),
  resetBtn: document.getElementById("reset-btn"),
  guessSlots: document.getElementById("guess-slots"),
  exact: document.getElementById("exact"),
  wrong: document.getElementById("wrong"),
  addGuessBtn: document.getElementById("add-guess-btn"),
  undoBtn: document.getElementById("undo-btn"),
  history: document.getElementById("history"),
  status: document.getElementById("status"),
  solutions: document.getElementById("solutions"),
  suggestion: document.getElementById("suggestion"),
  suggestionDetail: document.getElementById("suggestion-detail"),
  suggestionGuess: document.getElementById("suggestion-guess"),
  useSuggestionBtn: document.getElementById("use-suggestion-btn"),
};

let length = 4;
let symbols = [];
let style = "numbers";
let currentGuess = [];
let history = [];
let suggestedGuess = null;

function symbolLabel(sym) {
  return style === "numbers" ? String(sym + 1) : String.fromCharCode(65 + sym);
}

function symbolColor(sym) {
  return RUNE_COLORS[sym % RUNE_COLORS.length];
}

function buildSymbols(variance) {
  return Array.from({ length: variance }, (_, i) => i);
}

function chipsHtml(guess) {
  return guess
    .map(
      (sym) =>
        `<span class="chip" style="background:${symbolColor(sym)}">${symbolLabel(sym)}</span>`
    )
    .join("");
}

function renderGuessSlots() {
  els.guessSlots.innerHTML = "";
  currentGuess = Array.from({ length }, (_, i) => currentGuess[i] ?? 0);

  currentGuess.forEach((sym, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tile";
    btn.style.background = symbolColor(sym);
    btn.textContent = symbolLabel(sym);
    btn.title = t("slotTitle", { n: idx + 1 });
    btn.addEventListener("click", () => {
      currentGuess[idx] = (currentGuess[idx] + 1) % symbols.length;
      renderGuessSlots();
    });
    els.guessSlots.appendChild(btn);
  });
}

function readFeedback() {
  return {
    exact: Number(els.exact.textContent),
    wrongPosition: Number(els.wrong.textContent),
  };
}

function setFeedback(exact, wrong) {
  els.exact.textContent = exact;
  els.wrong.textContent = wrong;
}

function saveState() {
  if (!symbols.length) return;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      length,
      variance: symbols.length,
      style,
      history,
      currentGuess,
    })
  );
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    els.length.value = data.length;
    els.variance.value = data.variance;
    els.style.value = data.style;
    length = data.length;
    style = data.style;
    symbols = buildSymbols(data.variance);
    history = data.history || [];
    currentGuess = data.currentGuess || [];
    return true;
  } catch {
    return false;
  }
}

function renderHistoryItem(entry, index) {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="history-guess">${chipsHtml(entry.guess)}</div>
    <div class="history-feedback"><span class="fb-exact">⛤ ${entry.exact}</span> · <span class="fb-wrong">🔍 ${entry.wrongPosition}</span></div>
    <button type="button" class="ghost small" data-remove="${index}">${t("history.remove")}</button>
  `;
  li.querySelector("[data-remove]").addEventListener("click", () => {
    history.splice(index, 1);
    refresh();
  });
  return li;
}

function renderHistory() {
  els.history.innerHTML = "";
  history.forEach((entry, i) => els.history.appendChild(renderHistoryItem(entry, i)));
  els.undoBtn.disabled = history.length === 0;
}

function renderSolutions(remaining) {
  els.solutions.innerHTML = "";
  const limit = 20;
  const show = remaining.slice(0, limit);
  for (const code of show) {
    const li = document.createElement("li");
    li.className = "solution-row";
    li.innerHTML = chipsHtml(code);
    els.solutions.appendChild(li);
  }
  if (remaining.length > limit) {
    const li = document.createElement("li");
    li.className = "more";
    li.textContent = t("history.more", { n: remaining.length - limit });
    els.solutions.appendChild(li);
  }
}

function renderSuggestion(suggestion) {
  suggestedGuess = suggestion?.guess ?? null;
  if (!suggestion) {
    els.suggestion.classList.add("hidden");
    return;
  }
  els.suggestion.classList.remove("hidden");
  els.suggestionDetail.textContent =
    suggestion.reason === "count"
      ? t("suggestion.count", { symbol: symbolLabel(suggestion.guess[0]) })
      : suggestion.detail;
  els.suggestionGuess.innerHTML = chipsHtml(suggestion.guess);
}

function renderStatus(remaining, total, error) {
  els.status.classList.remove("error", "success", "warn");
  if (error) {
    els.status.textContent = t(`error.${error}`);
    els.status.classList.add("error");
    return;
  }
  if (history.length === 0) {
    els.status.textContent = t("status.none");
    return;
  }
  const n = remaining.length;
  if (n === 0) {
    els.status.textContent = t("status.noMatch");
    els.status.classList.add("error");
  } else if (n === 1) {
    els.status.textContent = t("status.solved");
    els.status.classList.add("success");
  } else if (n <= 10) {
    els.status.textContent = t("status.warn", { n, total });
    els.status.classList.add("warn");
  } else {
    els.status.textContent = t("status.keep", { n, total });
  }
}

function refresh() {
  renderHistory();
  const { remaining, total } = solve(length, symbols, history);
  renderStatus(remaining, total);
  renderSolutions(remaining);
  renderSuggestion(suggestNextGuess(length, symbols, history, remaining));
  saveState();
}

function showSolver() {
  els.setup.classList.add("hidden");
  els.solver.classList.remove("hidden");
  renderGuessSlots();
  refresh();
}

function startPuzzle() {
  length = Number(els.length.value);
  style = els.style.value;
  symbols = buildSymbols(Number(els.variance.value));
  history = [];
  currentGuess = [];
  setFeedback(0, 0);
  showSolver();
}

function resetPuzzle() {
  localStorage.removeItem(STORAGE_KEY);
  els.solver.classList.add("hidden");
  els.setup.classList.remove("hidden");
  history = [];
  suggestedGuess = null;
}

els.startBtn.addEventListener("click", startPuzzle);
els.resetBtn.addEventListener("click", resetPuzzle);

els.useSuggestionBtn.addEventListener("click", () => {
  if (!suggestedGuess) return;
  currentGuess = [...suggestedGuess];
  renderGuessSlots();
  saveState();
});

els.undoBtn.addEventListener("click", () => {
  if (!history.length) return;
  const last = history.pop();
  currentGuess = [...last.guess];
  setFeedback(last.exact, last.wrongPosition);
  renderGuessSlots();
  refresh();
});

document.querySelectorAll("[data-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.target === "exact" ? els.exact : els.wrong;
    const delta = Number(btn.dataset.delta);
    const next = Math.max(0, Math.min(length, Number(target.textContent) + delta));
    target.textContent = next;
  });
});

els.addGuessBtn.addEventListener("click", () => {
  const { exact, wrongPosition } = readFeedback();
  const err = validateFeedback(length, exact, wrongPosition);
  if (err) {
    renderStatus([], 0, err);
    els.solutions.innerHTML = "";
    renderSuggestion(null);
    return;
  }
  history.push({ guess: [...currentGuess], exact, wrongPosition });
  setFeedback(0, 0);
  refresh();
});

onLangChange(() => {
  if (!els.solver.classList.contains("hidden")) {
    renderGuessSlots();
    refresh();
  }
});

if (loadState()) showSolver();

fetch("../package.json")
  .then((r) => r.json())
  .then((pkg) => {
    const el = document.getElementById("version");
    if (el && pkg.version) el.textContent = `v${pkg.version}`;
  })
  .catch(() => {});
