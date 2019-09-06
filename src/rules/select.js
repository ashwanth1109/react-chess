const selectPiece = (p1Turn, square, setClicked) => {
  const rule = () =>
    (p1Turn && square.piece.player === 1) ||
    (!p1Turn && square.piece.player === 2);

  if (square.piece !== null && rule()) setClicked(square.piece);
};

export default selectPiece;
