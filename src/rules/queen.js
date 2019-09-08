const moveQueen = (clickedPiece, nextSquare, moveSuccessfully) => {
  const rule = () => {
    const checkMove = direction => {
      let currentSquare = clickedPiece.square;

      // if square exists in that direction
      if (currentSquare[direction] !== null) {
        // queen can move any number of squares in a direction
        // while squares still exist in direction and queen doesnt encounter a piece
        while (
          currentSquare[direction] !== null &&
          currentSquare[direction].piece === null
        ) {
          // check if square is where user wants to move queen
          if (currentSquare[direction] === nextSquare) return true;
          // keep moving in the same direction
          currentSquare = currentSquare[direction];
        }
        // cant move further because edge of board or piece in the way
        if (
          currentSquare[direction] !== null &&
          currentSquare[direction].piece !== null &&
          currentSquare[direction] === nextSquare &&
          currentSquare[direction].piece.player !== clickedPiece.player
        )
          return true;
      }
      return false;
    };

    const checkDiagonal = (direction1, direction2) => {
      let currentSquare = clickedPiece.square;
      // if square exists in the combination of directions
      if (
        currentSquare[direction1] !== null &&
        currentSquare[direction1][direction2] !== null
      ) {
        // queen can move any number of squares in a diagonal direction
        // as long as squares still exist and there are no pieces on them
        while (
          currentSquare[direction1] !== null &&
          currentSquare[direction1][direction2] !== null &&
          currentSquare[direction1][direction2].piece === null
        ) {
          // check if square is where user wants to move queen
          if (currentSquare[direction1][direction2] === nextSquare) return true;
          // keep moving in the same direction
          currentSquare = currentSquare[direction1][direction2];
        }
        // cant move further because edge of board or piece in the way
        if (
          currentSquare[direction1] !== null &&
          currentSquare[direction1][direction2] !== null &&
          currentSquare[direction1][direction2].piece !== null &&
          currentSquare[direction1][direction2] === nextSquare &&
          currentSquare[direction1][direction2].piece.player !==
            clickedPiece.player
        )
          return true;
      }
      return false;
    };

    return (
      checkMove("up") ||
      checkMove("down") ||
      checkMove("left") ||
      checkMove("right") ||
      checkDiagonal("up", "left") ||
      checkDiagonal("up", "right") ||
      checkDiagonal("down", "left") ||
      checkDiagonal("down", "right")
    );
  };

  // if movement rules allow the movement, then move is successful
  if (rule()) moveSuccessfully();
};

export default moveQueen;
