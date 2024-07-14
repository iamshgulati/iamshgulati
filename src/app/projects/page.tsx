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
  title: "Projects",
  description: "A showcase of my open source work.",
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
    url: `${getBaseUrl()}/projects`,
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

export default function ProjectsPage(): React.JSX.Element {
  return (
    <PageWrapper>
      <PageTitleAndDescription
        title={metadataProps.title}
        description={metadataProps.description}
      />
      <Flex direction="column" gap="9">
        {allRoutes.projects.pages?.map((page: Frontmatter) => (
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
