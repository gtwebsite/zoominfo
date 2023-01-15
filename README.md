# Zoominfo Connect-4 Game

## Summary

Build a connect-4 game

The rules of the game are:

- Players must connect 4 of the same colored discs in a row to win. This can be done horizontally, vertically or diagonally.

- Only one piece is played at a time.

- Players can be on the offensive or defensive.

- The game ends when there is a 4-in-a-row or a stalemate when all forty two slots are filled.

- The starter of the previous game goes second in the next game.

- The board has 42 windows distributed in 6 rows and 7 columns.

Build a 'create user form' with the fields: Nickname, age. The form will appear in the beginning before the game is played and in case we already have users we will not see the form again (users were already created and saved).

The game will start with a random player.

At the end of the game we will see a popup with the winners name and and two buttons: 'Start a new game' and 'Go to the scoreboard' where we will be able to see the scores of the games. The score is a counter of how many moves did it take to finish the game.

On the scoreboard we will see the list of playing games with the fields: Winner, counter of moves and duration of the game in minutes and seconds.

## Requirement

- Node 16.x.x
- Yarn 1.2.x

## Tech Stack

- React
- Vite

## Usage

1. Run `yarn` to install dependencies
1. Run `yarn dev` to run the in dev mode
1. Visit URL is `http://127.0.0.1:5173/`
