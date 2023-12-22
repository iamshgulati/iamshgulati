import React, { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Badge, Flex, Section, Text } from "@radix-ui/themes";

import { BackButton } from "~/components/back-button";
import { TitleAndDescription } from "~/components/title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { formatFullDate, formatRelativeDate } from "~/lib/date";
import { getAllFrontmatter } from "~/lib/mdx";
import { getBaseUrl } from "~/lib/url";
import type { Frontmatter } from "~/types/frontmatter";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter(
    "/src/data",
    "/blog",
  );

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params.slug,
  );

  if (!page) {
    return;
  }

  const ogImageUrl = page.image
    ? `${getBaseUrl()}${page.image}`
    : ogImageApi({
        title: page.title,
        publishedAt: page.publishedAt,
      });

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${getBaseUrl()}${page.slug}`,
      siteName: siteConfig.title,
      locale: siteConfig.locale,
      type: "article",
      publishedTime: page.publishedAt,
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
      title: page.title,
      description: page.description,
      images: [ogImageUrl],
    },
  };
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter(
    "/src/data",
    "/blog",
  );

  return allFrontmatter.map((page) => ({
    slug: page.slugAsParams ?? "",
  }));
}

export default async function BlogPage({ params }: PageProps) {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter(
    "/src/data",
    "/blog",
  );

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params.slug,
  );

  if (!page) {
    notFound();
  }

  const MDXPage: React.ComponentType = dynamic(
    () => import(`/src/data/blog/${page.slugAsParams}/page.mdx`),
  );

  return (
    <React.Fragment>
      <Flex align="center" gap="2">
        {page?.publishedAt ? (
          <React.Fragment>
            <Text asChild size={{ initial: "2", xs: "3" }} color="gray">
              <time dateTime={page.publishedAt}>
                {formatFullDate(page.publishedAt)}
              </time>
            </Text>
            <Text as="p" size={{ initial: "2", xs: "3" }} color="gray">
              &middot;
            </Text>
            <Text asChild size={{ initial: "2", xs: "3" }} color="gray">
              <time dateTime={page.publishedAt}>
                {formatRelativeDate(page.publishedAt)}
              </time>
            </Text>
          </React.Fragment>
        ) : (
          <Badge>draft</Badge>
        )}
      </Flex>
      <Section size="1" pt="5">
        <TitleAndDescription
          title={page.title}
          description={page.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Suspense fallback={null}>
          <MDXPage />
        </Suspense>
      </Section>
      <Section size={{ initial: "1", xs: "2" }} pb="0">
        <Flex align="center" justify="center">
          <BackButton size="3" />
        </Flex>
      </Section>
    </React.Fragment>
  );
}
