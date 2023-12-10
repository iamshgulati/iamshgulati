import { Heading } from "@radix-ui/themes";

import styles from "./h2.module.css";
import { HeadingLink } from "./heading-link";

export const H2 = ({
  id = "",
  children,
  ...props
}: React.PropsWithChildren<{ id?: string }>): React.JSX.Element => (
  <Heading asChild size="6" mt="7" mb="2" id={id} className={styles.H2}>
    <h2 {...props} style={{ scrollMarginTop: "var(--space-9)" }}>
      <HeadingLink id={id}>{children}</HeadingLink>
    </h2>
  </Heading>
);
