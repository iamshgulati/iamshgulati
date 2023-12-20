import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";

export const SiteLogoIcon = ({ style }: React.ComponentProps<typeof Box>) => {
  return (
    <Text
      style={{
        display: "flex",
        fontSize: 54,
        fontFamily: "var(--font-logo)",
        fontStyle: "normal",
        color: "white",
        lineHeight: "20px",
        overflow: "hidden",
        ...style,
      }}
    >
      <span style={{ paddingTop: "2px", paddingBottom: "0px" }}>S</span>
    </Text>
  );
};

export const SiteLogo = ({
  style = undefined,
  ...props
}: React.ComponentProps<typeof SiteLogoIcon>): React.JSX.Element => {
  return (
    <Box>
      <Flex align="center" gap="2">
        <SiteLogoIcon {...props} style={style} />
        <Text size="5" weight="medium">
          {siteConfig.title}
        </Text>
      </Flex>
    </Box>
  );
};
