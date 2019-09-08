export const normalMove = (direction, appState, anyDistance) => {
  const { clickedPiece, nextSquare } = appState;

  let currentSquare = clickedPiece.square;

  // if square exists in that direction
  if (currentSquare[direction] !== null) {
    if (anyDistance) {
      // piece can move any number of squares in a direction
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
    } else {
      // TODO: You can generalize pawn and king's single movement here?
    }
  }
  // movement not possible
  return false;
};

export const diagonalMove = (directions, appState, anyDistance) => {
  const [direction1, direction2] = directions;
  const { clickedPiece, nextSquare } = appState;

  let currentSquare = clickedPiece.square;

  // if square exists in the combination of directions
  if (
    currentSquare[direction1] !== null &&
    currentSquare[direction1][direction2] !== null
  ) {
    if (anyDistance) {
      // piece can move any number of squares in a diagonal direction
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
    } else {
      // TODO: handle single diagonal move for pawn?
    }
  }
  // movement not possible
  return false;
};

export const knightMove = (directions, appState) => {
  const [d1, d2] = directions; // up and left
  const { clickedPiece, nextSquare } = appState;

  let { square } = clickedPiece;

  if (
    // two moves in direction1 and one move in direction2
    // if square exists at that posiion
    ((square[d1] &&
      square[d1][d1] &&
      square[d1][d1][d2] &&
      // check if next square is in this position
      square[d1][d1][d2] === nextSquare) ||
      // two moves in direction2 and one move in direction1
      // if square exists at that position
      (square[d2] &&
        square[d2][d2] &&
        square[d2][d2][d1] &&
        // check if next square is in this position
        square[d2][d2][d1] === nextSquare)) &&
    // check if next square is empty
    (nextSquare.piece === null ||
      // or if piece in square is of opponent player
      nextSquare.piece.player !== clickedPiece.player)
  )
    return true;
  // movement not possible
  return false;
};
