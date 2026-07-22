# MoMTools

Table-side helpers for **Mansions of Madness: Second Edition**. Open any tool in a browser — no build step required.

## Quick start

Open [`index.html`](index.html), or jump straight to a tool:

- [Setup Wizard](mansions-setup/index.html) — physical setup, app steps, rules reference (Danish)
- [Code Cipher](code-cipher/index.html) — Mastermind-style solver for Code puzzles

## Setup Wizard

Quick-start wizard to get from box to first round in minutes — without flipping through the rulebook.

1. **Player count** — select 1–5 players with tips per configuration
2. **Physical setup checklist** — interactive checklist for cards, tokens, tiles, and dice
3. **App setup** — companion app steps (Collection Manager, scenario, investigators, starting possessions)
4. **Quick rules reference** — collapsible sections for rounds, actions, skill checks, combat, evade, puzzles, and common gotchas

Rules content is verified against the official Rules Reference (2nd Edition). Checklist state resets on "Start forfra".

## Code Cipher

Table-side helper for **Code Puzzles** in the companion app. Enter guesses and app feedback; the tool eliminates impossible codes until one remains.

**Version:** 1.1.1 (shown in app footer, source of truth: `code-cipher/package.json`)

### Use at the table

1. Open the puzzle in the MoM app and note **code length** and how many **symbols** appear.
2. Open Code Cipher on your phone.
3. Tap symbols to build each guess, enter **Elder sign** (⛤) and **Magnifying glass** (🔍) counts from the app, then **Record attempt**.
4. When one solution remains, enter that code in the app.

**Feedback rules** (standard Mastermind scoring):

- ⛤ = correct symbol in the correct position
- 🔍 = correct symbol in the wrong position (each symbol counted at most once)

### Features

- **Suggested next guess** — counting probes early, then greedy elimination
- **Undo last** — revert the most recent guess
- **Auto-save** — puzzle state persists in `localStorage` (survives refresh)

## Styling

All pages share one stylesheet: [`shared/mom.css`](shared/mom.css). Change colors, fonts, buttons, and panels there — hub, setup wizard, and Code Cipher all follow.

## Development

```bash
npm test          # run Code Cipher solver tests
npx serve .       # serve repo root locally
```

Tests live in `code-cipher/solver.test.js` (unit) and `code-cipher/integration.test.js` (full solve simulation).

## Project layout

```
MoMTools/
├── index.html              – hub page
├── shared/mom.css          – shared theme + all tool styles
├── mansions-setup/         – setup wizard (index.html, script.js)
└── code-cipher/            – code puzzle solver (solver.js, app.js, tests)
```

## GitHub Pages

Deploy the repo root as a static site. The hub links to both tools under their subfolders.

## License

Fan tools, not affiliated with Fantasy Flight Games / Asmodee.
