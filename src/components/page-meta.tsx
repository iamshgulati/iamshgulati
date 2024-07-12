import React from "react";
import { Badge, Flex, Text } from "@radix-ui/themes";

import { formatFullDate, formatRelativeDate } from "~/lib/date";

interface PageMetaProps {
  publishedAt?: string;
  _category?: string;
}

export const PageMeta = ({
  publishedAt = undefined,
  _category = undefined,
  size = { initial: "2", sm: "3" },
  ...props
}: React.ComponentProps<typeof Text> & PageMetaProps): React.JSX.Element => (
  <React.Fragment>
    {publishedAt ? (
      <Flex asChild width="100%" align="center" gap="2" wrap="wrap">
        <Text size={size} color="gray" {...props}>
          <time dateTime={publishedAt}>{formatFullDate(publishedAt)}</time>
          &middot;
          <time dateTime={publishedAt}>{formatRelativeDate(publishedAt)}</time>
          {_category ? (
            <React.Fragment>
              &middot;
              <span>{_category}</span>
            </React.Fragment>
          ) : null}
        </Text>
      </Flex>
    ) : (
      <Badge variant="surface">draft</Badge>
    )}
  </React.Fragment>
);
