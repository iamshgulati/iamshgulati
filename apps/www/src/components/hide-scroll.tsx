import { Box } from "@radix-ui/themes";

import { cn } from "~/lib/utils";
import styles from "./hide-scroll.module.css";

export const HideScroll = ({
  className = undefined,
  enabled = true,
  ...props
}: React.ComponentPropsWithoutRef<typeof Box> & {
  enabled?: boolean;
}): React.JSX.Element => (
  <Box
    {...props}
    className={cn(className ?? "", enabled ? styles.HiddenScroll : "")}
  />
);
