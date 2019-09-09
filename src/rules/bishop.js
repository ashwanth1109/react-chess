import { diagonalMove } from "./moves";

const moveBishop = ({ clicked, next, move }) => {
  const rule = () => {
    return (
      diagonalMove(["up", "left"], { clicked, next }, true) ||
      diagonalMove(["up", "right"], { clicked, next }, true) ||
      diagonalMove(["down", "left"], { clicked, next }, true) ||
      diagonalMove(["down", "right"], { clicked, next }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) move();
};

export default moveBishop;
