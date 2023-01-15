import { Link } from "react-router-dom";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Heading,
} from "@chakra-ui/react";
import type { ModalProps } from "@chakra-ui/react";
import { useTrackedState, useUpdate } from "../store";

export const Finish = (
  props: Omit<ModalProps, "children" | "isOpen" | "onClose">
) => {
  // Track data from global state
  const { games } = useTrackedState();

  // Dispatch actions to global state
  const dispatch = useUpdate();

  // Get current game
  const game = games[games.length - 1];

  // Handle restart button
  const handleRestart = () => {
    // Run dispatch to start new game
    dispatch({ type: "START_GAME" });
  };

  const handleSeeScorboard = () => {};

  if (!game) {
    return null;
  }

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={!!game.dateTimeEnded}
      onClose={handleRestart}
      isCentered
      {...props}
    >
      <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
      <ModalContent>
        <ModalBody textAlign="center" p="10">
          <Heading as="h3" mb="4">
            We have a winner
          </Heading>
          <Text>
            Congratulations to{" "}
            <Text as="strong" color={`${game.winner}.500`}>
              {game.winner}
            </Text>
          </Text>
        </ModalBody>

        <ModalFooter justifyContent="center" p="10">
          <Button colorScheme="green" mr={3} onClick={handleRestart}>
            Start a new game
          </Button>
          <Button
            colorScheme="green"
            variant="outline"
            onClick={handleSeeScorboard}
            as={Link}
            to="/scoreboard"
          >
            Go to the scoreboard
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
