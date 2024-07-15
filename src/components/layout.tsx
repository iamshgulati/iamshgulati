import React from "react";
import { Box, Flex } from "@radix-ui/themes";

const LayoutBackground = ({
  style = undefined,
  children = undefined,
}: React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => {
  return (
    <Box style={{ position: "relative", zIndex: 0 }}>
      <Box
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--color-background)",
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
            ...style,
          }}
        />
      </Box>
      {children}
    </Box>
  );
};

const LayoutRoot = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Flex>): React.JSX.Element => {
  return (
    <Flex
      position="relative"
      direction="column"
      style={{
        minHeight: "100dvh",
      }}
      {...props}
    />
  );
};

const LayoutBackgroundImage = (
  props: React.ComponentPropsWithoutRef<typeof Flex>,
): React.JSX.Element => (
  <Flex
    position="absolute"
    inset="0"
    align="start"
    justify="center"
    style={{
      zIndex: -1,
      overflow: "hidden",
    }}
    {...props}
  />
);

const LayoutHeader = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => {
  return <Box height="0" {...props} />;
};

const LayoutMain = ({
  children = undefined,
  ...props
}: React.PropsWithChildren<
  Omit<React.ComponentPropsWithoutRef<typeof Flex>, "as">
>): React.JSX.Element => {
  return (
    <Flex
      asChild
      direction="column"
      flexGrow="1"
      flexShrink="0"
      position="relative"
      style={{
        zIndex: "0",
        boxSizing: "content-box",
        marginTop: "var(--header-height)",
      }}
      {...props}
    >
      <main>{children}</main>
    </Flex>
  );
};

const LayoutFooter = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => {
  return <Box {...props} />;
};

export const Layout = {
  Background: LayoutBackground,
  Root: LayoutRoot,
  BackgroundImage: LayoutBackgroundImage,
  Header: LayoutHeader,
  Main: LayoutMain,
  Footer: LayoutFooter,
} as const;
