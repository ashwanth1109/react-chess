import { knightMove } from "./moves";

const moveKnight = ({ clickedPiece, nextSquare, moveSuccessfully }) => {
  const rule = () => {
    return (
      knightMove(["up", "left"], { clickedPiece, nextSquare }, true) ||
      knightMove(["up", "right"], { clickedPiece, nextSquare }, true) ||
      knightMove(["down", "left"], { clickedPiece, nextSquare }, true) ||
      knightMove(["down", "right"], { clickedPiece, nextSquare }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) moveSuccessfully();
};

export default moveKnight;
