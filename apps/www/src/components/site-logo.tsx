import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { Icons } from "./icons";

export const SiteLogoIcon = ({
  ...props
}: React.ComponentProps<Icon>): React.JSX.Element => {
  return (
    <Flex asChild align="center">
      <Icons.SiteLogoIcon width="22" height="22" {...props} />
    </Flex>
  );
};

export const SiteLogo = ({
  style = undefined,
  ...props
}: React.ComponentProps<Icon>): React.JSX.Element => {
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
};
