export const normalMove = (dir, { clicked, next }, anyDistance) => {
  let current = clicked.square;

  // if square exists in that direction
  if (current[dir] !== null) {
    if (anyDistance) {
      // piece can move any number of squares in a direction
      // while squares still exist in direction and queen doesnt encounter a piece
      while (current[dir] !== null && current[dir].piece === null) {
        // check if square is where user wants to move queen
        if (current[dir] === next) return true;
        // keep moving in the same direction
        current = current[dir];
      }
      // cant move further because edge of board or piece in the way
      if (
        current[dir] !== null &&
        current[dir].piece !== null &&
        current[dir] === next &&
        current[dir].piece.player !== clicked.player
      )
        return true;
    } else {
      // TODO: You can generalize pawn and king's single movement here?
    }
  }
  // movement not possible
  return false;
};

export const diagonalMove = ([d1, d2], { clicked, next }, anyDistance) => {
  let current = clicked.square;

  // if square exists in the combination of directions
  if (current[d1] !== null && current[d1][d2] !== null) {
    if (anyDistance) {
      // piece can move any number of squares in a diagonal direction
      // as long as squares still exist and there are no pieces on them
      while (
        current[d1] !== null &&
        current[d1][d2] !== null &&
        current[d1][d2].piece === null
      ) {
        // check if square is where user wants to move queen
        if (current[d1][d2] === next) return true;
        // keep moving in the same direction
        current = current[d1][d2];
      }
      // cant move further because edge of board or piece in the way
      if (
        current[d1] !== null &&
        current[d1][d2] !== null &&
        current[d1][d2].piece !== null &&
        current[d1][d2] === next &&
        current[d1][d2].piece.player !== clicked.player
      )
        return true;
    } else {
      // TODO: handle single diagonal move for pawn?
    }
  }
  // movement not possible
  return false;
};

export const knightMove = ([d1, d2], { clicked, next }) => {
  let { square } = clicked;

  if (
    // two moves in d1 and one move in d2
    // if square exists at that posiion
    ((square[d1] &&
      square[d1][d1] &&
      square[d1][d1][d2] &&
      // check if next square is in this position
      square[d1][d1][d2] === next) ||
      // two moves in d2 and one move in d1
      // if square exists at that position
      (square[d2] &&
        square[d2][d2] &&
        square[d2][d2][d1] &&
        // check if next square is in this position
        square[d2][d2][d1] === next)) &&
    // check if next square is empty
    (next.piece === null ||
      // or if piece in square is of opponent player
      next.piece.player !== clicked.player)
  )
    return true;
  // movement not possible
  return false;
};
