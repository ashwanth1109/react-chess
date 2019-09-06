import movePawn from "./pawn";
import moveKing from "./king";
import moveQueen from "./queen";

const movePiece = (clickedPiece, square, setClickedPiece, setPlayer1Turn) => {
  const moveSuccessfully = () => {
    // remove piece from original square
    clickedPiece.square.removePiece();
    // let piece know which square it will be placed in
    clickedPiece.changeSquare(square);
    // let square know that piece has moved on to it
    square.setPiece(clickedPiece);
    // remove clickedPiece from state
    setClickedPiece(null);
    // change player turn
    setPlayer1Turn(prev => !prev);
  };

  switch (clickedPiece.name) {
    case "pawn":
      movePawn(clickedPiece, square, moveSuccessfully);
      break;
    case "king":
      moveKing(clickedPiece, square, moveSuccessfully);
      break;
    case "queen":
      moveQueen(clickedPiece, square, moveSuccessfully);
      break;
    default:
      moveSuccessfully();
  }
};

export default movePiece;
