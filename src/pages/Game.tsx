import { Box, Heading } from "@chakra-ui/react";
import { Board, Finish, Status } from "../components";

const Index = () => {
  return (
    <Box as="article">
      <Heading as="h2" fontSize="2xl" textAlign="center" mb="6">
        Game
      </Heading>
      <Status mb="6" />
      <Board />
      <Finish />
    </Box>
  );
};

export default Index;
