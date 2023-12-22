"use client";

import React from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

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
  const [scrollState, setScrollState] = React.useState<string>("at-top");

  React.useEffect(() => {
    const onScroll = () => {
      setScrollState(
        document.documentElement.scrollTop >= scrollTopThreshold
          ? "scrolling"
          : "at-top",
      );
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [scrollTopThreshold]);

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
