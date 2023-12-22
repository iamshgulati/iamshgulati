import React from "react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { IconButton, Link } from "@radix-ui/themes";

export const FloatingScrollToTopButton = (): React.JSX.Element => {
  return (
    <Link href="#top">
      <IconButton
        aria-label="Scroll To Top"
        size="3"
        variant="soft"
        color="gray"
        radius="full"
        style={{
          position: "fixed",
          bottom: "8px",
          right: "8px",
          zIndex: "999",
        }}
      >
        <ChevronUpIcon width="20" height="20" />
      </IconButton>
    </Link>
  );
};
