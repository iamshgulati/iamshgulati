import React from "react";
import type { Metadata } from "next";
import { Box, Flex, Section } from "@radix-ui/themes";

import { LinkCard } from "~/components/link-card";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { allRoutes } from "~/lib/routes";
import type { AppRoute } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";
import type { Frontmatter, MetadataProps } from "~/types/frontmatter";

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
  const route: AppRoute = allRoutes.projects;

  return (
    <React.Fragment>
      <Box position="relative" mb="4"></Box>
      <Section size="1">
        <PageTitleAndDescription
          title={metadataProps.title}
          description={metadataProps.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Flex direction="column" gap="8">
          <Previews route={route} />
        </Flex>
      </Section>
    </React.Fragment>
  );
}

const Previews = ({ route }: { route: AppRoute }): React.JSX.Element => {
  return (
    <React.Fragment>
      {route.pages.map((page: Frontmatter) => (
        <LinkCard
          key={page.slug}
          href={page.slug}
          title={page.title}
          description={page.description}
          metadata={{
            publishedAt: page.publishedAt,
          }}
        />
      ))}
    </React.Fragment>
  );
};
