export type UserColor = "white" | "blue" | "red";

export type Player = "white" | "blue" | "red";

export type Status = "progress" | "end";

export type Position = [number, number];

export interface Game {
  dateTimeStarted?: Date;
  dateTimeEnded?: Date;
  matrix: Player[][];
  moves: number;
  winner?: Player | "draw";
}

export interface Form {
  age: number;
  name: string;
}

export type State = Form & {
  games: Game[];
  playing: Player;
};

export interface InitialState {
  moves: number;
  current: UserColor;
  isEnd: boolean;
  matrix: UserColor[][];
  players: number;
  games: number;
}

export type Action =
  | { type: "FORM_SUBMIT"; payload: Form }
  | { type: "PLAYER_MOVE"; payload: Position }
  | { type: "START_GAME" };
