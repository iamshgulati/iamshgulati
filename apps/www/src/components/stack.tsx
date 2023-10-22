import { Flex } from "@radix-ui/themes";

export function VStack({
  gap = "3",
  children = null,
}: React.ComponentPropsWithoutRef<typeof Flex>): React.JSX.Element {
  return (
    <Flex direction="column" wrap="wrap" gap={gap} mt="4">
      {children}
    </Flex>
  );
}

export function HStack({
  gap = "3",
  children = null,
}: React.ComponentPropsWithoutRef<typeof Flex>): React.JSX.Element {
  return (
    <Flex direction="row" wrap="wrap" gap={gap}>
      {children}
    </Flex>
  );
}
