"use client";

import React from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

import { useScrollState } from "~/hooks/useScrollState";
import styles from "./floating-scroll-to-top-button.module.css";

type FloatingScrollToTopButtonProps = React.ComponentProps<
  typeof IconButton
> & {
  smoothScroll?: boolean;
  scrollDistanceThreshold?: number;
};

export const FloatingScrollToTopButton = ({
  smoothScroll = false,
  scrollDistanceThreshold = 20,
  ...props
}: FloatingScrollToTopButtonProps): React.JSX.Element => {
  const scrollState = useScrollState({
    scrollDistanceThreshold,
  });
  return (
    <IconButton
      {...props}
      aria-label="Scroll To Top"
      size="3"
      variant="soft"
      color="gray"
      radius="full"
      className={styles.ScrollToTopButton}
      onClick={() => scrollToTop({ smoothScroll })}
      data-scroll-state={scrollState}
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
