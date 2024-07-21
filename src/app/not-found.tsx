import type { Metadata } from "next";
import React from "react";
import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { BackButton } from "~/components/back-button";
import { Icons } from "~/components/icons";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { NextLink } from "~/lib/link";
import { staticRoutes } from "~/lib/routes";

export const metadata: Metadata = {
  title: "Not Found",
  description:
    "Sorry, the page you are looking for has moved or doesn't exist.",
};
export default function NotFound(): React.JSX.Element {
  return (
    <Box
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Icons.ExclamationTriangleIcon
        aria-label="WarningIcon"
        width="52"
        height="52"
        style={{
          marginBottom: "var(--space-4)",
          color: "var(--yellow-10)",
        }}
      />
      <Box my="7">
        <PageTitleAndDescription
          title={metadata.title as string}
          description={metadata.description ? metadata.description : ""}
        />
      </Box>
      <Flex
        direction={{ initial: "column", md: "row" }}
        align="center"
        justify="center"
        gap="6"
        mt="8"
      >
        <BackButton
          size="3"
          variant="solid"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
            gap: "var(--space-2)",
          }}
        >
          <Icons.ChevronLeftIcon width="18" height="18" aria-hidden />
          <Text>GO BACK</Text>
        </BackButton>
        <NextLink href={staticRoutes.home.slug}>
          <Button
            size="3"
            variant="solid"
            style={{
              paddingLeft: "var(--space-5)",
              paddingRight: "var(--space-5)",
              gap: "var(--space-2)",
            }}
          >
            <Text>GO HOME</Text>
            <Icons.ChevronRightIcon width="18" height="18" aria-hidden />
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}
