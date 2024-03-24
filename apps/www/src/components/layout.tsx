import React from "react";
import { Box, Flex } from "@radix-ui/themes";

const LayoutBackground = ({
  style = {},
  children = undefined,
}: React.ComponentProps<typeof Box>): React.JSX.Element => {
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
}: React.ComponentProps<typeof Flex>): React.JSX.Element => {
  return (
    <Flex
      {...props}
      position="relative"
      direction="column"
      style={{
        minHeight: "100vh",
      }}
    />
  );
};

const LayoutBackgroundImage = (
  props: React.ComponentProps<typeof Flex>,
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
}: React.ComponentProps<typeof Box>): React.JSX.Element => {
  return <Box {...props} height="0" />;
};

const LayoutMain = ({
  ...props
}: Omit<React.ComponentProps<typeof Flex>, "as">): React.JSX.Element => {
  return (
    <Flex
      {...props}
      asChild
      direction="column"
      flexGrow="1"
      flexShrink="0"
      position="relative"
      style={{
        zIndex: "0",
        boxSizing: "content-box",
        paddingTop: "var(--header-height)",
      }}
    >
      <main>{props.children}</main>
    </Flex>
  );
};

const LayoutContent = ({
  ...props
}: Omit<React.ComponentProps<typeof Flex>, "as">): React.JSX.Element => {
  return (
    <Flex
      {...props}
      asChild
      direction="column"
      flexGrow="1"
      align="center"
      style={{
        maxWidth: "100%",
      }}
    >
      <article>{props.children}</article>
    </Flex>
  );
};

const LayoutFooter = ({
  ...props
}: React.ComponentProps<typeof Box>): React.JSX.Element => {
  return <Box {...props} />;
};

export const Layout = {
  Background: LayoutBackground,
  Root: LayoutRoot,
  BackgroundImage: LayoutBackgroundImage,
  Header: LayoutHeader,
  Main: LayoutMain,
  Content: LayoutContent,
  Footer: LayoutFooter,
} as const;
