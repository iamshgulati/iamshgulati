"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Box, IconButton } from "@radix-ui/themes";

import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-back-button.module.css";

type FloatingFloatingBackButtonProps = React.ComponentPropsWithoutRef<
  typeof IconButton
> & {
  scrollTopThreshold?: number;
};

export const FloatingBackButton = ({
  scrollTopThreshold = 20,
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
        aria-label="Navigate Back"
        size="4"
        variant="surface"
        color="gray"
        radius="full"
        onClick={() => router.back()}
        {...props}
      >
        <ChevronLeftIcon width="20" height="20" />
      </IconButton>
    </Box>
  );
};
