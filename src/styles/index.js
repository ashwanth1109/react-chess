import styled from "styled-components";

import { fullVS, center, fRow, c } from "./common";

const container = `${fullVS} ${center}`;

export const NoAppContainer = styled.div`
  ${container}
`;

export const AppContainer = styled.div`
  ${container} 
  background: ${c.gray};
`;

export const GameBoard = styled.div`
  width: 600px;
  height: 600px;
`;

export const GameRow = styled.div`
  ${fRow}
  width: 100%;
  height: 75px;
`;

export const GameSquare = styled.div`
  ${center}
  width: 75px;
  height: 75px;
  cursor: pointer;
  position: relative;
  background: ${props => (props.isLight ? c.white : c.blue)};
`;

export const Highlight = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${props => (props.player1 ? c.lRed : c.lBlack)};
`;

export const GamePiece = styled.div`
  font-size: 50px;
  color: ${props => (props.player1 ? c.red : c.black)};
`;
