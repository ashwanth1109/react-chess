const moveKing = ({ clicked, next, move }) => {
  const current = clicked.square;

  const rule = () => {
    const movementsPossible =
      next.up === current ||
      next.left === current ||
      next.right === current ||
      next.down === current ||
      next.up.left === current ||
      next.up.right === current ||
      next.down.left === current ||
      next.down.right === current;

    return movementsPossible;
  };

  if (rule()) move();
};

export default moveKing;
