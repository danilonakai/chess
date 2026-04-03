import { CANVAS_SIZE, FIELD_SIZE, FIELD_ORIGIN, PIECE_TYPE, FRAME } from './constants.js';
import { getLegalMoves } from './rules.js';

const CANVAS = document.getElementById('chessBoard');
CANVAS.width  = CANVAS_SIZE;
CANVAS.height = CANVAS_SIZE;
CANVAS.style.margin = `${-(CANVAS_SIZE / 2)}px 0 0 ${-(CANVAS_SIZE / 2)}px`;

const CTX = CANVAS.getContext('2d');

const pieceImages = {};

function getImageKey(color, type, rotated = false) {
  const angle = rotated ? '_rotate' : '';
  return `${color}${angle}_${type}`;
}

export function preloadImages() {
  const types  = Object.values(PIECE_TYPE);
  const colors = ['white', 'black'];
  const promises = [];

  types.forEach(type => {
    colors.forEach(color => {
      const key = getImageKey(color, type, false); // só a versão normal
      const img = new Image();
      promises.push(new Promise(resolve => {
        img.onload  = () => { console.log('✓', key); resolve(); };
        img.onerror = () => { console.warn('✗', key); resolve(); };
      }));
      img.src = `assets/images/${key}.png`;
      pieceImages[key] = img;
    });
  });

  return Promise.all(promises);
}

export const toPixel = index => FIELD_ORIGIN + index * FIELD_SIZE;

function toPixelCol(col, rotated) {
  return toPixel(rotated ? 7 - col : col);
}

function toPixelRow(row, rotated) {
  return toPixel(rotated ? 7 - row : row);
}

export function render(state, history, result) {
  const rotated = state.currentTurn === 'black';
  CTX.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  drawFrame(rotated);
  drawBoard();
  drawHighlights(state, rotated);
  drawPieces(state, rotated);
  drawGraveyard(history);
  drawResult(result);
}

function drawFrame(rotated) {
  CTX.fillStyle = '#3a1c07';
  CTX.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

  CTX.fillStyle = '#ffffd9';
  CTX.font = `${CANVAS_SIZE * 0.20}% Arial`;

  const COLS_LABELS = rotated
    ? ['H','G','F','E','D','C','B','A']
    : ['A','B','C','D','E','F','G','H'];

  const ROW_LABELS_LEFT = rotated
    ? ['1','2','3','4','5','6','7','8']
    : ['8','7','6','5','4','3','2','1'];

  const ROW_LABELS_RIGHT = rotated
    ? ['8','7','6','5','4','3','2','1']
    : ['1','2','3','4','5','6','7','8'];

  CTX.save();
  CTX.scale(1, -1);
  CTX.translate(0, -(FIELD_SIZE - (FRAME / 2)));
  COLS_LABELS.forEach((label, i) => {
    CTX.fillText(label, FIELD_SIZE * (i + 1), FIELD_ORIGIN - (FIELD_ORIGIN / 4));
  });
  CTX.restore();

  COLS_LABELS.forEach((label, i) => {
    CTX.fillText(label, FIELD_SIZE * (i + 1), CANVAS_SIZE - (FIELD_ORIGIN / 4));
  });

  ROW_LABELS_LEFT.forEach((label, i) => {
    CTX.fillText(label,
      FIELD_ORIGIN - (FIELD_ORIGIN / 2),
      FIELD_ORIGIN + FIELD_SIZE * (i + 1) - (FIELD_SIZE / 3)
    );
  });

  CTX.save();
  CTX.scale(1, -1);
  CTX.translate(0, -CANVAS_SIZE);
  ROW_LABELS_RIGHT.forEach((label, i) => {
    CTX.fillText(label,
      CANVAS_SIZE - (FIELD_ORIGIN / 3) - (FIELD_ORIGIN / 2),
      FIELD_ORIGIN + FIELD_SIZE * (i + 1) - (FIELD_SIZE / 3)
    );
  });
  CTX.restore();
}

