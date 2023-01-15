import { Outlet } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import { useTrackedState, useUpdate } from "../store";
import { Form, Header } from "./";

export const Layout = () => {
  const { name } = useTrackedState();
  return (
    <Box>
      {name ? (
        <>
          <Header />
          <Box as="main" py="10">
            <Container maxW="container.md">
              <Outlet />
            </Container>
          </Box>
        </>
      ) : (
        <Box as="main" py="10">
          <Container maxW="container.sm">
            <Form />
          </Container>
        </Box>
      )}
    </Box>
  );
};
