import React from "react";
import { Heading } from "@radix-ui/themes";

import { LinkHeading } from "../link-heading";
import styles from "./h2.module.css";

export const H2 = ({
  id = "",
  children,
  ...props
}: React.PropsWithChildren<{ id?: string }>): React.JSX.Element => (
  <Heading asChild size="6" mt="7" mb="2" className={styles.H2}>
    <h2 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      <LinkHeading id={id}>{children}</LinkHeading>
    </h2>
  </Heading>
);
