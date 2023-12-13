import React from "react";
import type { Metadata } from "next";
import { Box, Flex, Section } from "@radix-ui/themes";

import { BlogPostPreview } from "~/components/blog-post-preview";
import { TitleAndDescription } from "~/components/title-and-description";
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

const Previews = ({ route }: { route: AppRoute }): React.JSX.Element => {
  return (
    <React.Fragment>
      {route.pages.map((page) => (
        <Box key={page.slug}>
          <BlogPostPreview
            slug={page.slug}
            title={page.title}
            description={page.description}
          />
        </Box>
      ))}
    </React.Fragment>
  );
};
