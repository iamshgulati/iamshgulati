import { Text } from "@radix-ui/themes";

import styles from "./li.module.css";

export const Li = ({ ...props }): React.JSX.Element => (
  <li className={styles.ListItem}>
    <Text {...props} />
  </li>
);
