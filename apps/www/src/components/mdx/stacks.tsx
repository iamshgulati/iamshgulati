import React from "react";
import { Flex } from "@radix-ui/themes";

export const VStack = ({
  children = undefined,
  ...props
}: React.ComponentProps<typeof Flex>): React.JSX.Element => {
  return (
    <Flex {...props} direction="column" wrap="wrap" gap="3" mt="4" mb="4">
      {children}
    </Flex>
  );
};

export const HStack = ({
  children = undefined,
  ...props
}: React.ComponentProps<typeof Flex>): React.JSX.Element => (
  <Flex {...props} direction="row" wrap="wrap" gap="3">
    {children}
  </Flex>
);
