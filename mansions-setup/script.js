// Mansions of Madness 2E – Setup Wizard
const STEPS = ['welcome', 'players', 'setup', 'app', 'rules'];
let currentStep = 0;
let playerCount = 0;

function showStep(idx) {
  currentStep = idx;
  document.querySelectorAll('.step').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  updateProgress();
}

function updateProgress() {
  document.querySelectorAll('.progress-bar .dot').forEach((dot, i) => {
    dot.classList.remove('done', 'current');
    if (i < currentStep) dot.classList.add('done');
    if (i === currentStep) dot.classList.add('current');
  });
}

function next() { if (currentStep < STEPS.length - 1) showStep(currentStep + 1); }
function prev() { if (currentStep > 0) showStep(currentStep - 1); }

// Player selection
function selectPlayers(n) {
  playerCount = n;
  document.querySelectorAll('.player-btn').forEach(btn => {
    btn.classList.toggle('selected', parseInt(btn.dataset.n) === n);
  });
  document.getElementById('player-info').innerHTML = getPlayerInfo(n);
  document.getElementById('next-from-players').disabled = false;
}

function getPlayerInfo(n) {
  const data = {
    1: 'Solo: Du styrer 2 investigators. Vælg 2 investigators og tag startgenstande for begge.',
    2: 'Standard 2-spiller: Hver spiller vælger 1 investigator. God balance mellem action economy og horror.',
    3: '3 spillere: Vælg 1 investigator hver. I har god dækning af skills.',
    4: '4 spillere: Vælg 1 investigator hver. Sørg for variation i stats (Strength, Lore, Influence).',
    5: '5 spillere: Maks kapacitet. Scenarierne bliver lettere med flere actions, men Mythos-fasen rammer hårdere.'
  };
  return `<div class="investigator-note">${data[n]}</div>`;
}

// Checklist
function toggleCheck(el) {
  el.classList.toggle('done');
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const items = document.querySelectorAll('#setup-checklist li');
  const done = document.querySelectorAll('#setup-checklist li.done');
  const counter = document.getElementById('checklist-counter');
  counter.textContent = `${done.length} / ${items.length}`;
}

// Rules accordion
function toggleRule(el) {
  el.parentElement.classList.toggle('open');
}

function resetWizard() {
  // Reset player selection
  playerCount = 0;
  document.querySelectorAll('.player-btn').forEach(btn => btn.classList.remove('selected'));
  document.getElementById('player-info').innerHTML = '';
  document.getElementById('next-from-players').disabled = true;

  // Reset all checklists
  document.querySelectorAll('.checklist li').forEach(li => li.classList.remove('done'));
  updateChecklistProgress();

  // Collapse all rules sections
  document.querySelectorAll('.rules-section').forEach(s => s.classList.remove('open'));

  showStep(0);
}
