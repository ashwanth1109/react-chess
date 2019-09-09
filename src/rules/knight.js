import { knightMove } from "./moves";

const moveKnight = ({ clicked, next, move }) => {
  const rule = () => {
    return (
      knightMove(["up", "left"], { clicked, next }, true) ||
      knightMove(["up", "right"], { clicked, next }, true) ||
      knightMove(["down", "left"], { clicked, next }, true) ||
      knightMove(["down", "right"], { clicked, next }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) move();
};

export default moveKnight;
