const movePawn = (clickedPiece, nextSquare, moveSuccessfully) => {
  const currentSquare = clickedPiece.square;

  const rule = () => {
    const player1Rule =
      clickedPiece.player === 1 && // if player1, then rules apply
      ((currentSquare.row === 2 && // if on first sq, then double jump possible
        (currentSquare.down.down === nextSquare || // check if double jump
          currentSquare.down === nextSquare)) || // check if single jump
        currentSquare.down === nextSquare); // if not on 1st sq, check if single jump

    const player2Rule =
      clickedPiece.player === 2 && // if player2, then rules apply
      ((currentSquare.row === 7 &&
        (currentSquare.up.up === nextSquare ||
          currentSquare.up === nextSquare)) ||
        currentSquare.up === nextSquare);

    const noPieceMovement =
      nextSquare.piece === null && (player1Rule || player2Rule);

    const player1Attack =
      currentSquare.down.right === nextSquare ||
      currentSquare.down.left === nextSquare;

    const player2Attack =
      currentSquare.up.right === nextSquare ||
      currentSquare.up.left === nextSquare;

    const attackingMovement =
      nextSquare.piece !== null &&
      ((clickedPiece.player === 1 && player1Attack) ||
        (clickedPiece.player === 2 && player2Attack));

    return noPieceMovement || attackingMovement;
  };

  if (rule()) moveSuccessfully();
};

export default movePawn;
