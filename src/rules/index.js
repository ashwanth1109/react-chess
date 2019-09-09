import movePawn from "./pawn";
import moveKing from "./king";
import moveQueen from "./queen";
import moveRook from "./rook";
import moveBishop from "./bishop";
import moveKnight from "./knight";
import * as atypes from "../actionTypes";

const movePiece = ({ state, dispatch }, next) => {
  const { clicked } = state;
  const move = () => {
    // remove piece from original square
    clicked.square.removePiece();
    // let piece know which square it will be placed in
    clicked.changeSquare(next);
    // let square know that piece has moved on to it
    next.setPiece(clicked);
    // remove clickedPiece from state
    dispatch({ type: atypes.REMOVE_CLICKED_PIECE });
    // change player turn
    dispatch({ type: atypes.CHANGE_PLAYER_TURN });
  };

  const moveObj = { clicked, next, move };

  switch (clicked.name) {
    case "pawn":
      movePawn(moveObj);
      break;
    case "king":
      moveKing(moveObj);
      break;
    case "queen":
      moveQueen(moveObj);
      break;
    case "rook":
      moveRook(moveObj);
      break;
    case "bishop":
      moveBishop(moveObj);
      break;
    case "knight":
      moveKnight(moveObj);
      break;
    default:
      move();
  }
};

export default movePiece;
