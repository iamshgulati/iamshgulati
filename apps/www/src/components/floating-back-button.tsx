"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Box, IconButton } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-back-button.module.css";

type FloatingFloatingBackButtonProps = React.ComponentProps<
  typeof IconButton
> & {
  scrollTopThreshold?: number;
  iconProps?: React.ComponentProps<Icon>;
};

export const FloatingBackButton = ({
  scrollTopThreshold = 20,
  iconProps = { width: "20", height: "20" },
  ...props
}: FloatingFloatingBackButtonProps): React.JSX.Element => {
  const scrolled = useScrollState({ scrollTopThreshold }).scrolled;
  const router = useRouter();
  return (
    <Box
      data-scrolled-state={`${scrolled}`}
      className={styles.FloatingBackButtonContainer}
    >
      <IconButton
        {...props}
        aria-label="Navigate Back"
        size="4"
        highContrast
        radius="full"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon {...iconProps} />
      </IconButton>
    </Box>
  );
};
