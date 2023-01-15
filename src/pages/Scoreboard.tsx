import { Box, Heading } from "@chakra-ui/react";
import { BoardTable } from "../components";

const Scoreboard = () => {
  return (
    <Box as="article">
      <Heading as="h2" fontSize="2xl" textAlign="center" mb="6">
        Scoreboard
      </Heading>
      <BoardTable />
    </Box>
  );
};

export default Scoreboard;
