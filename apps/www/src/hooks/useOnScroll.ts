import React from "react";
import { usePathname } from "next/navigation";

type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

/**
 * Custom React hook to track scroll behavior and provide scroll state.
 * @param [scrollHeightFactorThreshold = 1] - The factor of viewport height
 *   to determine if the scroll effect should activate based on scroll height.
 * @param [scrollDelay = 0] - The delay in pixels before considering a scroll action.
 * @returns {ScrollState} Returns the current scroll state: 'at-top', 'scrolling-up', or 'scrolling-down'.
 */
export function useOnScroll(
  scrollHeightFactorThreshold = 1,
  scrollDelay = 0,
): ScrollState {
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const [previousScrollPosition, setPreviousScrollPosition] =
    React.useState<number>(0);
  const pathname = usePathname();

  const handleScroll = React.useCallback(() => {
    const scrollHeightFactor =
      document.documentElement.scrollHeight / window.innerHeight;

    if (scrollHeightFactor >= scrollHeightFactorThreshold) {
      const currentScrollPosition = window.scrollY;

      const hasScrolledPastDelay =
        Math.abs(currentScrollPosition - previousScrollPosition) > scrollDelay;

      if (hasScrolledPastDelay) {
        const scrollDirection =
          previousScrollPosition < currentScrollPosition
            ? "scrolling-down"
            : "scrolling-up";
        const newScrollState =
          currentScrollPosition <= scrollDelay ? "at-top" : scrollDirection;
        setPreviousScrollPosition(currentScrollPosition);
        setScrollState(newScrollState);
      }
    }
  }, [previousScrollPosition, scrollDelay, scrollHeightFactorThreshold]);

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
