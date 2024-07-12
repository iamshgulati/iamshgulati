import React from "react";
import { Flex } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { Icons } from "./icons";

export const SiteLogoIcon = ({
  ...props
}: React.ComponentProps<Icon>): React.JSX.Element => {
  return (
    <Flex asChild align="center">
      <Icons.CommandIcon width="22" height="22" {...props} />
    </Flex>
  );
};

export const SiteLogo = ({
  style = undefined,
  ...props
}: React.ComponentProps<typeof SiteLogoIcon>): React.JSX.Element => {
  return (
    <Flex align="center" gap="2">
      <SiteLogoIcon style={style} {...props} />
      {/* <Text size="4" weight="medium" {...props}>
        {siteConfig.title}
      </Text> */}
    </Flex>
  );
};
