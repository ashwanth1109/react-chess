class Piece {
  constructor(symbol, player, square) {
    this.player = player;
    this.symbol = symbol;
    this.square = square;
  }

  changeSquare(square) {
    this.square = square;
  }
}

export default Piece;
