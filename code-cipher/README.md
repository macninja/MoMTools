# Mansions of Madness — Code Puzzle Solver

A table-side helper for **Code Puzzles** in [Mansions of Madness: Second Edition](https://www.fantasyflightgames.com/en/products/mansions-of-madness-second-edition/). Enter guesses and app feedback; the tool eliminates impossible codes until one remains.

**Version:** 1.1.1 ([Semantic Versioning](https://semver.org/))

## Use at the table

1. Open the puzzle in the MoM app and note **code length** and how many **symbols** appear.
2. Open this page on your phone (or run locally — see below).
3. Tap symbols to build each guess, enter **Elder sign** (⛤) and **Magnifying glass** (🔍) counts from the app, then **Add guess**.
4. When one solution remains, enter that code in the app.

**Feedback rules** (standard Mastermind scoring):

- ⛤ = correct symbol in the correct position
- 🔍 = correct symbol in the wrong position (each symbol counted at most once)

## Features

- **Suggested next guess** — counting probes early (all same symbol), then greedy elimination
- **Undo last** — revert the most recent guess
- **Auto-save** — puzzle state persists in `localStorage` (survives refresh)

## Live site

Part of [MoMTools](../) — open [`index.html`](index.html) or the [hub page](../index.html).

## Run locally

```bash
npm test          # run solver tests
npx serve .       # or any static file server
```

Then open `http://localhost:3000` (or whatever port your server uses).

## Versioning

This project follows [Semantic Versioning 2.0.0](https://semver.org/). The version in `package.json` is the source of truth and is shown in the app footer.

- **MAJOR** — incompatible changes
- **MINOR** — new backward-compatible features
- **PATCH** — backward-compatible bug fixes

## Styling

Shared with all MoMTools pages via [`shared/mom.css`](../shared/mom.css).

## Files

| File | Purpose |
|------|---------|
| `solver.js` | Scoring, enumeration, filtering |
| `solver.test.js` | Self-check tests (`node solver.test.js`) |
| `app.js` | UI logic |
| `index.html` | Mobile-first interface |

## License

Fan tool, not affiliated with Fantasy Flight Games.
