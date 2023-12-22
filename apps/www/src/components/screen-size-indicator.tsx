import React from "react";
import { Box, IconButton, Text } from "@radix-ui/themes";

export const ScreenSizeIndicator = (): React.JSX.Element => {
  return (
    <IconButton
      aria-label="Screen Size Indicator"
      size="1"
      variant="soft"
      color="gray"
      radius="full"
      style={{
        position: "fixed",
        bottom: "4px",
        left: "4px",
        zIndex: "999",
        pointerEvents: "none",
      }}
    >
      <Text size="1">
        <Box
          display={{
            initial: "block",
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        >
          i
        </Box>
        <Box
          display={{
            initial: "none",
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        >
          xs
        </Box>
        <Box
          display={{
            initial: "none",
            xs: "none",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        >
          sm
        </Box>
        <Box
          display={{
            initial: "none",
            xs: "none",
            sm: "none",
            md: "block",
            lg: "none",
            xl: "none",
          }}
        >
          md
        </Box>
        <Box
          display={{
            initial: "none",
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "none",
          }}
        >
          lg
        </Box>
        <Box
          display={{
            initial: "none",
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "block",
          }}
        >
          xl
        </Box>
      </Text>
    </IconButton>
  );
};
