class Square {
  constructor(row, col, piece = null) {
    this.row = row;
    this.col = col;
    this.up = [row + 1, col];
    this.down = [row - 1, col];
    this.right = [row, col + 1];
    this.left = [row, col - 1];
    this.isLight = (row + col) % 2 === 0;
    this.hasPiece = piece;
  }
}

export default Square;
