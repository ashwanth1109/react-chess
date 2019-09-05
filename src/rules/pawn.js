const movePawn = (
  clickedPiece,
  nextSquare,
  setClickedPiece,
  moveSuccessfully
) => {
  const currentSquare = clickedPiece.square;

  const rule =
    (clickedPiece.player === 1 &&
      ((currentSquare.row === 2 &&
        (currentSquare.down.down === nextSquare ||
          currentSquare.down === nextSquare)) ||
        currentSquare.down === nextSquare)) ||
    ((currentSquare.row === 7 &&
      (currentSquare.up.up === nextSquare ||
        currentSquare.up === nextSquare)) ||
      currentSquare.up === nextSquare);

  if (rule) moveSuccessfully(clickedPiece, nextSquare, setClickedPiece);
};

export default movePawn;
