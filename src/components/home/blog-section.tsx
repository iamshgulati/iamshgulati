import React from "react";
import { Box, Flex, Heading } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { allRoutes } from "~/lib/routes";
import { PagePreviewCard } from "../page-preview-card";

export const BlogSection = () => (
  <React.Fragment>
    <Box mb="7">
      <Heading as="h2" size="7">
        Latest Posts
      </Heading>
    </Box>
    <Flex direction="column" gap="6">
      {allRoutes.blog.pages
        ?.slice(0, 3)
        .map((page: Frontmatter) => (
          <PagePreviewCard
            key={page.slug}
            slug={page.slug}
            title={page.title}
            description={page.description}
            publishedAt={page.publishedAt}
          />
        ))}
    </Flex>
  </React.Fragment>
);
