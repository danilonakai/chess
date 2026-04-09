# Chess

<img width="831" height="827" alt="Screenshot from 2026-04-09 06-31-59" src="https://github.com/user-attachments/assets/4409f7a5-330b-477e-86cd-ac9231487d35" />

A fully functional chess game running in the browser with no dependencies, plain HTML, CSS, and vanilla JavaScript ES modules rendered onto an HTML5 `<canvas>`.

## Features

- Full chess rules: all piece movements, captures, check, checkmate, and stalemate detection
- Castling (kingside and queenside) with all three required conditions validated
- Pawn promotion with an interactive async piece-picker rendered on the board
- Board rotation: the board flips perspective on every turn so each player always looks "upward"
- Undo / redo with `Ctrl+Z` / `Ctrl+Y`
- Captured pieces graveyard rendered below the board
- Algebraic notation for every move

## Running

Open `index.html` in a browser that supports ES modules. No build step required.

> Because the JS files use `import`/`export`, you need to serve them over HTTP (e.g. `npx serve .` or VS Code Live Server). Opening `index.html` directly as a `file://` URL will be blocked by CORS.

## Architecture

The codebase is split into seven focused modules, each with a single responsibility:

```
assets/js/
├── constants.js   — shared enums and board geometry constants
├── state.js       — pure state: piece creation, initial board, applyMove, applyPromotion
├── rules.js       — move generation, check/checkmate/stalemate evaluation, castling
├── history.js     — Command Pattern: move commands, undo/redo stacks, algebraic notation
├── game.js        — game orchestrator: ties state + rules + history together
├── renderer.js    — all canvas drawing: board, pieces, highlights, graveyard, promotion UI
└── ui.js          — entry point: click/keydown handlers, coordinate mapping, game bootstrap
```

The dependency flow is strictly one-way:

```
ui.js → game.js → state.js
              ↘ rules.js → state.js
              ↘ history.js
              ↘ renderer.js → rules.js
```

`renderer.js` is the only module that touches the DOM or the canvas API. Everything else is pure logic that operates on plain JavaScript objects.

### State model

Each piece is a plain object:

```js
{ type, color, col, row, captured: false, moveCount: 0 }
```

`col` and `row` are discrete grid indices (0–7). State transitions never mutate in place, `applyMove` and `applyPromotion` return new state objects, which makes move simulation safe and cheap.

### Rules engine

Move generation uses two primitives:

- `slide(piece, dc, dr, state)` — for rooks, bishops, and queens: walks in a direction until blocked.
- `step(piece, dc, dr, state)` — for kings and knights: a single offset, returning `null` if out of bounds or blocked by a friendly piece.

Pawn logic is handled inline in the `MOVE_CALCULATORS` dispatch table, which maps each `PIECE_TYPE` to a function. Queen reuses rook + bishop calculators.

Check detection (`isKingInCheck`) simulates every opponent move and checks whether any lands on the king's square. Legality filtering (`getLegalMoves`) applies every candidate move to a state snapshot and discards moves that leave the king in check, making it impossible to play into check.

### Command Pattern (history)

Every move is stored as a command:

```js
{ piece, destination, stateBefore, stateAfter, notation, timestamp }
```

Undo pops from the `past` stack and returns `stateBefore`; redo pops from `future` and returns `stateAfter`. This also powers the captured-pieces graveyard: the renderer walks `past` and diffs `stateBefore`/`stateAfter` per command.

## Refactoring — `976e802`

The previous implementation stored piece positions as **pixel coordinates** and performed all movement logic directly against those values. The main commit refactored the entire codebase around three ideas:

**1. Grid model instead of pixel coordinates**

Piece positions became discrete `(col, row)` indices (0–7). Pixel conversion (`toPixelCol`, `toPixelRow`) is now isolated entirely in `renderer.js`, so the game logic never needs to know the canvas size. Board rotation is handled there too by inverting the index (`7 - col`, `7 - row`) at draw time, rather than applying CSS transforms or loading mirrored sprite variants.

This also allowed the old `_rotate` sprite set (12 duplicate PNG files) and the CSS `rotate0`/`rotate180` keyframe animations to be deleted entirely.

**2. Modular extraction**

What was a monolithic script was broken into the six logic modules listed above. Each module imports only what it needs and exports only what callers require.

**3. Parameterized color direction**

Movement logic previously branched on color for every piece type. It was replaced with `getColorContext(color)`, which returns `{ direction: +1 | -1, startRow, promotionRow, opponent }`. All move calculators consume this context, eliminating the per-color duplication (~500 lines).
