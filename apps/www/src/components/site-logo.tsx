import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

export const SiteLogoIcon = ({
  style,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Text>, "as">) => {
  return (
    <Text
      {...props}
      size="9"
      style={{
        display: "flex",
        fontFamily: "var(--font-logo)",
        fontStyle: "normal",
        lineHeight: "1.625rem",
        overflow: "hidden",
        ...style,
      }}
    >
      <span style={{ paddingTop: "0.125rem", paddingBottom: "0rem" }}>S</span>
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
        {/* <Text {...props} size="4" weight="medium">
          {siteConfig.title}
        </Text> */}
      </Flex>
    </Box>
  );
};
