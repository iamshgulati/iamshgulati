import { Box, Flex } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { Icons } from "./icons";

export function SiteLogoIcon({
  ...props
}: React.ComponentProps<Icon>): React.JSX.Element {
  return (
    <Flex asChild align="center">
      <Icons.SiteLogoIcon width="22" height="22" {...props} />
    </Flex>
  );
}

export function SiteLogo({
  style,
  ...props
}: React.ComponentProps<Icon>): React.JSX.Element {
  return (
    <Box style={style}>
      <Flex align="center" gap="1">
        <Icons.SiteLogoIcon width="22" height="22" {...props} />
        {/* <Text size="4" weight="medium">
          {siteConfig.name}
        </Text> */}
      </Flex>
    </Box>
  );
}
