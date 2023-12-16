import React from "react";
import { Box } from "@radix-ui/themes";

export const BackgroundImage = ({
  style = undefined,
  children = undefined,
}: React.ComponentProps<"div">): React.JSX.Element => {
  return (
    <Box style={{ position: "relative", zIndex: 0 }}>
      <Box
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        <Box
          style={{
            width: "100vw",
            minWidth: 1500,
            left: "50%",
            transform: "translateX(-50%)",
            position: "absolute",
            top: 0,
            bottom: 0,
            backgroundColor: "var(--color-background-image-base)",
            ...style,
          }}
        />
      </Box>
      {children}
    </Box>
  );
};
