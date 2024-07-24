import React from "react";
import { Text } from "@radix-ui/themes";

export const P = ({ ...props }): React.JSX.Element => (
  <Text as="p" mb="3" size="3" {...props} />
);
