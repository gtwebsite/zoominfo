import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Game from "./pages/Game";
import Scoreboard from "./pages/Scoreboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Game />,
      },
      {
        path: "/scoreboard",
        element: <Scoreboard />,
      },
    ],
  },
]);
