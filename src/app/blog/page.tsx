import type { Metadata } from "next";
import React from "react";
import { Flex } from "@radix-ui/themes";

import type { AppRoute } from "~/lib/routes";
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
  const route: AppRoute = allRoutes.blog;

  return (
    <PageWrapper>
      <PageTitleAndDescription
        title={metadataProps.title}
        description={metadataProps.description}
        my="7"
      />
      <Flex direction="column" gap="9">
        {route.pages?.map((page: Frontmatter) => (
          <PagePreviewCard key={page.slug} page={page} />
        ))}
      </Flex>
    </PageWrapper>
  );
}
