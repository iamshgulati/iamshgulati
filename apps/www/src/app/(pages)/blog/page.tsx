import React from "react";
import type { Metadata } from "next";
import { Flex, Section } from "@radix-ui/themes";

import { LinkCard } from "~/components/link-card";
import { TitleAndDescription } from "~/components/title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { allRoutes } from "~/lib/routes";
import type { AppRoute } from "~/lib/routes";
import { getBaseUrl } from "~/lib/url";
import type { Frontmatter, MetadataProps } from "~/types/frontmatter";

const metadataProps: MetadataProps = {
  title: "Blog",
  description: "Thoughts, stories, and ideas.",
};

export function generateMetadata(): Metadata {
  const ogImageUrl = metadataProps.image
    ? `${getBaseUrl()}${metadataProps.image}`
    : ogImageApi({
        title: metadataProps.title,
      });

  return {
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
}

export default function BlogPage(): React.JSX.Element {
  const route: AppRoute = allRoutes.blog;

  return (
    <React.Fragment>
      <Section size="1" pt="4">
        <TitleAndDescription
          title={metadataProps.title}
          description={metadataProps.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Flex direction="column" gap="5">
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
