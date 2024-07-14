import React from "react";
import { Badge, Flex, Text } from "@radix-ui/themes";

import type { Frontmatter } from "~/types/frontmatter";
import { formatFullDate, formatRelativeDate } from "~/lib/date";

export const PageMetaText = ({
  publishedAt = undefined,
  size = { initial: "2", sm: "3" },
  ...props
}: React.ComponentPropsWithoutRef<typeof Text> &
  Pick<Frontmatter, "publishedAt">): React.JSX.Element => (
  <React.Fragment>
    {publishedAt ? (
      <Flex asChild width="100%" align="center" gap="2" wrap="wrap">
        <Text size={size} color="gray" {...props}>
          <time dateTime={publishedAt}>{formatFullDate(publishedAt)}</time>
          &middot;
          <time dateTime={publishedAt}>{formatRelativeDate(publishedAt)}</time>
          {/* {category ? (
            <React.Fragment>
              &middot;
              <span>{category}</span>
            </React.Fragment>
          ) : null} */}
        </Text>
      </Flex>
    ) : (
      <Badge variant="surface">draft</Badge>
    )}
  </React.Fragment>
);
