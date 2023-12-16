import React from "react";
import { Heading } from "@radix-ui/themes";

export const HeroHeading = ({
  variant = "sans",
  ...props
}: React.ComponentPropsWithoutRef<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  let headingStyle: React.CSSProperties = {
    fontWeight: "550",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    "--heading-font-size-adjust": "1.1",
    "--heading-letter-spacing": "-0.01em",
    ...props.style,
  } as React.CSSProperties;

  if (variant === "serif") {
    headingStyle = {
      "--heading-font-family": "var(--em-font-family)",
      "--heading-font-size-adjust": "1.1",
      "--heading-letter-spacing": "0em",
      ...props.style,
    } as React.CSSProperties;
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      weight="bold"
      style={{ ...headingStyle }}
    />
  );
};

export const PageHeading = ({
  variant = "sans",
  ...props
}: React.ComponentPropsWithoutRef<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  let headingStyles: React.CSSProperties = {
    fontWeight: "550",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    "--heading-font-size-adjust": "1",
    "--heading-letter-spacing": "-0.01em",
    ...props.style,
  } as React.CSSProperties;

  if (variant === "serif") {
    headingStyles = {
      "--heading-font-family": "var(--em-font-family)",
      "--heading-font-size-adjust": "1",
      "--heading-letter-spacing": "0em",
      ...props.style,
    } as React.CSSProperties;
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      weight="bold"
      style={{ ...headingStyles }}
    />
  );
};
