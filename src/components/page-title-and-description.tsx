import React from "react";
import { Box, Heading, Text } from "@radix-ui/themes";

interface SectionTitleAndDescriptionProps {
  title: string;
  description?: string;
}
export const SectionTitleAndDescription = ({
  title,
  description = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box> &
  SectionTitleAndDescriptionProps): React.JSX.Element => (
  <Box {...props}>
    <Heading
      as="h1"
      size={{ initial: "7", sm: "8" }}
      mb="2"
      style={
        {
          fontWeight: "600",
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-letter-spacing": "-0.02em",
          "--heading-font-size-adjust": "1.8",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust))",
        } as React.CSSProperties
      }
    >
      {title}
    </Heading>
    {description && (
      <Text as="p" size={{ initial: "4", xs: "5", sm: "6" }} color="gray">
        {description}
      </Text>
    )}
  </Box>
);

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
  <Box {...props}>
    <Heading
      as="h1"
      size={{ initial: "7", sm: "8" }}
      mb="2"
      style={
        {
          fontWeight: "700",
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-letter-spacing": "-0.00em",
          "--heading-font-size-adjust": "1.2",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust))",
        } as React.CSSProperties
      }
    >
      {title}
    </Heading>
    {description && (
      <Text as="p" size="4" color="gray">
        {description}
      </Text>
    )}
  </Box>
);
