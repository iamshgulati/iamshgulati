import React from "react";
import type { Metadata } from "next";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";

import { Layout } from "~/components/layout";
import { PageHeading } from "~/components/page-heading";
import { NextLink } from "~/lib/link";
import { allBlogPosts } from "~/lib/mdx-frontmatter";

const TITLE = "Blog";
const DESCRIPTION = "Thoughts, stories, and ideas.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function BlogPage(): React.JSX.Element {
  return (
    <Layout.Content>
      <Box asChild width="100%" style={{ maxWidth: 858 }}>
        <Section size={{ initial: "2", xs: "3" }}>
          <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
            <HeroSection title={TITLE} description={DESCRIPTION} />
            <Section size="2" pb="0">
              <AllBlogsSection />
            </Section>
          </Container>
        </Section>
      </Box>
    </Layout.Content>
  );
}

const HeroSection = ({
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

const AllBlogsSection = (): React.JSX.Element => {
  return (
    <Flex direction="column" gap="6">
      {allBlogPosts.map((post) => (
        <Box key={post.slug}>
          <NextLink href={post.slug} passHref legacyBehavior>
            <Link>
              <Heading mb="2">{post.title}</Heading>
            </Link>
          </NextLink>
          <Text as="p" color="gray">
            {post.description}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};