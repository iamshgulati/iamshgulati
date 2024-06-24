import type { Metadata } from "next";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Box, Container, Section } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { PageMeta } from "~/components/page-meta";
import { PageTitleAndDescription } from "~/components/page-title-and-description";
import { siteConfig } from "~/config/site";
import { ogImageApi } from "~/lib/api";
import { getAllFrontmatter } from "~/lib/mdx";
import { getBaseUrl } from "~/lib/url";

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
    "/private",
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
    "/private",
  );

  return allFrontmatter.map((page) => ({
    slug: page.slugAsParams ?? "",
  }));
}

export default async function PrivatePage({ params }: PageProps) {
  const allFrontmatter: Frontmatter[] = await getAllFrontmatter(
    "/src/data",
    "/private",
  );

  const page: Frontmatter | undefined = allFrontmatter.find(
    (page: Frontmatter) => page.slugAsParams === params.slug,
  );

  if (!page) {
    notFound();
  }

  const MDXPage: React.ComponentType = dynamic(
    () => import(`/src/data/private/${page.slugAsParams}/page.mdx`),
  );

  return (
    <Box
      asChild
      width="100%"
      style={{ maxWidth: "var(--default-page-max-width)" }}
    >
      <Section size={{ initial: "2", xs: "4" }}>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
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
              <MDXPage />
            </Suspense>
          </Section>
        </Container>
      </Section>
    </Box>
  );
}
