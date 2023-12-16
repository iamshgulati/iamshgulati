import React from "react";
import { Heading } from "@radix-ui/themes";

export const HeroHeading = ({
  variant = "sans",
  ...props
}: React.ComponentPropsWithRef<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  if (variant === "serif") {
    return (
      <Heading
        {...props}
        size={{ initial: "8", xs: "9" }}
        weight="bold"
        style={
          {
            "--heading-font-family": "var(--em-font-family)",
            "--heading-font-size-adjust": "1.1",
            "--heading-letter-spacing": "0em",
            ...props.style,
          } as React.CSSProperties
        }
      />
    );
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      weight="bold"
      style={
        {
          fontWeight: "550",
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-font-size-adjust": "1.1",
          "--heading-letter-spacing": "-0.01em",
          ...props.style,
        } as React.CSSProperties
      }
    />
  );
};

export const PageHeading = ({
  variant = "sans",
  ...props
}: React.ComponentPropsWithRef<typeof Heading> & {
  variant?: "sans" | "serif";
}): React.JSX.Element => {
  if (variant === "serif") {
    return (
      <Heading
        {...props}
        size={{ initial: "8", xs: "9" }}
        weight="bold"
        style={
          {
            "--heading-font-family": "var(--em-font-family)",
            "--heading-font-size-adjust": "1",
            "--heading-letter-spacing": "0em",
            ...props.style,
          } as React.CSSProperties
        }
      />
    );
  }

  return (
    <Heading
      {...props}
      size={{ initial: "8", xs: "9" }}
      weight="bold"
      style={
        {
          fontWeight: "550",
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-font-size-adjust": "1",
          "--heading-letter-spacing": "-0.01em",
          ...props.style,
        } as React.CSSProperties
      }
    />
  );
};
