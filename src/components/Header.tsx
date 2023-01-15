import { Link as RouteLink } from "react-router-dom";
import { Box, Container, Heading, Link, HStack } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";

export const Header = (props: BoxProps) => {
  return (
    <Box as="header" py="10" bgColor="gray.100" {...props}>
      <Container maxW="container.md" textAlign="center">
        <Heading as="h1" mb="6">
          Connect-4 Game
        </Heading>

        <HStack as="nav" fontSize="xl" spacing="10" justifyContent="center">
          <Link as={RouteLink} to="/" color="teal">
            Game
          </Link>
          <Link as={RouteLink} to="/scoreboard" color="teal">
            Leaderboard
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};
