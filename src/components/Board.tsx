import { useEffect, useRef } from "react";
import { HStack, Box, VisuallyHidden } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { useTrackedState, useUpdate } from "../store";
import { Block } from "./Block";
import type { Position } from "../types";

export interface BoardProps extends Omit<BoxProps, "onSelect"> {
  onSelect?: (pos: Position) => void;
}

export const Board = ({ onSelect, ...props }: BoardProps) => {
  // Get ref to disable the board's right click context menu
  const boardRef = useRef<HTMLDivElement | null>(null);

  // Run to disable context menu
  useEffect(() => {
    if (!boardRef.current) return;

    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    boardRef.current.addEventListener("contextmenu", handleContextmenu);

    // Clean up when unmounted
    return () => {
      if (!boardRef.current) return;
      boardRef.current.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  // Track data from global state
  const { games, playing } = useTrackedState();

  // Dispatch actions to global state
  const dispatch = useUpdate();

  // Get current game
  const game = games[games.length - 1];

  // Generate matrix if not available
  const matrix =
    game?.matrix || Array.from(Array(6), () => Array(7).fill("white"));

  console.log(matrix);

  // Handle on select each block
  const handleOnSelect = (pos: Position) => {
    // Push up when needed for parent
    onSelect && onSelect(pos);

    // Run dispatch to fill the matrix
    dispatch({ type: "PLAYER_MOVE", payload: pos });
  };

  return (
    <Box spacing="0" ref={boardRef} {...props}>
      {matrix.map((row, rowIndex) => (
        <HStack wrap="wrap" spacing="0" key={`row-${rowIndex}`}>
          {row.map((col, colIndex) => (
            <Block
              key={`block-${rowIndex}-${colIndex}`}
              player={col}
              onClick={() => {
                col === "white" && handleOnSelect([rowIndex, colIndex]);
              }}
            >
              <VisuallyHidden>{col}</VisuallyHidden>
            </Block>
          ))}
        </HStack>
      ))}
    </Box>
  );
};
