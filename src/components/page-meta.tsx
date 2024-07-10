import React from "react";
import { Badge, Flex, Text } from "@radix-ui/themes";

import { formatFullDate, formatRelativeDate } from "~/lib/date";

interface PageMetaProps {
  publishedAt?: string;
  category?: string;
}

export const PageMeta = ({
  publishedAt = undefined,
  category = undefined,
  ...props
}: React.ComponentProps<typeof Flex> & PageMetaProps): React.JSX.Element => (
  <Flex {...props} width="100%" align="center" gap="2" mb="4">
    {publishedAt ? (
      <React.Fragment>
        <Text asChild size="2" color="gray" trim="start">
          <time dateTime={publishedAt}>{formatFullDate(publishedAt)}</time>
        </Text>
        <Text size="2" color="gray" trim="start">
          &middot;
        </Text>
        <Text asChild size="2" color="gray" trim="start">
          <time dateTime={publishedAt}>{formatRelativeDate(publishedAt)}</time>
        </Text>
        {category ? (
          <React.Fragment>
            <Text size="2" color="gray" trim="start">
              &middot;
            </Text>
            <Text asChild size="2" color="gray" trim="start">
              {category}
            </Text>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    ) : (
      <Badge variant="surface">draft</Badge>
    )}
  </Flex>
);
