import * as atypes from "../actionTypes";

const selectPiece = ({ state, dispatch }, sq) => {
  const { p1Turn } = state;
  const rule = () =>
    (p1Turn && sq.piece.player === 1) || (!p1Turn && sq.piece.player === 2);

  if (sq.piece !== null && rule())
    dispatch({
      type: atypes.SET_CLICKED_PIECE,
      payload: sq.piece
    });
};

export default selectPiece;
