import Square from "./Square";
import Piece from "./Piece";
import { pieces, specialRow } from "../data";

class Game {
  constructor() {
    this.board = [];
    for (let i = 1; i <= 8; i++) {
      let arr = [];
      for (let j = 1; j <= 8; j++) {
        let piece = null;
        const square = new Square(i, j);
        if (i === 1) {
          piece = new Piece(specialRow[j - 1], 1, square);
        } else if (i === 8) {
          piece = new Piece(specialRow[8 - j], 2, square);
        } else if (i === 2) {
          piece = new Piece(pieces.pawn, 1, square);
        } else if (i === 7) {
          piece = new Piece(pieces.pawn, 2, square);
        }
        square.setPiece(piece);
        arr.push(square);
      }
      this.board.push(arr);
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const square = this.board[i][j];
        const up = i - 1 >= 0 ? this.board[i - 1][j] : null;
        const down = i + 1 < 8 ? this.board[i + 1][j] : null;
        const left = j - 1 >= 0 ? this.board[i][j - 1] : null;
        const right = j + 1 < 8 ? this.board[i][j + 1] : null;
        square.setNeighbours(up, down, left, right);
      }
    }
  }
}

export default Game;
