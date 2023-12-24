"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-back-button.module.css";

type FloatingFloatingBackButtonProps = React.ComponentProps<
  typeof IconButton
> & {
  scrollTopThreshold?: number;
};

export const FloatingBackButton = ({
  scrollTopThreshold = 20,
}: FloatingFloatingBackButtonProps): React.JSX.Element => {
  const scrolled = useScrollState({ scrollTopThreshold }).scrolled;
  const router = useRouter();
  return (
    <IconButton
      data-scrolled-state={`${scrolled}`}
      aria-label="Navigate Back"
      size="4"
      variant="surface"
      color="gray"
      radius="full"
      className={styles.FloatingBackButton}
      onClick={() => router.back()}
    >
      <ChevronLeftIcon width="20" height="20" />
    </IconButton>
  );
};
