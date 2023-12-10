import { Text } from "@radix-ui/themes";

export const P = ({ ...props }): React.JSX.Element => (
  <Text {...props} as="p" mb="3" size="3" />
);
