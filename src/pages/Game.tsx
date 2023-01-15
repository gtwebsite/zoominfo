import { Box, Heading } from "@chakra-ui/react";
import { Board } from "../components";

const Index = () => {
  return (
    <Box as="article">
      <Heading as="h2" fontSize="2xl" textAlign="center" mb="6">
        Game
      </Heading>
      <Board />
    </Box>
  );
};

export default Index;
