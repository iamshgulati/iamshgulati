import React, { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Box, Section } from "@radix-ui/themes";

import { PageMeta } from "~/components/page-meta";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
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

  const PageContent: React.ComponentType = dynamic(
    () => import(`/src/data/blog/${page.slugAsParams}/page.mdx`),
  );

  return (
    <React.Fragment>
      <Box position="relative" mb="4">
        <PageMeta position="absolute" publishedAt={page.publishedAt} />
      </Box>
      <Section size="1">
        <PageTitleAndDescription
          title={page.title}
          description={page.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Suspense fallback={null}>
          <PageContent />
        </Suspense>
      </Section>
    </React.Fragment>
  );
}
