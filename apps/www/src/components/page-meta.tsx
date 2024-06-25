import React from "react";
import { Badge, Flex, Text } from "@radix-ui/themes";

import { formatFullDate, formatRelativeDate } from "~/lib/date";

export const PageMeta = ({
  publishedAt = undefined,
  ...props
}: React.ComponentProps<typeof Flex> & {
  publishedAt?: string;
}): React.JSX.Element => (
  <Flex {...props} width="100%" align="center" gap="2">
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
      </React.Fragment>
    ) : (
      <Badge variant="surface">draft</Badge>
    )}
  </Flex>
);
