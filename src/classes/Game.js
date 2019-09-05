import Square from "./Square";
import Piece from "./Piece";
import { pieces, specialRow } from "../data";

class Game {
  constructor() {
    this.board = [];
    for (let i = 1; i <= 8; i++) {
      let arr = [];
      for (let j = 1; j <= 8; j++) {
        let square,
          piece = null;
        if (i === 1) {
          piece = new Piece(specialRow[j - 1], 1);
        } else if (i === 8) {
          piece = new Piece(specialRow[8 - j], 2);
        } else if (i === 2) {
          piece = new Piece(pieces.pawn, 1);
        } else if (i === 7) {
          piece = new Piece(pieces.pawn, 2);
        }
        square = new Square(i, j, piece);
        arr.push(square);
      }
      this.board.push(arr);
    }
  }
}

export default Game;
