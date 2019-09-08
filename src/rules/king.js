const moveKing = ({ clickedPiece, nextSquare, moveSuccessfully }) => {
  const currentSquare = clickedPiece.square;

  const rule = () => {
    const movementsPossible =
      nextSquare.up === currentSquare ||
      nextSquare.left === currentSquare ||
      nextSquare.right === currentSquare ||
      nextSquare.down === currentSquare ||
      nextSquare.up.left === currentSquare ||
      nextSquare.up.right === currentSquare ||
      nextSquare.down.left === currentSquare ||
      nextSquare.down.right === currentSquare;

    return movementsPossible;
  };

  if (rule()) moveSuccessfully();
};

export default moveKing;
