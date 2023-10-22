import { Box } from "@radix-ui/themes";

import styles from "./hidden-scroll.module.css";

export const HiddenScroll = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => (
  <Box
    className={`${className ? `${className} ` : ""}${styles.HiddenScroll}`}
    {...props}
  />
);
