import { Heading } from "@radix-ui/themes";

import { LinkHeading } from "./link-heading";

export const H3 = ({
  id,
  children,
  ...props
}: React.PropsWithChildren<{ id?: string }>): React.JSX.Element => (
  <Heading asChild size="5" mt="7" mb="2">
    <h3 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      <LinkHeading id={id}>{children}</LinkHeading>
    </h3>
  </Heading>
);
