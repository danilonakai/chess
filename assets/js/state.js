import { PIECE_TYPE, COLOR, BOARD_SIZE } from './constants.js';

export function createPiece(type, color, col, row) {
  return { type, color, col, row, captured: false, moveCount: 0 };
}

function makeBackRow(color) {
  const row   = color === COLOR.WHITE ? 7 : 0;
  const types = [
    PIECE_TYPE.ROOK,   PIECE_TYPE.KNIGHT, PIECE_TYPE.BISHOP,
    PIECE_TYPE.QUEEN,  PIECE_TYPE.KING,   PIECE_TYPE.BISHOP,
    PIECE_TYPE.KNIGHT, PIECE_TYPE.ROOK,
  ];
  return types.map((type, col) => createPiece(type, color, col, row));
}

function makePawnRow(color) {
  const row = color === COLOR.WHITE ? 6 : 1;
  return Array.from({ length: BOARD_SIZE }, (_, col) =>
    createPiece(PIECE_TYPE.PAWN, color, col, row)
  );
}

export function createInitialState() {
  return {
    pieces: [
      ...makeBackRow(COLOR.WHITE),
      ...makePawnRow(COLOR.WHITE),
      ...makeBackRow(COLOR.BLACK),
      ...makePawnRow(COLOR.BLACK),
    ],
    currentTurn: COLOR.WHITE,
    selectedPiece: null,
  };
}

export function getPieceAt(col, row, state) {
  return state.pieces.find(
    p => p.col === col && p.row === row && !p.captured
  ) ?? null;
}

export function applyMove(piece, destination, state) {
  let newPieces = state.pieces
    .filter(p => !(
      p.col === destination.col &&
      p.row === destination.row &&
      p.color !== piece.color
    ))
    .map(p => p === piece
      ? { ...p, col: destination.col, row: destination.row, moveCount: p.moveCount + 1 }
      : p
    );

  if (destination.castling) {
    const rookDestCol = destination.col - (destination.rook.col > piece.col ? 1 : -1);
    newPieces = newPieces.map(p =>
      p === destination.rook
        ? { ...p, col: rookDestCol, moveCount: p.moveCount + 1 }
        : p
    );
  }

  return {
    ...state,
    pieces: newPieces,
    currentTurn: piece.color === COLOR.WHITE ? COLOR.BLACK : COLOR.WHITE,
  };
}

export function applyPromotion(col, row, newType, state) {
  return {
    ...state,
    pieces: state.pieces.map(p =>
      p.col === col && p.row === row ? { ...p, type: newType } : p
    ),
  };
}