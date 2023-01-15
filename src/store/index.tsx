import { useReducer } from "react";
import { createContainer } from "react-tracked";
import { checkWinner } from "../utils";
import type { Action, InitialState } from "../types";

// Use to for initial values of the state
const initialState: InitialState = {
  moves: 0,
  current: "white",
  isEnd: false,
  matrix: Array.from(Array(6), () => Array(7).fill("white")),
  players: 0,
  games: 0,
};

// Reducer for  dispatch
const reducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case "FILL_MATRIX": {
      if (state.players === 0) {
        return state;
      }

      const matrix = state.matrix;
      matrix[action.payload[0]][action.payload[1]] = state.current;

      const winner = checkWinner(state.matrix);

      if (winner) {
        return {
          ...state,
          moves: state.moves + 1,
          isEnd: true,
          matrix,
        };
      }

      return {
        ...state,
        current: state.current === "blue" ? "red" : "blue",
        moves: state.moves + 1,
        isEnd: false,
        matrix,
      };
    }
    case "START":
      return {
        ...initialState,
        players: state.players + 1,
        current:
          state.current === "white"
            ? Math.random() < 0.5
              ? "red"
              : "blue"
            : state.current === "blue"
            ? "red"
            : "blue",
        matrix: Array.from(Array(6), () => Array(7).fill("white")),
      };
    default:
      return state;
  }
};

// Create global state using react-track
const createContext = () => {
  const { Provider, useTracked, useTrackedState, useUpdate } = createContainer(
    () => useReducer(reducer, initialState)
  );

  return { Provider, useTracked, useTrackedState, useUpdate };
};

// Export state and dispatch
export const { Provider, useTracked, useTrackedState, useUpdate } =
  createContext();
