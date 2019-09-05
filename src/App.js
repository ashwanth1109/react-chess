import React, { useState } from "react";

import useClientDimensions from "./hooks/useClientDimensions";
import { fullVS, center, testBG, c, fRow } from "./styles";
import { stylizer } from "./utils";
import Game from "./classes/Game";

const App = () => {
  const { vw, vh } = useClientDimensions();
  const [game, setGame] = useState(new Game());

  console.log(game);

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
                style={stylizer([
                  {
                    width: "75px",
                    height: "75px",
                    background: square.isLight ? c.white : c.blue
                  },
                  center
                ])}
              >
                {square.hasPiece ? (
                  <div
                    style={{
                      fontSize: "50px",
                      color: square.hasPiece.player === 1 ? c.red : c.black
                    }}
                  >
                    {square.hasPiece.symbol}
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
