# MoMTools

Table-side helpers for **Mansions of Madness: Second Edition**. Open any tool in a browser — no build step required.

## Tools

| Tool | Folder | Description |
|------|--------|-------------|
| **Setup Wizard** | [`mansions-setup/`](mansions-setup/) | Player count, physical setup checklist, app steps, and quick rules reference (Danish) |
| **Code Cipher** | [`code-cipher/`](code-cipher/) | Mastermind-style solver for Code puzzles in the companion app |

## Quick start

Open [`index.html`](index.html) in a browser, or jump straight to a tool:

- [Setup Wizard](mansions-setup/index.html)
- [Code Cipher](code-cipher/index.html)

## Styling

All pages share one stylesheet: [`shared/mom.css`](shared/mom.css). Change colors, fonts, buttons, and panels there — hub, setup wizard, and Code Cipher all follow.

## Tests

The Code Cipher solver has self-check tests:

```bash
npm test
```

## GitHub Pages

Deploy the repo root as a static site. The hub page links to both tools under their subfolders.

Previously published separately as [MansionsOfMadnessMastermindSolver](https://github.com/macninja/MansionsOfMadnessMastermindSolver) — now merged here as `code-cipher/`.

## License

Fan tools, not affiliated with Fantasy Flight Games / Asmodee.
