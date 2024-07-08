import React from "react";
import { Text } from "@radix-ui/themes";

import { PageHeading, SectionHeading } from "./page-headings";

interface SectionTitleAndDescriptionProps {
  title: string;
  description?: string;
}
export const SectionTitleAndDescription = ({
  title,
  description = undefined,
}: SectionTitleAndDescriptionProps): React.JSX.Element => (
  <React.Fragment>
    <SectionHeading as="h1" mt="7" mb="2">
      {title}
    </SectionHeading>
    {description && (
      <Text as="p" size="6" color="gray" mt="2" mb="7">
        {description}
      </Text>
    )}
  </React.Fragment>
);

interface PageTitleAndDescriptionProps {
  title: string;
  description?: string;
}
export const PageTitleAndDescription = ({
  title,
  description = undefined,
}: PageTitleAndDescriptionProps): React.JSX.Element => (
  <React.Fragment>
    <PageHeading as="h1" mt="7" mb="2">
      {title}
    </PageHeading>
    {description && (
      <Text as="p" size="4" color="gray" mt="2" mb="7">
        {description}
      </Text>
    )}
  </React.Fragment>
);
