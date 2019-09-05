const selectPiece = (p1Turn, square, setClicked) => {
  const rule =
    (p1Turn && square.piece.player === 1) ||
    (!p1Turn && square.piece.player === 2);

  if (rule) setClicked(square.piece);
};

export default selectPiece;
