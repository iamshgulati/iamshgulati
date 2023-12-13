import React from "react";
import type { Metadata } from "next";
import { Box, Flex, Heading, Link, Section, Text } from "@radix-ui/themes";

import { PageHeading } from "~/components/heading";
import { NextLink } from "~/lib/link";
import { allRoutes } from "~/lib/routes";
import type { AppRoute } from "~/lib/routes";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, stories, and ideas.",
};

export default function BlogPage(): React.JSX.Element {
  const route = allRoutes.blog;

  return (
    <React.Fragment>
      <Section size="1" pt="4">
        <TitleAndDescription
          title={metadata.title as string}
          description={metadata.description!}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Flex direction="column" gap="7">
          <Previews route={route} />
        </Flex>
      </Section>
    </React.Fragment>
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
      <Text as="p" color="gray" size={{ initial: "4", xs: "6" }}>
        {description}
      </Text>
    )}
  </React.Fragment>
);

const Previews = ({ route }: { route: AppRoute }): React.JSX.Element => {
  return (
    <React.Fragment>
      {route.pages.map((page) => (
        <Box key={page.slug}>
          <NextLink href={page.slug} passHref legacyBehavior>
            <Link>
              <Heading size={{ initial: "5", xs: "6" }} mb="1">
                {page.title}
              </Heading>
            </Link>
          </NextLink>
          <Text as="p" color="gray">
            {page.description}
          </Text>
        </Box>
      ))}
    </React.Fragment>
  );
};
