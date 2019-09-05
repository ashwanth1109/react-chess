class Piece {
  constructor(piece, player, square) {
    this.player = player;
    this.name = piece.name;
    this.symbol = piece.symbol;
    this.square = square;
  }

  changeSquare(square) {
    this.square = square;
  }
}

export default Piece;
