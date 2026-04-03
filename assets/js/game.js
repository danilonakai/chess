import { createInitialState, applyMove, applyPromotion, getPieceAt } from './state.js';
import { getLegalMoves, evaluateGameState, isPromotion }              from './rules.js';
import { createHistory, createMoveCommand, toAlgebraic }              from './history.js';
import { render, askPromotionChoice }                                  from './renderer.js';

export function createGame() {
  let state     = createInitialState();
  const history = createHistory();

  function getState()   { return state; }
  function getHistory() { return history; }

  async function move(piece, destination) {
    const legal   = getLegalMoves(piece, state);
    const isLegal = legal.some(m => m.col === destination.col && m.row === destination.row);
    if (!isLegal) return false;

    const stateBefore   = state;
    const capturedPiece = getPieceAt(destination.col, destination.row, state);

    let nextState = applyMove(piece, destination, state);

    let promotionType = null;
    if (isPromotion(piece, destination)) {
      promotionType = await askPromotionChoice(piece.color);
      nextState = applyPromotion(destination.col, destination.row, promotionType, nextState);
    }

    const notation = toAlgebraic(piece, destination, capturedPiece, promotionType);
    history.push(createMoveCommand({
      piece,
      destination,
      stateBefore,
      stateAfter: nextState,
      notation,
    }));

    nextState = { ...nextState, selectedPiece: null };
    state = nextState;

    const opponent = piece.color === 'white' ? 'black' : 'white';
    const result   = evaluateGameState(opponent, state);
    render(state, history, result);

    return true;
  }

  function undo() {
    const previousState = history.undo();
    if (!previousState) return;
    state = previousState;
    render(state, history, evaluateGameState(state.currentTurn, state));
  }

  function redo() {
    const nextState = history.redo();
    if (!nextState) return;
    state = nextState;
    render(state, history, evaluateGameState(state.currentTurn, state));
  }

  return { move, undo, redo, getState, getHistory };
}
