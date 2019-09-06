import React, { useState, useCallback } from "react";

import useClientDimensions from "./hooks/useClientDimensions";
import { fullVS, center, c, fRow } from "./styles";
import { stylizer } from "./utils";
import Game from "./classes/Game";
import movePiece from "./rules";
import selectPiece from "./rules/select";

const App = () => {
  const { vw, vh } = useClientDimensions();
  const [game, setGame] = useState(new Game());
  const [clickedPiece, setClickedPiece] = useState(null);
  const [player1Turn, setPlayer1Turn] = useState(true);

  // Logging game state
  // console.log(game);

  const handleClick = useCallback(
    square => {
      if (
        clickedPiece === null || // check if a piece has not been clicked upon yet
        (square.piece !== null && square.piece.player === (player1Turn ? 1 : 2))
        // or check if player changes his mind and wants to move some other piece
      ) {
        // check for rules to select a piece
        selectPiece(player1Turn, square, setClickedPiece);
      } else {
        // check for rules to move a piece
        movePiece(clickedPiece, square, setClickedPiece, setPlayer1Turn);
      }
    },
    [clickedPiece, player1Turn]
  );

  if (vw < 800 || vh < 600) {
    return (
      <div style={stylizer([fullVS, center])}>
        Sorry, App only works on screens larger than 800px wide and 600px high
      </div>
    );
  }

  return (
    <div style={stylizer([fullVS, center, { background: c.gray }])}>
      <div style={stylizer([{ width: "600px", height: "600px" }])}>
        {game.board.map((row, id) => (
          <div
            key={id}
            style={stylizer([
              {
                width: "100%",
                height: "75px"
              },
              fRow
            ])}
          >
            {row.map((square, id) => (
              <div
                key={id}
                onClick={() => handleClick(square)}
                style={stylizer([
                  {
                    width: "75px",
                    height: "75px",
                    background: square.isLight ? c.white : c.blue,
                    cursor: "pointer",
                    position: "relative"
                  },
                  center
                ])}
              >
                {clickedPiece !== null && clickedPiece === square.piece ? (
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      background: square.piece.player === 1 ? c.lRed : c.lBlack
                    }}
                  />
                ) : null}
                {square.piece ? (
                  <div
                    style={{
                      fontSize: "50px",
                      color: square.piece.player === 1 ? c.red : c.black
                    }}
                  >
                    {square.piece.symbol}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
