import React from "react";
import { Heading } from "@radix-ui/themes";

export const HeroHeading = ({
  variant = "sans",
  ...props
}: React.ComponentProps<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  let headingStyle: React.CSSProperties = {
    fontWeight: "650",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    "--heading-letter-spacing": "-0.01em",
    ...props.style,
  } as React.CSSProperties;

  if (variant === "serif") {
    headingStyle = {
      fontWeight: "600",
      "--heading-font-family": "var(--font-serif), var(--em-font-family)",
      "--heading-letter-spacing": "0.01em",
      ...props.style,
    } as React.CSSProperties;
  }

  return (
    <Heading
      {...props}
      size={{ initial: "4", xs: "6", sm: "7", md: "8", lg: "9" }}
      style={
        {
          "--heading-font-size-adjust": "2.5",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust))",
          ...headingStyle,
        } as React.CSSProperties
      }
    />
  );
};

export const PageHeading = ({
  variant = "sans",
  ...props
}: React.ComponentProps<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  let headingStyles: React.CSSProperties = {
    fontWeight: "650",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    "--heading-letter-spacing": "-0.01em",
    ...props.style,
  } as React.CSSProperties;

  if (variant === "serif") {
    headingStyles = {
      fontWeight: "600",
      "--heading-font-family": "var(--font-serif), var(--em-font-family)",
      "--heading-letter-spacing": "0.01em",
      ...props.style,
    } as React.CSSProperties;
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      style={
        {
          "--heading-font-size-adjust": "1.2",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust))",
          ...headingStyles,
        } as React.CSSProperties
      }
    />
  );
};
