import { useEffect, useRef } from "react";
import { HStack, Box, Button, Text, VisuallyHidden } from "@chakra-ui/react";
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
  const { current, isEnd, matrix, players } = useTrackedState();

  // Dispatch some actions for global state
  const dispatch = useUpdate();

  // Handle on select each block
  const handleOnSelect = (pos: Position) => {
    // Push up when needed for parent
    onSelect && onSelect(pos);

    // Run dispatch to fill the matrix
    dispatch({ type: "FILL_MATRIX", payload: pos });
  };

  // Handle restart button
  const handleRestart = () => {
    // Run dispatch to start new game
    dispatch({ type: "START" });
  };

  return (
    <>
      <Box spacing="0" ref={boardRef} {...props}>
        {matrix.map((row, rowIndex) => (
          <HStack wrap="wrap" spacing="0" key={`row-${rowIndex}`}>
            {row.map((col, colIndex) => (
              <Block
                key={`block-${rowIndex}-${colIndex}`}
                user={col || "white"}
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
      <Box mt="4" textAlign="center">
        {players > 0 ? (
          <>
            <Text mb="4">
              {isEnd ? "Winner is " : "Current player is "}
              <Text as="strong" color={current}>
                {current}
              </Text>
            </Text>
            {isEnd && <Button onClick={handleRestart}>Restart</Button>}
          </>
        ) : (
          <Button onClick={handleRestart}>Start the game</Button>
        )}
      </Box>
    </>
  );
};
