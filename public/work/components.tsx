import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";

export { Badge, Flex, Text } from "@radix-ui/themes";
export { BadgeWithIndicator } from "~/components/mdx/badge-with-indicator";
export { HStack, VStack } from "~/components/mdx/stacks";

export const CeritificationBadgesGrid = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Grid>): React.JSX.Element => (
  <Grid
    align="center"
    columns={{ initial: "3", xs: "5" }}
    gap="5"
    pt="3"
    {...props}
  />
);

export const ResumeButton = () => (
  <Flex
    direction="row"
    justify="center"
    mt="9"
    style={{
      textAlign: "center",
    }}
  >
    <Button
      asChild
      size="3"
      style={{
        paddingLeft: "var(--space-6)",
        paddingRight: "var(--space-6)",
      }}
    >
      <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
        <ArrowTopRightIcon width="18" height="18" aria-hidden />
        <Text>RESUME</Text>
      </a>
    </Button>
  </Flex>
);