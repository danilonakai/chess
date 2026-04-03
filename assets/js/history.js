export function createMoveCommand({ piece, destination, stateBefore, stateAfter, notation }) {
  return {
    piece,
    destination,
    stateBefore,
    stateAfter,
    notation,
    timestamp: Date.now(),
  };
}

export function createHistory() {
  let past   = [];
  let future = [];

  return {
    push(command) {
      past.push(command);
      future = [];
    },

    undo() {
      if (past.length === 0) return null;
      const command = past.pop();
      future.push(command);
      return command.stateBefore;
    },

    redo() {
      if (future.length === 0) return null;
      const command = future.pop();
      past.push(command);
      return command.stateAfter;
    },

    canUndo: () => past.length > 0,
    canRedo: () => future.length > 0,

    getCapturedPieces(color) {
      return past
        .filter(cmd => {
          const before = cmd.stateBefore.pieces;
          const after  = cmd.stateAfter.pieces;
          // detecta se alguma peça dessa cor sumiu entre os estados
          return before.some(p =>
            p.color === color &&
            !p.captured &&
            after.find(a => a === p)?.captured
          );
        })
        .flatMap(cmd =>
          cmd.stateBefore.pieces.filter(p =>
            p.color === color &&
            !p.captured &&
            cmd.stateAfter.pieces.find(a => a === p)?.captured
          )
        );
    },

    toNotationList() {
      return past.map((cmd, i) => `${i + 1}. ${cmd.notation}`);
    },

    getPast:   () => [...past],
    getLength: () => past.length,
  };
}

import { COLS } from './constants.js';
import { PIECE_TYPE } from './constants.js';

const PIECE_LETTER = {
  [PIECE_TYPE.KING]:   'K',
  [PIECE_TYPE.QUEEN]:  'Q',
  [PIECE_TYPE.ROOK]:   'R',
  [PIECE_TYPE.BISHOP]: 'B',
  [PIECE_TYPE.KNIGHT]: 'N',
  [PIECE_TYPE.PAWN]:   '',
};

export function toAlgebraic(piece, destination, capturedPiece, promotionType) {
  if (destination.castling) {
    return destination.col > 4 ? 'O-O' : 'O-O-O';
  }

  const letter   = PIECE_LETTER[piece.type];
  const capture  = capturedPiece ? 'x' : '';
  const from     = piece.type === PIECE_TYPE.PAWN && capturedPiece
    ? COLS[piece.col].toLowerCase()
    : '';
  const to       = `${COLS[destination.col].toLowerCase()}${8 - destination.row}`;
  const promo    = promotionType ? `=${PIECE_LETTER[promotionType]}` : '';

  return `${letter}${from}${capture}${to}${promo}`;
}