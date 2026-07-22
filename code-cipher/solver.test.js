import assert from "node:assert/strict";
import { score, validateFeedback, enumerateCodes, filterCandidates, solve, suggestNextGuess } from "./solver.js";
import pkg from "../package.json" with { type: "json" };

assert.match(pkg.version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/);

function eq(a, b) {
  assert.deepEqual(a, b);
}

// Classic Mastermind cases
eq(score([1, 2, 3, 4], [1, 2, 3, 4]), { exact: 4, wrongPosition: 0 });
eq(score([1, 2, 3, 4], [4, 3, 2, 1]), { exact: 0, wrongPosition: 4 });
eq(score([1, 1, 2, 2], [1, 2, 1, 2]), { exact: 2, wrongPosition: 2 });
eq(score([1, 1, 2, 2], [1, 1, 1, 1]), { exact: 2, wrongPosition: 0 });
eq(score([1, 1, 2, 2], [2, 2, 2, 2]), { exact: 2, wrongPosition: 0 });
eq(score([1, 2, 2, 2], [2, 1, 2, 2]), { exact: 2, wrongPosition: 2 });

assert.equal(validateFeedback(4, 2, 2), null);
assert.match(validateFeedback(4, 3, 2), /cannot exceed/);

const universe = enumerateCodes(2, [0, 1]);
assert.equal(universe.length, 4);

const secret = [0, 1];
const history = [
  { guess: [0, 0], ...score(secret, [0, 0]) },
  { guess: [1, 0], ...score(secret, [1, 0]) },
];
eq(filterCandidates(universe, history), [secret]);

const secret3 = [0, 1, 0];
const solved = solve(3, [0, 1], [
  { guess: [0, 0, 0], ...score(secret3, [0, 0, 0]) },
  { guess: [1, 1, 1], ...score(secret3, [1, 1, 1]) },
  { guess: [0, 1, 0], ...score(secret3, [0, 1, 0]) },
]);
assert.equal(solved.remaining.length, 1);
eq(solved.remaining[0], secret3);

const fresh = enumerateCodes(4, [0, 1, 2, 3, 4]);
const suggestion = suggestNextGuess(4, [0, 1, 2, 3, 4], [], fresh);
assert.equal(suggestion.reason, "count");
eq(suggestion.guess, [0, 0, 0, 0]);
assert.equal(suggestNextGuess(4, [0, 1], [{ guess: [0, 0, 0, 0], exact: 4, wrongPosition: 0 }], [[0, 0, 0, 0]]), null);

console.log("solver.test.js: all passed");
