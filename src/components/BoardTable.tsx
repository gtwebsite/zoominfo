import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import type { TableContainerProps } from "@chakra-ui/react";
import { useTrackedState } from "../store";
import { differenceInSeconds, differenceInMinutes } from "date-fns";

export const BoardTable = (props: TableContainerProps) => {
  // Track data from global state
  const { games } = useTrackedState();

  return (
    <TableContainer {...props}>
      <Table>
        <Thead>
          <Tr>
            <Th>Winner</Th>
            <Th isNumeric>Moves</Th>
            <Th isNumeric>Duration (mm:ss)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {games.map(
            ({ winner, moves, dateTimeStarted, dateTimeEnded }, index) => {
              const durationInMins =
                dateTimeStarted && dateTimeEnded
                  ? differenceInMinutes(dateTimeEnded, dateTimeStarted)
                  : 0;
              const durationInSecs =
                dateTimeStarted && dateTimeEnded
                  ? differenceInSeconds(dateTimeEnded, dateTimeStarted) -
                    durationInMins * 60
                  : 0;

              return (
                <Tr key={`${winner}-${index}`} bgColor={`${winner}.50`}>
                  <Td scope="row">
                    {winner ? (
                      <Text fontWeight="bold" color={`${winner}.500`}>
                        {winner}
                      </Text>
                    ) : (
                      "In progress..."
                    )}
                  </Td>
                  <Td isNumeric>{moves}</Td>
                  <Td isNumeric>
                    {String(durationInMins).padStart(2, "0")}:
                    {String(durationInSecs).padStart(2, "0")}
                  </Td>
                </Tr>
              );
            }
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
