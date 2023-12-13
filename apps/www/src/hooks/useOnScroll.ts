import React from "react";

type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

interface UseOnScrollOutput {
  scrollState: ScrollState;
}

export function useOnScroll(scrollDelay = 0): UseOnScrollOutput {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const [previousPosition, setPreviousPosition] = React.useState<number>(0);

  const onScroll = React.useCallback(() => {
    const currentPosition = window.scrollY;

    const isScrolledPastDelay =
      Math.abs(currentPosition - previousPosition) > scrollDelay;

    if (isScrolledPastDelay) {
      const direction =
        previousPosition < currentPosition ? "scrolling-down" : "scrolling-up";
      const state = currentPosition <= scrollDelay ? "at-top" : direction;
      setPreviousPosition(currentPosition);
      setScrollState(state);
    }
  }, [previousPosition, scrollDelay]);

  React.useEffect(() => {
    setPreviousPosition(window.scrollY);
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { scrollState };
}
