import { Center, Circle } from "@chakra-ui/react";
import type { CenterProps } from "@chakra-ui/react";
import type { UserColor } from "../types";

export interface BlockProps extends CenterProps {
  user: UserColor;
}

export const Block = ({ user = "white", children, ...props }: BlockProps) => {
  return (
    <Center
      bgColor="gray.100"
      width="14.28%"
      height="100px"
      cursor="pointer"
      {...props}
    >
      <Circle bgColor={user} size="80px">
        {children}
      </Circle>
    </Center>
  );
};
