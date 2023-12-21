import React, { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Flex, Section } from "@radix-ui/themes";

import { BackButton } from "~/components/back-button";
import { TitleAndDescription } from "~/components/title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { getAllFrontmatter } from "~/lib/mdx";
import type { Frontmatter } from "~/types/frontmatter";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter("/src/data");

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params?.slug?.join("/"),
  );

  if (!page) {
    return;
  }

  const ogImageUrl = page.image
    ? `${siteConfig.url}${page.image}`
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
      url: `${siteConfig.url}${page.slug}`,
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
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter("/src/data");

  return allFrontmatter.map((page) => ({
    slug: page.slugAsParams?.split("/") ?? [],
  }));
}

export default async function DataPage({ params }: PageProps) {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter("/src/data");

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params?.slug?.join("/"),
  );

  if (!page) {
    notFound();
  }

  const MDXPage: React.ComponentType = dynamic(
    () => import(`/src/data${page.slug}/page.mdx`),
  );

  return (
    <React.Fragment>
      <Section size="1" pt="4">
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
