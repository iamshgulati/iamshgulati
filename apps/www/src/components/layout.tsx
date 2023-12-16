import React from "react";
import { Box, Flex } from "@radix-ui/themes";

const LayoutBackground = ({
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
      grow="1"
      shrink="0"
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
      grow="1"
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
  Header: LayoutHeader,
  Root: LayoutRoot,
  Main: LayoutMain,
  Content: LayoutContent,
  Footer: LayoutFooter,
} as const;
