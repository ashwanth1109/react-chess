import React, { useState } from "react";
import useClientDimensions from "react-client-dimensions";
import { NoAppContainer, AppContainer } from "./styles";
import Game from "./classes/Game";
import Board from "./components/Board";
import { StoreProvider } from "./store";

const App = () => {
  const { vw, vh } = useClientDimensions();
  const [game, setGame] = useState(new Game());

  if (vw < 800 || vh < 600) {
    return (
      <NoAppContainer>
        Sorry, App only works on screens larger than 800px wide and 600px high
      </NoAppContainer>
    );
  }

  return (
    <AppContainer>
      <StoreProvider>
        <Board board={game.board} />
      </StoreProvider>
    </AppContainer>
  );
};

export default App;
