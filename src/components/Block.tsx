import { Center, Circle } from "@chakra-ui/react";
import type { CenterProps } from "@chakra-ui/react";
import type { Player } from "../types";

export interface BlockProps extends CenterProps {
  player: Player;
}

export const Block = ({ player = "white", children, ...props }: BlockProps) => {
  return (
    <Center
      bgColor="gray.100"
      width="14.28%"
      height="100px"
      cursor="pointer"
      {...props}
    >
      <Circle
        bgColor={player === "white" ? "white" : `${player}.500`}
        size="80px"
      >
        {children}
      </Circle>
    </Center>
  );
};
