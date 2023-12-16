import React from "react";
import { Box, Flex } from "@radix-ui/themes";

const LayoutRoot = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Flex>): React.JSX.Element => {
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

const LayoutBackground = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Flex>): React.JSX.Element => {
  return (
    <Flex
      {...props}
      position="absolute"
      inset="0"
      align="start"
      justify="center"
      style={{
        overflow: "hidden",
      }}
    />
  );
};

const LayoutHeader = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Box>): React.JSX.Element => {
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
  Root: LayoutRoot,
  Background: LayoutBackground,
  Header: LayoutHeader,
  Main: LayoutMain,
  Content: LayoutContent,
  Footer: LayoutFooter,
} as const;
