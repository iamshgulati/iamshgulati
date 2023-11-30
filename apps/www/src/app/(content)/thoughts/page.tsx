import React from "react";
import type { Metadata } from "next";
import { Box, Flex, Heading, Link, Section, Text } from "@radix-ui/themes";

import { PageHeading } from "~/components/page-heading";
import { NextLink } from "~/lib/link";
import { AllFrontmatter } from "~/lib/mdx-frontmatter";

const TITLE = "Thoughts";
const DESCRIPTION = "My personal thoughts.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function ThoughtsPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Hero title={TITLE} description={DESCRIPTION} />
      <Section size="2" pb="0">
        <AllThoughts />
      </Section>
    </React.Fragment>
  );
}

const Hero = ({
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

const AllThoughts = (): React.JSX.Element => {
  return (
    <Flex direction="column" gap="6">
      {AllFrontmatter.thoughts.map((thought) => (
        <Box key={thought.slug}>
          <NextLink href={thought.slug} passHref legacyBehavior>
            <Link>
              <Heading mb="2">{thought.title}</Heading>
            </Link>
          </NextLink>
          <Text as="p" color="gray">
            {thought.description}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};
