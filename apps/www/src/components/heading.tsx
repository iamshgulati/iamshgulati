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
        weight="medium"
        size={{ initial: "8", xs: "9" }}
        {...props}
        style={
          {
            "--heading-font-family": "var(--em-font-family)",
            "--heading-font-size-adjust": "1.2",
            "--heading-letter-spacing": "0em",
            ...props.style,
          } as React.CSSProperties
        }
      />
    );
  }

  return (
    <Heading
      weight="medium"
      size={{ initial: "8", xs: "9" }}
      {...props}
      style={
        {
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-font-size-adjust": "1.2",
          "--heading-letter-spacing": "0em",
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
        weight="medium"
        size={{ initial: "8", xs: "9" }}
        {...props}
        style={
          {
            "--heading-font-family": "var(--em-font-family)",
            "--heading-letter-spacing": "0em",
            ...props.style,
          } as React.CSSProperties
        }
      />
    );
  }

  return (
    <Heading
      weight="medium"
      size={{ initial: "8", xs: "9" }}
      {...props}
      style={
        {
          "--heading-font-family":
            "var(--font-heading), var(--default-font-family)",
          "--heading-letter-spacing": "0em",
          ...props.style,
        } as React.CSSProperties
      }
    />
  );
};
