import type { Metadata } from "next";
import React from "react";
import { Box, Container, Grid, Section } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { PagePreviewCard } from "~/components/page-preview-card";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { dynamicRoutes, staticRoutes } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";

const ogImageUrl: string = ogImageApi({
  title: staticRoutes.projects.label,
});

export const metadata: Metadata = {
  title: staticRoutes.projects.label,
  description: staticRoutes.projects.description,
  openGraph: {
    title: staticRoutes.projects.label,
    description: staticRoutes.projects.description,
    url: `${getBaseUrl()}${staticRoutes.projects.slug}`,
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
    title: staticRoutes.projects.label,
    description: staticRoutes.projects.description,
    images: [ogImageUrl],
  },
};

export default function ProjectsPage(): React.JSX.Element {
  return (
    <Section size={{ initial: "2", md: "4" }}>
      <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
        <Box my="7">
          <PageTitleAndDescription
            title={staticRoutes.projects.label}
            description={staticRoutes.projects.description}
          />
        </Box>
        <Grid columns={{ initial: "1", md: "2" }} gap="6">
          {dynamicRoutes.projects.pages?.map((page: Frontmatter) => (
            <PagePreviewCard
              key={page.slug}
              slug={page.slug}
              title={page.title}
              description={page.description}
              publishedAt={page.publishedAt}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
