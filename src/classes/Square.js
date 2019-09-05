class Square {
  constructor(row, col, piece = null) {
    this.row = row;
    this.col = col;
    this.piece = piece;
    this.up = [row + 1, col];
    this.down = [row - 1, col];
    this.right = [row, col + 1];
    this.left = [row, col - 1];
    this.isLight = (row + col) % 2 === 0;
  }

  removePiece() {
    this.piece = null;
  }

  setPiece(piece) {
    this.piece = piece;
  }
}

export default Square;
