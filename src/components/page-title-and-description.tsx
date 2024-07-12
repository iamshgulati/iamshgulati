import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

interface PageTitleAndDescriptionProps {
  title: string;
  description?: string;
}
export const PageTitleAndDescription = ({
  title,
  description = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box> &
  PageTitleAndDescriptionProps): React.JSX.Element => (
  <Box {...props} my="6">
    <Heading
      as="h1"
      size={{ initial: "6", sm: "8" }}
      mb="2"
      style={
        {
          fontWeight: "700",
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-letter-spacing": "-0.02em",
          "--heading-font-size-adjust": "1.5",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust) * 0.9)",
        } as React.CSSProperties
      }
    >
      {title}
    </Heading>
    {description && (
      <Text as="p" size={{ initial: "3", sm: "5" }} color="gray">
        {description}
      </Text>
    )}
  </Box>
);
