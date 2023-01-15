import { Outlet } from "react-router-dom";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import { Header } from "./components";
import { Provider } from "./store";

const App = () => {
  return (
    <ChakraProvider>
      <Provider>
        <Header />
        <Box as="main" py="10">
          <Container maxW="container.md">
            <Outlet />
          </Container>
        </Box>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
