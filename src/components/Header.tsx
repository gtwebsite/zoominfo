import { Link } from "react-router-dom";
import { Box, Container, Heading, HStack, Button } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export const Header = (props: BoxProps) => {
  return (
    <Box as="header" py="10" bgColor="gray.900" color="white" {...props}>
      <Container maxW="container.md" textAlign="center">
        <Heading as="h1" mb="2">
          Connect-4 Game
        </Heading>

        <HStack as="nav" fontSize="xl" spacing="4" justifyContent="center">
          <Button as={Link} to="/" colorScheme="green" variant="ghost">
            Game
          </Button>
          <Button
            as={Link}
            to="/scoreboard"
            colorScheme="green"
            variant="ghost"
          >
            Scoreboard
          </Button>
        </HStack>
      </Container>
    </Box>
  );
};
