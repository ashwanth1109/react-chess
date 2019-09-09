import React, { useCallback, useContext } from "react";
import { Board as GameBoard, Row, Square, Highlight, Piece } from "../styles";
import Store from "../store";
import movePiece from "../rules";
import selectPiece from "../rules/select";

export default ({ board }) => {
  const store = useContext(Store);
  const { state } = store;
  const { clicked, p1Turn } = state;

  const handleClick = useCallback(
    sq => {
      // piece hasn't been selected yet
      const noPiece = clicked === null;
      // or player changes his mind about piece s/he wants to move
      const ownPiece =
        sq.piece !== null && sq.piece.player === (p1Turn ? 1 : 2);

      // if noPiece or ownPiece, then select piece
      if (noPiece || ownPiece) selectPiece(store, sq);
      else movePiece(store, sq); // else check if move is possible
    },
    [p1Turn, clicked, store]
  );

  return (
    <GameBoard>
      {board.map((row, id) => (
        <Row key={id}>
          {row.map((sq, id) => (
            <Square
              key={id}
              onClick={() => handleClick(sq)}
              isLight={sq.isLight}
            >
              {clicked !== null && clicked === sq.piece ? (
                <Highlight player1={sq.piece.player === 1} />
              ) : null}
              {sq.piece ? (
                <Piece player1={sq.piece.player === 1}>{sq.piece.symbol}</Piece>
              ) : null}
            </Square>
          ))}
        </Row>
      ))}
    </GameBoard>
  );
};
