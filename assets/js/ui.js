import { preloadImages, render } from './renderer.js';
import { createGame }            from './game.js';
import { FIELD_SIZE, FIELD_ORIGIN, CANVAS_SIZE } from './constants.js';
import { getPieceAt }            from './state.js';

const CANVAS = document.getElementById('chessBoard');
const game   = createGame();

await preloadImages();
render(game.getState(), game.getHistory(), { status: 'ongoing' });

CANVAS.addEventListener('click', async event => {
  const state = game.getState();

  const col = Math.floor((event.offsetX - FIELD_ORIGIN) / FIELD_SIZE);
  const row = Math.floor((event.offsetY - FIELD_ORIGIN) / FIELD_SIZE);

  const rotated  = state.currentTurn === 'black';
  const modelCol = rotated ? 7 - col : col;
  const modelRow = rotated ? 7 - row : row;

  if (modelCol < 0 || modelCol > 7 || modelRow < 0 || modelRow > 7) return;

  if (state.selectedPiece) {
    const moved = await game.move(state.selectedPiece, { col: modelCol, row: modelRow });

    if (!moved) {
      const piece = getPieceAt(modelCol, modelRow, state);
      if (piece && piece.color === state.currentTurn) {
        state.selectedPiece = piece;
      } else {
        state.selectedPiece = null;
      }
      render(state, game.getHistory(), { status: 'ongoing' });
    }
  } else {
    const piece = getPieceAt(modelCol, modelRow, state);

    if (piece && piece.color === state.currentTurn) {
      state.selectedPiece = piece;
      render(state, game.getHistory(), { status: 'ongoing' });
    }
  }
});

document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key === 'z') {
    event.preventDefault();
    game.undo();
  }
  if ((event.ctrlKey || event.metaKey) && event.key === 'y') {
    event.preventDefault();
    game.redo();
  }
});
