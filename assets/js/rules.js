import { PIECE_TYPE, COLOR, BOARD_SIZE } from './constants.js';
import { getPieceAt, applyMove } from './state.js';

export function getColorContext(color) {
  return {
    direction: color === COLOR.WHITE ? -1 : 1,
    opponent:  color === COLOR.WHITE ? COLOR.BLACK : COLOR.WHITE,
    startRow:  color === COLOR.WHITE ? 6 : 1,
    promotionRow: color === COLOR.WHITE ? 0 : 7,
  };
}

function inBounds(col, row) {
  return col >= 0 && col < BOARD_SIZE && row >= 0 && row < BOARD_SIZE;
}

function slide(piece, dc, dr, state) {
  const moves = [];
  const { opponent } = getColorContext(piece.color);
  let col = piece.col + dc;
  let row = piece.row + dr;

  while (inBounds(col, row)) {
    const target = getPieceAt(col, row, state);
    if (target) {
      if (target.color === opponent) moves.push({ col, row });
      break;
    }
    moves.push({ col, row });
    col += dc;
    row += dr;
  }
  return moves;
}

function step(piece, dc, dr, state) {
  const col = piece.col + dc;
  const row = piece.row + dr;
  const { opponent } = getColorContext(piece.color);
  if (!inBounds(col, row)) return null;
  const target = getPieceAt(col, row, state);
  if (target && target.color !== opponent) return null;
  return { col, row };
}

const MOVE_CALCULATORS = {
  [PIECE_TYPE.PAWN](piece, state) {
    const moves = [];
    const { direction, opponent, startRow } = getColorContext(piece.color);
    const { col, row } = piece;

    if (!getPieceAt(col, row + direction, state)) {
      moves.push({ col, row: row + direction });
      if (row === startRow && !getPieceAt(col, row + direction * 2, state)) {
        moves.push({ col, row: row + direction * 2 });
      }
    }

    for (const dc of [-1, 1]) {
      const target = getPieceAt(col + dc, row + direction, state);
      if (target?.color === opponent) {
        moves.push({ col: col + dc, row: row + direction });
      }
    }
    return moves;
  },

  [PIECE_TYPE.ROOK](piece, state) {
    return [
      ...slide(piece,  0, -1, state),
      ...slide(piece,  0,  1, state),
      ...slide(piece, -1,  0, state),
      ...slide(piece,  1,  0, state),
    ];
  },

  [PIECE_TYPE.BISHOP](piece, state) {
    return [
      ...slide(piece, -1, -1, state),
      ...slide(piece,  1, -1, state),
      ...slide(piece,  1,  1, state),
      ...slide(piece, -1,  1, state),
    ];
  },

  [PIECE_TYPE.QUEEN](piece, state) {
    return [
      ...MOVE_CALCULATORS[PIECE_TYPE.ROOK](piece, state),
      ...MOVE_CALCULATORS[PIECE_TYPE.BISHOP](piece, state),
    ];
  },

  [PIECE_TYPE.KNIGHT](piece, state) {
    const offsets = [[-2,-1],[-1,-2],[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1]];
    return offsets.map(([dc, dr]) => step(piece, dc, dr, state)).filter(Boolean);
  },

  [PIECE_TYPE.KING](piece, state) {
    const offsets = [[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];
    return offsets.map(([dc, dr]) => step(piece, dc, dr, state)).filter(Boolean);
  },
};

export function getValidMoves(piece, state) {
  return MOVE_CALCULATORS[piece.type]?.(piece, state) ?? [];
}

// --- Check e legalidade ---
export function isKingInCheck(color, state) {
  const king = state.pieces.find(
    p => p.type === PIECE_TYPE.KING && p.color === color && !p.captured
  );
  if (!king) return false;

  const { opponent } = getColorContext(color);
  return state.pieces
    .filter(p => p.color === opponent && !p.captured)
    .some(attacker =>
      getValidMoves(attacker, state).some(
        m => m.col === king.col && m.row === king.row
      )
    );
}

function isSquareAttacked(col, row, byColor, state) {
  return state.pieces
    .filter(p => p.color === byColor && !p.captured)
    .some(attacker =>
      getValidMoves(attacker, state).some(m => m.col === col && m.row === row)
    );
}

function getCastlingMoves(king, state) {
  if (king.moveCount > 0 || isKingInCheck(king.color, state)) return [];

  const { opponent } = getColorContext(king.color);
  const rooks = state.pieces.filter(
    p => p.type === PIECE_TYPE.ROOK &&
         p.color === king.color &&
         p.row === king.row &&
         p.moveCount === 0 &&
         !p.captured
  );

  return rooks.flatMap(rook => {
    const direction = rook.col > king.col ? 1 : -1;
    const between = [];
    let c = king.col + direction;
    while (c !== rook.col) { between.push(c); c += direction; }

    const pathClear = between.every(col => !getPieceAt(col, king.row, state));
    const kingPath  = [king.col + direction, king.col + direction * 2];
    const pathSafe  = kingPath.every(
      col => !isSquareAttacked(col, king.row, opponent, state)
    );
    const destSafe  = !isSquareAttacked(king.col + direction * 2, king.row, opponent, state);

    if (!pathClear || !pathSafe || !destSafe) return [];

    return [{ col: king.col + direction * 2, row: king.row, castling: true, rook }];
  });
}

export function getLegalMoves(piece, state) {
  const raw      = getValidMoves(piece, state);
  const castling = piece.type === PIECE_TYPE.KING ? getCastlingMoves(piece, state) : [];

  return [...raw, ...castling].filter(dest => {
    const next = applyMove(piece, dest, state);
    return !isKingInCheck(piece.color, next);
  });
}

function hasNoLegalMoves(color, state) {
  return state.pieces
    .filter(p => p.color === color && !p.captured)
    .every(p => getLegalMoves(p, state).length === 0);
}

export function evaluateGameState(color, state) {
  const inCheck    = isKingInCheck(color, state);
  const noMoves    = hasNoLegalMoves(color, state);

  if (inCheck && noMoves)  return { status: 'checkmate', winner: color === COLOR.WHITE ? COLOR.BLACK : COLOR.WHITE };
  if (!inCheck && noMoves) return { status: 'stalemate' };
  if (inCheck)             return { status: 'check', color };
  return { status: 'ongoing' };
}

export function isPromotion(piece, destination) {
  if (piece.type !== PIECE_TYPE.PAWN) return false;
  return destination.row === getColorContext(piece.color).promotionRow;
}