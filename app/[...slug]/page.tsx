import type { Metadata } from "next";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Box } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { PageCoverImage } from "~/components/page-cover-image";
import { PageMetaText } from "~/components/page-meta-text";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { getAllFrontmatter } from "~/lib/mdx";
import { getBaseUrl } from "~/lib/url";

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter({});

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params.slug.join("/"),
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
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter({});

  return allFrontmatter.map((page) => ({
    slug: page.slugAsParams?.split("/") ?? [],
  }));
}

export default async function MDXPage({ params }: PageProps) {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter({});

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params.slug.join("/"),
  );

  if (!page) {
    notFound();
  }

  const MDXComponent: React.ComponentType = dynamic(
    () => import(`../../public/${page.slugAsParams}/index.mdx`),
  );

  return (
    <React.Fragment>
      {/* TODO: Pick a better name for "type" */}
      {page.type !== "page" && (
        <Box position="absolute">
          <PageMetaText publishedAt={page.publishedAt} />
        </Box>
      )}
      <Box my="7">
        <PageTitleAndDescription
          title={page.title}
          description={page.description}
        />
      </Box>
      <Box mb="7">
        <PageCoverImage src={page.image} alt={page.title} />
      </Box>
      <Suspense fallback={null}>
        <MDXComponent />
      </Suspense>
    </React.Fragment>
  );
}
