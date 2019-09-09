import { normalMove, diagonalMove } from "./moves";

const moveQueen = ({ clicked, next, move }) => {
  const rule = () => {
    return (
      normalMove("up", { clicked, next }, true) ||
      normalMove("down", { clicked, next }, true) ||
      normalMove("left", { clicked, next }, true) ||
      normalMove("right", { clicked, next }, true) ||
      diagonalMove(["up", "left"], { clicked, next }, true) ||
      diagonalMove(["up", "right"], { clicked, next }, true) ||
      diagonalMove(["down", "left"], { clicked, next }, true) ||
      diagonalMove(["down", "right"], { clicked, next }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) move();
};

export default moveQueen;
