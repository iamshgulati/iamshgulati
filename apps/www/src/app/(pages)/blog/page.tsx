import React from "react";
import type { Metadata } from "next";
import { Flex, Section } from "@radix-ui/themes";

import { LinkCard } from "~/components/link-card";
import { TitleAndDescription } from "~/components/title-and-description";
import type { ContentPage } from "~/lib/mdx";
import { allRoutes } from "~/lib/routes";
import type { AppRoute } from "~/lib/routes";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, stories, and ideas.",
};

export default function BlogPage(): React.JSX.Element {
  const route = allRoutes.blog;

  return (
    <React.Fragment>
      <Section size="1" pt="4">
        <TitleAndDescription
          title={metadata.title as string}
          description={metadata.description!}
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
  const pages = route.pages as ContentPage[];

  return (
    <React.Fragment>
      {pages.map((page) => (
        <LinkCard
          key={page.slug}
          href={page.slug}
          title={page.title}
          description={page.description}
          metadata={{
            publishedAt: page.publishedAt,
            readingTime: page.readingTime,
          }}
        />
      ))}
    </React.Fragment>
  );
};
