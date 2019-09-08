import { normalMove } from "./moves";

const moveRook = (clickedPiece, nextSquare, moveSuccessfully) => {
  const rule = () => {
    return (
      normalMove("up", { clickedPiece, nextSquare }, true) ||
      normalMove("down", { clickedPiece, nextSquare }, true) ||
      normalMove("left", { clickedPiece, nextSquare }, true) ||
      normalMove("right", { clickedPiece, nextSquare }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) moveSuccessfully();
};

export default moveRook;
