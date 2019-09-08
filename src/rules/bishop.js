import { diagonalMove } from "./moves";

const moveBishop = ({ clickedPiece, nextSquare, moveSuccessfully }) => {
  const rule = () => {
    return (
      diagonalMove(["up", "left"], { clickedPiece, nextSquare }, true) ||
      diagonalMove(["up", "right"], { clickedPiece, nextSquare }, true) ||
      diagonalMove(["down", "left"], { clickedPiece, nextSquare }, true) ||
      diagonalMove(["down", "right"], { clickedPiece, nextSquare }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) moveSuccessfully();
};

export default moveBishop;
