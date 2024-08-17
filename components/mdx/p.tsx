import { Text } from "@radix-ui/themes";
import type React from "react";

export const P = ({ ...props }): React.JSX.Element => <Text as="p" mb="3" size="3" {...props} />;
