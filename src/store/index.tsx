import { useReducer } from "react";
import { createContainer } from "react-tracked";
import { checkWinner } from "../utils";
import type { Action, Game, State } from "../types";

// Use to for initial values of the state
const initialState: State = {
  age: 0,
  games: [],
  name: "",
  playing: "white",
};

// Reducer for dispatching actions
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Form submitted
    case "FORM_SUBMIT":
      return {
        ...state,
        ...action.payload,
      };

    // Player make a move
    case "PLAYER_MOVE": {
      // No game, don't proceed
      if (state.games.length <= 0) {
        return state;
      }

      // Get current game
      const gameIndex = state.games.length - 1;
      const game = { ...state.games[gameIndex] };

      // If current game has ended, don't proceed
      if (game.dateTimeEnded) {
        return state;
      }

      // Assign value to the matrix
      game.matrix[action.payload[0]][action.payload[1]] = state.playing;

      // Increase move count
      game["moves"] = state.games[gameIndex].moves + 1;

      // Get winner
      const winner = checkWinner(game.matrix);

      if (winner) {
        // If has winner, fill data
        game["dateTimeEnded"] = new Date();
        game["winner"] = winner;
      } else if (game.moves >= 42) {
        // If draw
        game["dateTimeEnded"] = new Date();
        game["winner"] = "draw";
      }

      // Get all games
      const games = [...state.games];

      // Update current game with new details
      games[gameIndex] = game;

      // Reverse player
      const playing = state.playing === "blue" ? "red" : "blue";

      return {
        ...state,
        playing,
        games,
      };
    }

    // Start a new game
    case "START_GAME": {
      const game: Game = {
        dateTimeStarted: new Date(),
        matrix: Array.from(Array(6), () => Array(7).fill("white")),
        moves: 0,
      };

      // Get random player
      const randomPlayer = Math.random() < 0.5 ? "red" : "blue";

      const playing =
        state.playing === "white" ? randomPlayer : state["playing"];

      return { ...state, games: [...state.games, game], playing };
    }

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
