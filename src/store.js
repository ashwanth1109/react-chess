import React, { createContext, useReducer } from "react";
import * as atypes from "./actionTypes";

const Store = createContext();

const combineReducers = reducers => (state, action) => {
  let hasChanged;
  const nextState = Object.keys(reducers).reduce((result, key) => {
    result[key] = reducers[key](state[key], action);
    hasChanged = hasChanged || result[key] !== state[key];
    return result;
  }, {});
  return hasChanged ? nextState : state;
};

const initialState = {
  clicked: null,
  p1Turn: true
};

const clickedReducer = (state, { type, payload }) => {
  switch (type) {
    case atypes.SET_CLICKED_PIECE:
      return payload;
    case atypes.REMOVE_CLICKED_PIECE:
      return null;
    default:
      return state;
  }
};

const p1TurnReducer = (state, { type }) => {
  switch (type) {
    case atypes.CHANGE_PLAYER_TURN:
      return !state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  clicked: clickedReducer,
  p1Turn: p1TurnReducer
});

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default Store;
