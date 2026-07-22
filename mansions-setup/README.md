# Mansions of Madness 2E – Setup Wizard

A quick-start wizard for **Mansions of Madness Second Edition** (Fantasy Flight Games). Designed to get you from box to first round in minutes – without flipping through the rulebook.

## What it does

1. **Player count** – select 1–5 players with tips per configuration
2. **Physical setup checklist** – interactive checklist for cards, tokens, tiles, and dice
3. **App setup** – step-by-step for the companion app (Collection Manager, scenario, investigators, starting possessions)
4. **Quick rules reference** – collapsible sections covering round structure, actions, skill checks, combat, evade, puzzles, and common gotchas

All rules content is verified against the official Rules Reference (2nd Edition).

## Usage

Open `index.html` in any browser. No build step, no dependencies – pure HTML/CSS/JS.

Works great on a phone or tablet propped up at the game table.

## Styling

All visual design lives in one file: [`shared/mom.css`](../shared/mom.css). Edit colors, fonts, and layout there — both tools and the hub page pick it up automatically.

## Files

```
mansions-setup/
├── index.html   – wizard structure and content
├── script.js    – navigation, player selection, checklists, accordion
└── README.md
```

## Design choices

- **Dark theme** – fits the mood, easy on the eyes during evening sessions
- **Mobile-first** – touch-friendly targets, readable on small screens
- **No framework** – vanilla HTML/CSS/JS, opens instantly, works offline
- **Checklist state** – tap to mark items done (resets on "Start forfra")

## License

Personal project. Game content and army belong to Fantasy Flight Games / Asmodee.
