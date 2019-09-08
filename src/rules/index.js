import movePawn from "./pawn";
import moveKing from "./king";
import moveQueen from "./queen";
import moveRook from "./rook";

const movePiece = (
  clickedPiece,
  nextSquare,
  setClickedPiece,
  setPlayer1Turn
) => {
  const moveSuccessfully = () => {
    // remove piece from original square
    clickedPiece.square.removePiece();
    // let piece know which square it will be placed in
    clickedPiece.changeSquare(nextSquare);
    // let square know that piece has moved on to it
    nextSquare.setPiece(clickedPiece);
    // remove clickedPiece from state
    setClickedPiece(null);
    // change player turn
    setPlayer1Turn(prev => !prev);
  };

  const appState = { clickedPiece, nextSquare, moveSuccessfully };

  switch (clickedPiece.name) {
    case "pawn":
      movePawn(appState);
      break;
    case "king":
      moveKing(appState);
      break;
    case "queen":
      moveQueen(appState);
      break;
    case "rook":
      moveRook(appState);
      break;
    default:
      moveSuccessfully();
  }
};

export default movePiece;
