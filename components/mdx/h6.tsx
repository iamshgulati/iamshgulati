import React from "react";
import { Heading } from "@radix-ui/themes";

export const H6 = ({
  children = undefined,
  ...props
}: React.PropsWithChildren): React.JSX.Element => (
  <Heading asChild size="3" mt="4" mb="1">
    <h6 style={{ scrollMarginTop: "var(--space-9)" }} {...props}>
      {children}
    </h6>
  </Heading>
);
