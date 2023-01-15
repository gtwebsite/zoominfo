import { useState } from "react";
import type { SyntheticEvent } from "react";
import {
  Box,
  Input,
  Heading,
  FormControl,
  Text,
  VStack,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import type { Form as FormPros } from "../types";
import { useUpdate } from "../store";

export const Form = (props: BoxProps) => {
  const [form, setForm] = useState<FormPros>({ name: "", age: 0 });

  // Dispatch actions to global state
  const dispatch = useUpdate();

  const handleOnSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    dispatch({ type: "FORM_SUBMIT", payload: form });

    e.preventDefault();
  };

  const handleOnChange = ({
    currentTarget,
  }: SyntheticEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [currentTarget.id]:
        currentTarget.id === "age"
          ? parseInt(currentTarget.value)
          : currentTarget.value,
    }));
  };

  return (
    <Box textAlign="center" {...props}>
      <Heading as="h1" mb="3">
        Connect-4 Game
      </Heading>

      <Text mb="10">Before we can start, please add your nickname and age</Text>

      <form onSubmit={handleOnSubmit}>
        <VStack as="fieldset" spacing="4">
          <FormControl maxW="400">
            <FormLabel htmlFor="name">Nickname</FormLabel>
            <Input
              onChange={handleOnChange}
              id="name"
              value={form.name}
              isRequired
            />
          </FormControl>
          <FormControl maxW="400">
            <FormLabel htmlFor="age">Age</FormLabel>
            <Input
              type="number"
              onChange={handleOnChange}
              id="age"
              maxLength={2}
              max={99}
              value={form.age}
              isRequired
            />
          </FormControl>
          <Button colorScheme="green" type="submit">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
