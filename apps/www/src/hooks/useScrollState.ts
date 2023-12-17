import React from "react";
import { usePathname } from "next/navigation";

type ScrollState = "at-top" | "scrolling-down" | "scrolling-up";

interface HeaderProps {
  viewportScrollFactorThreshold?: number;
  scrollDistanceThreshold?: number;
}

/**
 * Custom React hook to track the scroll state.
 * @param {HeaderProps} props - Configuration options for header behavior.
 * @param {number} [props.viewportScrollFactorThreshold = 1] - Minimum height of the document as a factor of the viewport height.
 * @param {number} [props.scrollDistanceThreshold = 0] - The distance in pixels scrolled before considering a change in scroll direction.
 * @returns {ScrollState} Returns the current scroll state: 'at-top', 'scrolling-up', or 'scrolling-down'.
 */
export function useScrollState({
  viewportScrollFactorThreshold = 1,
  scrollDistanceThreshold = 0,
}: HeaderProps): ScrollState {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const [previousScrollPosition, setPreviousScrollPosition] =
    React.useState<number>(0);
  const pathname = usePathname();

  const handleScroll = React.useCallback(() => {
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
    document.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    setScrollState("at-top");
    handleScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return scrollState;
}
