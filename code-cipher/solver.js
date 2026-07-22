/** Standard Mastermind scoring (MoM Code Puzzle feedback). */
export function score(secret, guess) {
  let exact = 0;
  const secretRest = [];
  const guessRest = [];

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) exact++;
    else {
      secretRest.push(secret[i]);
      guessRest.push(guess[i]);
    }
  }

  const counts = new Map();
  for (const s of secretRest) counts.set(s, (counts.get(s) || 0) + 1);

  let wrongPosition = 0;
  for (const g of guessRest) {
    const n = counts.get(g) || 0;
    if (n > 0) {
      wrongPosition++;
      counts.set(g, n - 1);
    }
  }

  return { exact, wrongPosition };
}

export function validateFeedback(length, exact, wrongPosition) {
  if (exact < 0 || wrongPosition < 0) return "Counts cannot be negative.";
  if (exact + wrongPosition > length) {
    return "Elder signs + magnifying glasses cannot exceed code length.";
  }
  return null;
}

export function enumerateCodes(length, symbols) {
  const out = [];
  const code = new Array(length);
  function build(pos) {
    if (pos === length) {
      out.push([...code]);
      return;
    }
    for (const sym of symbols) {
      code[pos] = sym;
      build(pos + 1);
    }
  }
  build(0);
  return out;
}

export function filterCandidates(candidates, history) {
  return candidates.filter((secret) =>
    history.every(({ guess, exact, wrongPosition }) => {
      const s = score(secret, guess);
      return s.exact === exact && s.wrongPosition === wrongPosition;
    })
  );
}

export function solve(length, symbols, history) {
  const all = enumerateCodes(length, symbols);
  const remaining = filterCandidates(all, history);
  return { remaining, total: all.length };
}

function guessKey(guess) {
  return guess.join(",");
}

/** ponytail: counting probes when early/large set; else greedy minimax over candidate pool */
export function suggestNextGuess(length, symbols, history, remaining) {
  if (remaining.length <= 1) return null;

  const tried = new Set(history.map((h) => guessKey(h.guess)));

  if (history.length < symbols.length || remaining.length > length * symbols.length) {
    for (const sym of symbols) {
      const guess = Array(length).fill(sym);
      if (!tried.has(guessKey(guess))) {
        return {
          guess,
          reason: "count",
          detail: `Fill all slots with symbol ${sym} to count how many appear in the code.`,
        };
      }
    }
  }

  const pool = new Map();
  for (const code of remaining) pool.set(guessKey(code), code);
  for (const sym of symbols) pool.set(guessKey(Array(length).fill(sym)), Array(length).fill(sym));

  let best = null;
  let bestWorst = Infinity;

  for (const guess of pool.values()) {
    const buckets = new Map();
    for (const secret of remaining) {
      const fb = score(secret, guess);
      const k = `${fb.exact},${fb.wrongPosition}`;
      buckets.set(k, (buckets.get(k) || 0) + 1);
    }
    const worst = Math.max(...buckets.values());
    if (worst < bestWorst) {
      bestWorst = worst;
      best = {
        guess,
        reason: "eliminate",
        detail: `Best split — at most ${worst} possibilities after this guess.`,
      };
    }
  }

  return best;
}
