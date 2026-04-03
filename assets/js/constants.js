export const PIECE_TYPE = {
  PAWN:   'pawn',
  ROOK:   'rook',
  KNIGHT: 'knight',
  BISHOP: 'bishop',
  QUEEN:  'queen',
  KING:   'king',
};

export const COLOR = {
  WHITE: 'white',
  BLACK: 'black',
};

export const BOARD_SIZE   = 8;
export const CANVAS_SIZE  = 800;
export const FRAME        = 15;
export const FIELD_SIZE   = (CANVAS_SIZE - (CANVAS_SIZE * (FRAME / 100))) / BOARD_SIZE;
export const FIELD_ORIGIN = CANVAS_SIZE * (FRAME / 200);

export const COLS = ['A','B','C','D','E','F','G','H'];

export const SQUARES = Array.from({ length: BOARD_SIZE }, (_, row) =>
  Array.from({ length: BOARD_SIZE }, (_, col) => ({
    name: `${COLS[col]}${row + 1}`,
    col,
    row,
  }))
).flat();