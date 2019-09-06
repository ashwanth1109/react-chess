const moveQueen = (clickedPiece, nextSquare, moveSuccessfully) => {
  console.log("moving queen");
  const currentSquare = clickedPiece.square;

  const rule = () => {
    const moveUp = () => {
      let checkSquare = currentSquare;
      console.log(checkSquare);
      if (checkSquare.up !== null) {
        while (checkSquare.up !== null && checkSquare.up.piece === null) {
          //   console.log("iterating loop", checkSquare);
          if (checkSquare.up === nextSquare) return true;
          checkSquare = checkSquare.up;
        }
        if (checkSquare.up.piece.player !== clickedPiece.player) return true;
      }

      return false;
    };

    const moveDown = () => {
      let checkSquare = currentSquare;
      if (checkSquare.down !== null) {
        while (checkSquare.down !== null && checkSquare.down.piece === null) {
          if (checkSquare.down === nextSquare) return true;
          checkSquare = checkSquare.down;
        }
        if (checkSquare.down.piece.player !== clickedPiece.player) return true;
      }
      return false;
    };

    return moveUp() || moveDown();
  };

  if (rule()) moveSuccessfully();
};

export default moveQueen;
