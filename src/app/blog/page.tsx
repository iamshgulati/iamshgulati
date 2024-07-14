import type { Metadata } from "next";
import React from "react";
import { Box, Flex } from "@radix-ui/themes";

import type { Frontmatter, MetadataProps } from "~/types/frontmatter";
import { PagePreviewCard } from "~/components/page-preview-card";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { PageWrapper } from "~/components/page-wrapper";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { allRoutes } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";

const metadataProps: MetadataProps = {
  title: "Blog",
  description: "Thoughts, stories, and ideas.",
};

const ogImageUrl: string = ogImageApi({
  title: metadataProps.title,
});

export const metadata: Metadata = {
  title: metadataProps.title,
  description: metadataProps.description,
  openGraph: {
    title: metadataProps.title,
    description: metadataProps.description,
    url: `${getBaseUrl()}/blog`,
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1920,
        height: 1080,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataProps.title,
    description: metadataProps.description,
    images: [ogImageUrl],
  },
};

export default function BlogPage(): React.JSX.Element {
  return (
    <PageWrapper>
      <Box my="7">
        <PageTitleAndDescription
          title={metadataProps.title}
          description={metadataProps.description}
        />
      </Box>
      <Flex direction="column" gap="9">
        {allRoutes.blog.pages?.map((page: Frontmatter) => (
          <PagePreviewCard
            key={page.slug}
            slug={page.slug}
            title={page.title}
            description={page.description}
            publishedAt={page.publishedAt}
            image={page.image}
          />
        ))}
      </Flex>
    </PageWrapper>
  );
}
