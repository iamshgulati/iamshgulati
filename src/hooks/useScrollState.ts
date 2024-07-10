import React from "react";
import { usePathname } from "next/navigation";

type ScrollState = "at-top" | "scrolling-down" | "scrolling-up";

interface ScrollStateProps {
  viewportScrollFactorThreshold?: number;
  scrollDistanceThreshold?: number;
  scrollTopThreshold?: number;
}

interface ScrollStateOutput {
  scrolled: boolean;
  scrollState: ScrollState;
}

/**
 * Custom React hook to track the scroll state.
 * @param {ScrollStateProps} props - Configuration options for scroll state behavior.
 * @param {number} [props.viewportScrollFactorThreshold = 1] - Minimum height of the document as a factor of the viewport height.
 * @param {number} [props.scrollDistanceThreshold = 0] - The distance in pixels scrolled before considering a change in scroll direction.
 * @param {number} [props.scrollTopThreshold = 20] - The distance in pixels scrolled form top before considering a change in scrolled state.
 * @returns {scrolled} Returns the current scroll state relative to top: true or false.
 * @returns {scrolState} Returns the current scroll direction: "at-top", "scrolling-up", or "scrolling-down".
 */
export function useScrollState({
  viewportScrollFactorThreshold = 1,
  scrollDistanceThreshold = 0,
  scrollTopThreshold = 20,
}: ScrollStateProps): ScrollStateOutput {
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");
  const [previousScrollPosition, setPreviousScrollPosition] =
    React.useState<number>(0);
  const pathname = usePathname();

  const onScroll = React.useCallback(() => {
    // Track the scroll state relative to top of document
    setScrolled(document.documentElement.scrollTop >= scrollTopThreshold);

    // Track the scroll direction
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
    scrollTopThreshold,
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

  return { scrolled, scrollState };
}