function drawBoard() {
  let light = true;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      CTX.fillStyle = light ? '#a7a791' : '#682b00';
      CTX.fillRect(toPixel(col), toPixel(row), FIELD_SIZE, FIELD_SIZE);
      light = !light;
    }
    light = !light;
  }
}

function drawHighlights(state, rotated) {
  if (!state.selectedPiece) return;
  const piece = state.selectedPiece;

  CTX.fillStyle = '#c19348';
  CTX.fillRect(toPixelCol(piece.col, rotated), toPixelRow(piece.row, rotated), FIELD_SIZE, FIELD_SIZE);

  CTX.fillStyle = 'rgba(255, 0, 0, 0.45)';
  getLegalMoves(piece, state).forEach(({ col, row }) => {
    CTX.fillRect(toPixelCol(col, rotated), toPixelRow(row, rotated), FIELD_SIZE, FIELD_SIZE);
  });
}

function drawPieces(state, rotated) {
  state.pieces
    .filter(p => !p.captured)
    .forEach(piece => {
      const key = getImageKey(piece.color, piece.type, false); // sempre imagem normal
      const img = pieceImages[key];
      if (!img) return;
      CTX.drawImage(
        img,
        toPixelCol(piece.col, rotated),
        toPixelRow(piece.row, rotated),
        FIELD_SIZE,
        FIELD_SIZE
      );
    });
}

function drawGraveyard(history) {
  const PIECE_SIZE = FIELD_SIZE * 0.5;

  ['white', 'black'].forEach((color, colorIndex) => {
    const captured = history.getPast()
      .flatMap(cmd =>
        cmd.stateBefore.pieces.filter(p =>
          p.color === color &&
          !p.captured &&
          cmd.stateAfter.pieces.find(a => a === p)?.captured
        )
      );

    const y = colorIndex === 0 ? CANVAS_SIZE + 8 : -(PIECE_SIZE + 8);

    captured.forEach((piece, i) => {
      const key = getImageKey(piece.color, piece.type, false);
      const img = pieceImages[key];
      if (!img) return;
      CTX.globalAlpha = 0.65;
      CTX.drawImage(img, FIELD_ORIGIN + i * PIECE_SIZE, y, PIECE_SIZE, PIECE_SIZE);
      CTX.globalAlpha = 1;
    });
  });
}

function drawResult(result) {
  if (result.status === 'ongoing') return;

  const messages = {
    check:     `${result.color === 'white' ? 'Brancas' : 'Pretas'} em xeque!`,
    checkmate: `Xeque-mate! ${result.winner === 'white' ? 'Brancas' : 'Pretas'} vencem.`,
    stalemate: 'Afogamento — empate.',
  };

  CTX.fillStyle = 'rgba(0,0,0,0.55)';
  CTX.fillRect(FIELD_ORIGIN, CANVAS_SIZE / 2 - 30, CANVAS_SIZE - FIELD_ORIGIN * 2, 60);
  CTX.fillStyle = '#fff';
  CTX.font      = '18px sans-serif';
  CTX.textAlign = 'center';
  CTX.fillText(messages[result.status], CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 7);
}

export function askPromotionChoice(color) {
  return new Promise(resolve => {
    const choices = [PIECE_TYPE.QUEEN, PIECE_TYPE.ROOK, PIECE_TYPE.BISHOP, PIECE_TYPE.KNIGHT];
    const y = color === 'white' ? toPixel(0) : toPixel(7);

    choices.forEach((type, i) => {
      const x   = toPixel(2 + i);
      const key = getImageKey(color, type, false);
      CTX.fillStyle = 'rgba(255,255,255,0.92)';
      CTX.fillRect(x, y, FIELD_SIZE, FIELD_SIZE);
      CTX.drawImage(pieceImages[key], x, y, FIELD_SIZE, FIELD_SIZE);
    });

    function handleChoice(event) {
      const col = Math.floor((event.offsetX - FIELD_ORIGIN) / FIELD_SIZE);
      const idx = col - 2;
      if (idx >= 0 && idx < 4) {
        CANVAS.removeEventListener('click', handleChoice);
        resolve(choices[idx]);
      }
    }

    CANVAS.addEventListener('click', handleChoice);
  });
}
