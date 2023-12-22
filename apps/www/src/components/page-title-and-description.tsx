import React from "react";
import { Text } from "@radix-ui/themes";

import { PageHeading } from "./page-heading";

interface PageTitleAndDescriptionProps {
  title: string;
  description?: string;
}
export const PageTitleAndDescription = ({
  title,
  description = undefined,
}: PageTitleAndDescriptionProps): React.JSX.Element => (
  <React.Fragment>
    <PageHeading as="h1" mb={{ initial: "3", xs: "5" }}>
      {title}
    </PageHeading>
    {description && (
      <Text as="p" color="gray" size={{ initial: "4", xs: "6" }}>
        {description}
      </Text>
    )}
  </React.Fragment>
);
