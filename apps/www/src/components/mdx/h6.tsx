import { Heading } from "@radix-ui/themes";

export const H6 = ({
  children,
  ...props
}: React.PropsWithChildren): React.JSX.Element => (
  <Heading asChild size="3" mt="4" mb="1">
    <h6 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      {children}
    </h6>
  </Heading>
);
