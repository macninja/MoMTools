import assert from "node:assert/strict";
import { score, solve, suggestNextGuess } from "./solver.js";

/** Simulate solving a random secret by following suggestions + feedback. */
function simulateSecret(length, symbols, secret, maxGuesses = 20) {
  const history = [];
  for (let i = 0; i < maxGuesses; i++) {
    const { remaining } = solve(length, symbols, history);
    if (remaining.length === 1) {
      assert.deepEqual(remaining[0], secret);
      return { solved: true, guesses: history.length };
    }
    const suggestion = suggestNextGuess(length, symbols, history, remaining);
    assert.ok(suggestion, `no suggestion with ${remaining.length} candidates left`);
    const guess = suggestion.guess;
    history.push({ guess, ...score(secret, guess) });
  }
  return { solved: false, guesses: history.length };
}

const cases = [
  { length: 4, symbols: [0, 1, 2, 3, 4], secret: [1, 3, 1, 4] },
  { length: 5, symbols: [0, 1, 2, 3, 4], secret: [2, 2, 0, 4, 1] },
  { length: 4, symbols: [0, 1, 2, 3, 4, 5], secret: [5, 5, 0, 2] },
  { length: 3, symbols: [0, 1], secret: [1, 0, 1] },
];

for (const c of cases) {
  const result = simulateSecret(c.length, c.symbols, c.secret);
  assert.equal(result.solved, true, `failed to solve ${c.secret.join(",")}`);
  console.log(`solved ${c.secret.join(",")} in ${result.guesses} guesses`);
}

console.log("integration.test.js: all passed");
