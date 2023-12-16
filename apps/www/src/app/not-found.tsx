import React from "react";
import type { Metadata } from "next";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExclamationTriangleIcon,
  HomeIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Flex, Text } from "@radix-ui/themes";

import { BackButton } from "~/components/back-button";
import { PageHeading } from "~/components/heading";
import { NextLink } from "~/lib/link";

export const metadata: Metadata = {
  title: "Page Not Found",
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
      <ExclamationTriangleIcon
        aria-label="WarningIcon"
        width="52"
        height="52"
        style={{
          marginBottom: "var(--space-4)",
          color: "var(--accent-10)",
        }}
      />
      <TitleAndDescription
        title={metadata.title as string}
        description={metadata.description!}
      />
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
          <ChevronLeftIcon width="18" height="18" aria-hidden />
          <Text>GO BACK</Text>
        </BackButton>
        <NextLink href="/">
          <Button
            size="3"
            variant="soft"
            style={{
              paddingLeft: "var(--space-5)",
              paddingRight: "var(--space-5)",
              gap: "var(--space-2)",
            }}
          >
            <HomeIcon width="18" height="18" />
            <Text>GO HOME</Text>
            <ChevronRightIcon width="18" height="18" aria-hidden />
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}

const TitleAndDescription = ({
  title,
  description = undefined,
}: {
  title: string;
  description?: string;
}): React.JSX.Element => (
  <React.Fragment>
    <PageHeading as="h1" mb={{ initial: "3", xs: "5" }}>
      {title}
    </PageHeading>
    {description && (
      <Text as="p" color="gray" size={{ initial: "3", xs: "5" }}>
        {description}
      </Text>
    )}
  </React.Fragment>
);
