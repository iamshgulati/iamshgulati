import { Link } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import styles from "./a.module.css";

export const A = ({ href = "", ...props }): React.JSX.Element => {
  if (href.startsWith("http")) {
    return (
      <Link
        {...props}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.Link}
      />
    );
  }

  return (
    <NextLink href={href} passHref legacyBehavior>
      <Link {...props} />
    </NextLink>
  );
};
