import React from "react";
import { Box, Flex } from "@radix-ui/themes";

function LayoutRoot({ children }: React.PropsWithChildren): React.JSX.Element {
  return (
    <Flex
      position="relative"
      direction="column"
      style={{
        minHeight: "100vh",
      }}
    >
      {children}
    </Flex>
  );
}

function LayoutBackground(
  props: React.ComponentPropsWithoutRef<"div">,
): React.JSX.Element {
  return (
    <Flex
      position="absolute"
      inset="0"
      align="start"
      justify="center"
      {...props}
    />
  );
}

function LayoutHeader({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return <Box height="0">{children}</Box>;
}

function LayoutMain({ children }: React.PropsWithChildren): React.JSX.Element {
  return (
    <Flex
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
      <main>{children}</main>
    </Flex>
  );
}

function LayoutContent({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <Flex
      asChild
      direction="column"
      grow="1"
      align="center"
      style={{
        maxWidth: "100%",
      }}
    >
      <article>{children}</article>
    </Flex>
  );
}

function LayoutFooter({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return <Box>{children}</Box>;
}

export const Layout = {
  Root: LayoutRoot,
  Background: LayoutBackground,
  Header: LayoutHeader,
  Main: LayoutMain,
  Content: LayoutContent,
  Footer: LayoutFooter,
};
