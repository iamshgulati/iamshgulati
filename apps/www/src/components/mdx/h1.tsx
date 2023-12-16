import React from "react";
import { Heading } from "@radix-ui/themes";

export const H1 = ({
  children,
  ...props
}: React.PropsWithChildren): React.JSX.Element => (
  <Heading asChild size="8" mb="6">
    <h1 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      {children}
    </h1>
  </Heading>
);
