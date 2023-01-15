import { Box, Button, Text, HStack } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { useTrackedState, useUpdate } from "../store";

export const Status = (props: BoxProps) => {
  // Track data from global state
  const { games, playing } = useTrackedState();

  // Dispatch actions to global state
  const dispatch = useUpdate();

  // Get current game
  const game = games[games.length - 1];

  // Handle restart button
  const handleRestart = () => {
    // Run dispatch to start new game
    dispatch({ type: "START_GAME" });
  };

  return (
    <Box textAlign="center" minHeight="40px" {...props}>
      {games.length <= 0 || !game ? (
        <Button colorScheme="green" onClick={handleRestart}>
          Start the game
        </Button>
      ) : (
        <>
          <HStack as="p" justifyContent="center" minHeight="40px">
            {game.dateTimeEnded ? (
              <>
                <Text as="span">Winner is</Text>{" "}
                <Text as="strong" color={`${game.winner}.500`}>
                  {game.winner}
                </Text>
              </>
            ) : (
              <>
                <Text as="span">Current player is</Text>{" "}
                <Text as="strong" color={`${playing}.500`}>
                  {playing}
                </Text>
              </>
            )}

            {game.dateTimeEnded && (
              <Button colorScheme="green" onClick={handleRestart} ml="4">
                Start new game
              </Button>
            )}
          </HStack>
        </>
      )}
    </Box>
  );
};
