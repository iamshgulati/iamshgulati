import { Heading } from "@radix-ui/themes";

export const H4 = ({
  children,
  ...props
}: React.PropsWithChildren): React.JSX.Element => (
  <Heading asChild size="4" mt="6" mb="3">
    <h4 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      {children}
    </h4>
  </Heading>
);
