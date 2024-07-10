import React from "react";
import { Heading } from "@radix-ui/themes";

interface headingStyleProps {
  variant?: "sans" | "serif";
}

const headingStyle = ({
  variant = "sans",
}: headingStyleProps): React.CSSProperties => {
  let style = {
    fontWeight: "700",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    "--heading-letter-spacing": "-0.0em",
  } as React.CSSProperties;

  if (variant === "serif") {
    style = {
      fontWeight: "650",
      "--heading-font-family": "var(--font-serif), var(--em-font-family)",
      "--heading-letter-spacing": "0.01em",
    } as React.CSSProperties;
  }

  return style;
};

export const HeroHeading = ({
  variant = undefined,
  ...props
}: React.ComponentProps<typeof Heading> &
  headingStyleProps): React.JSX.Element => {
  return (
    <Heading
      {...props}
      size={{ initial: "1", xs: "5", sm: "6", md: "8" }}
      style={
        {
          "--heading-font-size-adjust": "3.5",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust) * 0.9)",
          ...headingStyle({ variant }),
        } as React.CSSProperties
      }
    />
  );
};

export const SectionHeading = ({
  variant = "sans",
  ...props
}: React.ComponentProps<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  return (
    <Heading
      {...props}
      size={{ initial: "6", xs: "7", sm: "8" }}
      style={
        {
          "--heading-font-size-adjust": "2.0",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust) * 1.0)",
          ...headingStyle({ variant }),
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
  return (
    <Heading
      {...props}
      size={{ initial: "6", xs: "7", sm: "8" }}
      style={
        {
          "--heading-font-size-adjust": "1.2",
          lineHeight:
            "calc(var(--line-height) * var(--heading-font-size-adjust) * 1.0)",
          ...headingStyle({ variant }),
        } as React.CSSProperties
      }
    />
  );
};
