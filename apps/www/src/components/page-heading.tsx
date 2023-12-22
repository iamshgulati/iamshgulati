import React from "react";
import { Heading } from "@radix-ui/themes";

export const HeroHeading = ({
  variant = "sans",
  ...props
}: React.ComponentProps<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  let headingStyle: React.CSSProperties = {
    // fontWeight: "400",
    fontWeight: "550",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    "--heading-font-size-adjust": "1.1",
    // "--heading-letter-spacing": "0.02em",
    "--heading-letter-spacing": "-0.01em",
    ...props.style,
  } as React.CSSProperties;

  if (variant === "serif") {
    headingStyle = {
      fontWeight: "600",
      "--heading-font-family": "var(--font-serif), var(--em-font-family)",
      "--heading-font-size-adjust": "1.2",
      "--heading-letter-spacing": "0.01em",
      ...props.style,
    } as React.CSSProperties;
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      style={{ ...headingStyle }}
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
    // fontWeight: "400",
    fontWeight: "550",
    "--heading-font-family": "var(--font-heading), var(--default-font-family)",
    // "--heading-font-size-adjust": "1.1",
    "--heading-font-size-adjust": "1",
    // "--heading-letter-spacing": "0.02em",
    "--heading-letter-spacing": "-0.01em",
    ...props.style,
  } as React.CSSProperties;

  if (variant === "serif") {
    headingStyles = {
      fontWeight: "600",
      "--heading-font-family": "var(--font-serif), var(--em-font-family)",
      // "--heading-font-size-adjust": "1.2",
      "--heading-font-size-adjust": "1.1",
      "--heading-letter-spacing": "0.01em",
      ...props.style,
    } as React.CSSProperties;
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      style={{ ...headingStyles }}
    />
  );
};
