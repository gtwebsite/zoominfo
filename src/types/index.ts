export type UserColor = "white" | "blue" | "red";

export type Player = "white" | "blue" | "red";

export type Status = "stale" | "start" | "progress" | "end";

export type Position = [number, number];

export interface Game {
  dateTimeStarted?: Date | string | number;
  dateTimeEnded?: Date | string | number;
  matrix: Player[][];
  moves: number;
  playing: Player;
  status: Status;
  winner: Player | "draw";
}

export interface State {
  age: number;
  games?: Game[];
  name: string;
}

export interface InitialState {
  moves: number;
  current: UserColor;
  isEnd: boolean;
  matrix: UserColor[][];
  players: number;
  games: number;
}

export type Action =
  | { type: "FILL_MATRIX"; payload: Position }
  | { type: "START" };
