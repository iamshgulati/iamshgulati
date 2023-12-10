import React from "react";
import { Button } from "@radix-ui/themes";

import { cn } from "~/lib/utils";
import styles from "./dynamic-island.module.css";

export const DynamicIsland = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button>): React.JSX.Element => (
  <Button
    variant="soft"
    radius="full"
    size="1"
    className={cn(className, styles.DynamicIsland)}
    {...props}
  />
);
