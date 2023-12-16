import React from "react";
import { Heading } from "@radix-ui/themes";

export const H5 = ({
  children,
  ...props
}: React.PropsWithChildren): React.JSX.Element => (
  <Heading asChild size="4" mt="6" mb="3">
    <h5 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      {children}
    </h5>
  </Heading>
);
