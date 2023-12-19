import React from "react";
import type { Metadata } from "next";
import { Flex, Section } from "@radix-ui/themes";

import { LinkCard } from "~/components/link-card";
import { TitleAndDescription } from "~/components/title-and-description";
import { allRoutes } from "~/lib/routes";
import type { AppRoute } from "~/lib/routes";
import type { Frontmatter } from "~/types/frontmatter";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, stories, and ideas.",
};

export default function BlogPage(): React.JSX.Element {
  const route: AppRoute = allRoutes.blog;

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
