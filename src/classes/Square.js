class Square {
  constructor(row, col, piece = null) {
    this.row = row;
    this.col = col;
    this.piece = piece;
    this.isLight = (row + col) % 2 === 0;
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
  }

  setNeighbours(up, down, left, right) {
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
  }

  removePiece() {
    this.piece = null;
  }

  setPiece(piece) {
    this.piece = piece;
  }
}

export default Square;
