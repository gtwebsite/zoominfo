import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "./store";
import { Layout } from "./components";

const App = () => {
  return (
    <ChakraProvider>
      <Provider>
        <Layout />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
