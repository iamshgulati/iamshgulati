"use client";

import React from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-scroll-to-top-button.module.css";

type FloatingScrollToTopButtonProps = React.ComponentProps<
  typeof IconButton
> & {
  scrollTopThreshold?: number;
  smoothScroll?: boolean;
};

export const FloatingScrollToTopButton = ({
  scrollTopThreshold = 20,
  smoothScroll = false,
  ...props
}: FloatingScrollToTopButtonProps): React.JSX.Element => {
  const scrolled = useScrollState({
    scrollTopThreshold,
  }).scrolled;
  return (
    <IconButton
      {...props}
      data-scrolled-state={`${scrolled}`}
      aria-label="Scroll To Top"
      size="3"
      variant="soft"
      color="gray"
      radius="full"
      className={styles.FloatingScrollToTopButton}
      onClick={() => scrollToTop({ smoothScroll })}
    >
      <ChevronUpIcon width="20" height="20" />
    </IconButton>
  );
};

function scrollToTop({ smoothScroll = false }) {
  if (smoothScroll) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}
