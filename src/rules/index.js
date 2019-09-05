import movePawn from "./pawn";

const moveSuccessfully = (clickedPiece, square, setClickedPiece) => {
  // remove piece from original square
  clickedPiece.square.removePiece();
  // let piece know which square it will be placed in
  clickedPiece.changeSquare(square);
  // let square know that piece has moved on to it
  square.setPiece(clickedPiece);
  // remove clickedPiece from state
  setClickedPiece(null);
};

const movePiece = (clickedPiece, square, setClickedPiece) => {
  switch (clickedPiece.name) {
    case "pawn":
      movePawn(clickedPiece, square, setClickedPiece, moveSuccessfully);
      break;
    default:
      moveSuccessfully(clickedPiece, square, setClickedPiece);
  }
};

export default movePiece;
