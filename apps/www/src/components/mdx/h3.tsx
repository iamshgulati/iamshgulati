import { Heading } from "@radix-ui/themes";

import { HeadingLink } from "./heading-link";

export const H3 = ({
  id,
  children,
  ...props
}: React.PropsWithChildren<{ id?: string }>): React.JSX.Element => (
  <Heading asChild size="5" mt="7" mb="2" id={id}>
    <h3 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      <HeadingLink id={id}>{children}</HeadingLink>
    </h3>
  </Heading>
);
