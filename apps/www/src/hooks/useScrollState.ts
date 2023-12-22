import React from "react";
import { usePathname } from "next/navigation";

type ScrollState = "at-top" | "scrolling-down" | "scrolling-up";

interface ScrollStateProps {
  viewportScrollFactorThreshold?: number;
  scrollDistanceThreshold?: number;
}

/**
 * Custom React hook to track the scroll state.
 * @param {ScrollStateProps} props - Configuration options for scroll state behavior.
 * @param {number} [props.viewportScrollFactorThreshold = 1] - Minimum height of the document as a factor of the viewport height.
 * @param {number} [props.scrollDistanceThreshold = 20] - The distance in pixels scrolled before considering a change in scroll direction.
 * @returns {ScrollState} Returns the current scroll state: 'at-top', 'scrolling-up', or 'scrolling-down'.
 */
export function useScrollState({
  viewportScrollFactorThreshold = 1,
  scrollDistanceThreshold = 20,
}: ScrollStateProps): ScrollState {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const [previousScrollPosition, setPreviousScrollPosition] =
    React.useState<number>(0);
  const pathname = usePathname();

  const onScroll = React.useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;

    const viewportScrollFactor = totalHeight / viewportHeight;

    if (viewportScrollFactor >= viewportScrollFactorThreshold) {
      const currentScrollPosition = window.scrollY;

      const hasScrolledPastThreshold =
        Math.abs(currentScrollPosition - previousScrollPosition) >
        scrollDistanceThreshold;

      if (hasScrolledPastThreshold) {
        const scrollDirection =
          previousScrollPosition < currentScrollPosition
            ? "scrolling-down"
            : "scrolling-up";
        const newScrollState =
          currentScrollPosition <= scrollDistanceThreshold
            ? "at-top"
            : scrollDirection;
        setPreviousScrollPosition(currentScrollPosition);
        setScrollState(newScrollState);
      }
    }
  }, [
    previousScrollPosition,
    scrollDistanceThreshold,
    viewportScrollFactorThreshold,
  ]);

  React.useEffect(() => {
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    setScrollState("at-top");
    onScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return scrollState;
}
