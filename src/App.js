import React, { useState, useCallback } from "react";

import useClientDimensions from "./hooks/useClientDimensions";
import { fullVS, center, c, fRow } from "./styles";
import { stylizer } from "./utils";
import Game from "./classes/Game";

const App = () => {
  const { vw, vh } = useClientDimensions();
  const [game, setGame] = useState(new Game());
  const [clickedPiece, setClickedPiece] = useState(null);

  const handleClick = useCallback(
    square => {
      // check if a piece has not been clicked upon yet
      if (clickedPiece === null || square.piece !== null) {
        setClickedPiece(square.piece);
      } else {
        // remove piece from original square
        clickedPiece.square.removePiece();
        // let piece know which square it will be placed in
        clickedPiece.changeSquare(square);
        // let square know that piece has moved on to it
        square.setPiece(clickedPiece);
        // remove clickedPiece from state
        setClickedPiece(null);
      }
    },
    [clickedPiece]
  );

  if (vw < 600 || vh < 600) {
    return (
      <div style={stylizer([fullVS, center])}>
        Sorry, App only works on screens larger than 600px wide and 600px high
      </div>
    );
  }

  return (
    <div style={stylizer([fullVS, center, { background: c.gray }])}>
      <div style={stylizer([{ width: "600px", height: "600px" }])}>
        {game.board.map(row => (
          <div
            style={stylizer([
              {
                width: "100%",
                height: "75px"
              },
              fRow
            ])}
          >
            {row.map(square => (
              <div
                onClick={() => handleClick(square)}
                style={stylizer([
                  {
                    width: "75px",
                    height: "75px",
                    background: square.isLight ? c.white : c.blue,
                    cursor: "pointer"
                  },
                  center
                ])}
              >
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
