import { Box } from "@radix-ui/themes";

import { cn } from "~/lib/utils";
import styles from "./hidden-scroll.module.css";

export const HiddenScroll = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => (
  <Box {...props} className={cn(className ?? "", styles.HiddenScroll)} />
);
