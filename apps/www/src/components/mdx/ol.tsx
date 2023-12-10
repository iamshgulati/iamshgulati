import { Flex } from "@radix-ui/themes";

import styles from "./ol.module.css";

export const Ol = ({ ...props }): React.JSX.Element => (
  <Flex asChild direction="column" gap="1" mt="2" mb="3">
    <ol {...props} className={styles.List} />
  </Flex>
);
