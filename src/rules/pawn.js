import { normalMove } from "./moves";

const movePawn = ({ clicked, next, move }) => {
  const current = clicked.square;

  const rule = () => {
    const player1Rule =
      clicked.player === 1 && // if player1, then rules apply
      ((current.row === 2 && // if on first sq, then double jump possible
        (current.down.down === next || // check if double jump
          current.down === next)) || // check if single jump
        current.down === next); // if not on 1st sq, check if single jump

    const player2Rule =
      clicked.player === 2 && // if player2, then rules apply
      ((current.row === 7 && (current.up.up === next || current.up === next)) ||
        current.up === next);

    const noPieceMovement = next.piece === null && (player1Rule || player2Rule);

    const player1Attack =
      current.down.right === next || current.down.left === next;

    const player2Attack = current.up.right === next || current.up.left === next;

    const attackingMovement =
      next.piece !== null &&
      ((clicked.player === 1 && player1Attack) ||
        (clicked.player === 2 && player2Attack));

    return noPieceMovement || attackingMovement;
  };

  if (rule()) move();
};

export default movePawn;
