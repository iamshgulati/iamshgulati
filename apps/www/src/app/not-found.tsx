import React from "react";
import type { Metadata } from "next";
import {
  ChevronLeftIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import { Box, Button, Container, Section, Text } from "@radix-ui/themes";

import { PageHeading } from "~/components/heading";
import { Layout } from "~/components/layout";
import { NextLink } from "~/lib/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "Sorry, the page you are looking for doesn't exist or has moved.",
};
export default function NotFound() {
  return (
    <Layout.Root>
      <Layout.Background
        style={{
          zIndex: -1,
          position: "absolute",
          left: 0,
          right: 0,
          height: 480,
          opacity: 0.6,
          background:
            "linear-gradient(to bottom, transparent, transparent, transparent)",
        }}
      />

      <Layout.Main>
        <Section size={{ initial: "2", xs: "3" }}>
          <Container mx={{ initial: "5", sm: "6", md: "9" }}>
            <Box
              mt="9"
              style={{
                textAlign: "center",
              }}
            >
              <ExclamationTriangleIcon
                width="52"
                height="52"
                style={{
                  marginBottom: "var(--space-4)",
                  color: "var(--amber-11)",
                }}
              />
              <TitleAndDescription
                title={metadata.title as string}
                description={metadata.description!}
              />
              <NextLink href="/">
                <Button
                  mt="9"
                  size="3"
                  style={{
                    paddingLeft: "var(--space-5)",
                    paddingRight: "var(--space-5)",
                    gap: "var(--space-2)",
                  }}
                >
                  <ChevronLeftIcon width="18" height="18" />
                  <Text>BACK TO HOME</Text>
                </Button>
              </NextLink>
            </Box>
          </Container>
        </Section>
      </Layout.Main>
    </Layout.Root>
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
