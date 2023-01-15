/**
 * Run to check the winner from a 4-game board.
 *
 * @param board Player[][], 2d array of 3-color state, white | red | blue
 * @returns Player, either red or blue or null if no winner
 */

import { Player } from "../types";

export const checkWinner = (board: Player[][]) => {
  // check for horizontal win
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        board[i][j] !== "white" &&
        board[i][j] === board[i][j + 1] &&
        board[i][j] === board[i][j + 2] &&
        board[i][j] === board[i][j + 3]
      ) {
        return board[i][j];
      }
    }
  }
  // check for vertical win
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      if (
        board[i][j] !== "white" &&
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 2][j] &&
        board[i][j] === board[i + 3][j]
      ) {
        return board[i][j];
      }
    }
  }
  // check for diagonal win (left to right)
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        board[i][j] !== "white" &&
        board[i][j] === board[i + 1][j + 1] &&
        board[i][j] === board[i + 2][j + 2] &&
        board[i][j] === board[i + 3][j + 3]
      ) {
        return board[i][j];
      }
    }
  }
  // check for diagonal win (right to left)
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 7; j++) {
      if (
        board[i][j] !== "white" &&
        board[i][j] === board[i + 1][j - 1] &&
        board[i][j] === board[i + 2][j - 2] &&
        board[i][j] === board[i + 3][j - 3]
      ) {
        return board[i][j];
      }
    }
  }
  return null;
};
