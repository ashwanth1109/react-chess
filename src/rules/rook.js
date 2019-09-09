import { normalMove } from "./moves";

const moveRook = ({ clicked, next, move }) => {
  const rule = () => {
    return (
      normalMove("up", { clicked, next }, true) ||
      normalMove("down", { clicked, next }, true) ||
      normalMove("left", { clicked, next }, true) ||
      normalMove("right", { clicked, next }, true)
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) move();
};

export default moveRook;
