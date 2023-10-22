import { Heading } from "@radix-ui/themes";

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
            "--heading-font-family": "var(--tw-serif-font-family)",
            "--heading-font-size-adjust": "1.2",
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
          "--heading-font-family": "var(--tw-sans-font-family)",
          "--heading-font-size-adjust": "1.15",
          ...props.style,
        } as React.CSSProperties
      }
    />
  );
};
