import React, { useState, useCallback } from "react";
import useClientDimensions from "react-client-dimensions";
import {
  NoAppContainer,
  GameRow,
  Highlight,
  GameBoard,
  AppContainer,
  GameSquare,
  GamePiece
} from "./styles";
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
      // piece hasn't been selected yet
      const noPiece = clickedPiece === null;
      // or player changes his mind about piece s/he wants to move
      const ownPiece =
        square.piece !== null && square.piece.player === (player1Turn ? 1 : 2);

      // if noPiece or ownPiece, then select piece
      if (noPiece || ownPiece)
        selectPiece(player1Turn, square, setClickedPiece);
      else movePiece(clickedPiece, square, setClickedPiece, setPlayer1Turn); // else check if move is possible
    },
    [clickedPiece, player1Turn]
  );

  if (vw < 800 || vh < 600) {
    return (
      <NoAppContainer>
        Sorry, App only works on screens larger than 800px wide and 600px high
      </NoAppContainer>
    );
  }

  return (
    <AppContainer>
      <GameBoard>
        {game.board.map((row, id) => (
          <GameRow key={id}>
            {row.map((square, id) => (
              <GameSquare
                key={id}
                onClick={() => handleClick(square)}
                isLight={square.isLight}
              >
                {clickedPiece !== null && clickedPiece === square.piece ? (
                  <Highlight player1={square.piece.player === 1} />
                ) : null}
                {square.piece ? (
                  <GamePiece player1={square.piece.player === 1}>
                    {square.piece.symbol}
                  </GamePiece>
                ) : null}
              </GameSquare>
            ))}
          </GameRow>
        ))}
      </GameBoard>
    </AppContainer>
  );
};

export default App;
