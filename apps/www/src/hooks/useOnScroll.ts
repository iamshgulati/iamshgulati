import React from "react";
import { usePathname } from "next/navigation";

type ScrollState = "at-top" | "scrolling-down" | "scrolling-up";

/**
 * Custom React hook to track scroll behavior and provide scroll state.
 * @param [scrollHeightFactor = 1] - Minimum threshold of viewport height expressed as factor of viewport height.
 * @param [ScrollDelay = 0] - The delay in pixels before considering a scroll action.
 * @returns {ScrollState} Returns the current scroll state: 'at-top', 'scrolling-up', or 'scrolling-down'.
 */
export function useOnScroll(
  scrollHeightFactor = 1,
  ScrollDelay = 0,
): ScrollState {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const [previousScrollPosition, setPreviousScrollPosition] =
    React.useState<number>(0);
  const pathname = usePathname();

  const handleScroll = React.useCallback(() => {
    const currentScrollHeightFactor =
      document.documentElement.scrollHeight / window.innerHeight;

    if (currentScrollHeightFactor >= scrollHeightFactor) {
      const currentScrollPosition = window.scrollY;

      const hasScrolledPastDelay =
        Math.abs(currentScrollPosition - previousScrollPosition) > ScrollDelay;

      if (hasScrolledPastDelay) {
        const scrollDirection =
          previousScrollPosition < currentScrollPosition
            ? "scrolling-down"
            : "scrolling-up";
        const newScrollState =
          currentScrollPosition <= ScrollDelay ? "at-top" : scrollDirection;
        setPreviousScrollPosition(currentScrollPosition);
        setScrollState(newScrollState);
      }
    }
  }, [previousScrollPosition, ScrollDelay, scrollHeightFactor]);

  React.useEffect(() => {
    setPreviousScrollPosition(window.scrollY);
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  React.useEffect(() => {
    return () => {
      setScrollState("at-top");
    };
  }, []);

  React.useEffect(() => {
    setScrollState("at-top");
  }, [pathname]);

  return scrollState;
}
