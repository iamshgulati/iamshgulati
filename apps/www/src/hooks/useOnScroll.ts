import React from "react";

type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

interface UseOnScrollOutput {
  isScrolled: boolean;
  scrollState: ScrollState;
}

export function useOnScroll(threshold = 0, ghost = false): UseOnScrollOutput {
  const [isScrolled, setScrolled] = React.useState<boolean>(false);
  const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");

  React.useEffect(() => {
    let previousScrollY = window.scrollY;

    const onScroll = () => {
      setScrolled(window.scrollY > threshold);

      const direction =
        previousScrollY < window.scrollY ? "scrolling-down" : "scrolling-up";
      const state = window.scrollY <= threshold ? "at-top" : direction;
      previousScrollY = window.scrollY;
      setScrollState(state);
    };

    if (ghost) {
      addEventListener("scroll", onScroll, { passive: true });
    } else {
      removeEventListener("scroll", onScroll);
    }

    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, [threshold, ghost]);

  return { isScrolled, scrollState };
}
