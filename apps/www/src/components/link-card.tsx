import React from "react";
import { Badge, Card, Flex, Text } from "@radix-ui/themes";

import { formatFullDate, formatRelativeDate } from "~/lib/date";
import { NextLink } from "~/lib/link";

interface LinkCardProp {
  href: string;
  title: string;
  description?: string;
  metadata?: {
    publishedAt?: string;
  };
}

export const LinkCard = ({
  href,
  title,
  description,
  metadata,
}: LinkCardProp): React.JSX.Element => {
  const cardContent: React.JSX.Element = (
    <React.Fragment>
      <Text as="div" size="2" weight="bold" mb="1">
        {title}
      </Text>
      <Text as="div" size="2" color="gray" mb="3">
        {description}
      </Text>
      <Metadata publishedAt={metadata?.publishedAt} />
    </React.Fragment>
  );

  return href ? (
    <NextLink href={href} passHref legacyBehavior>
      <Card asChild size="2">
        <a href={href}>{cardContent}</a>
      </Card>
    </NextLink>
  ) : (
    <Card size="2">{cardContent}</Card>
  );
};

const Metadata = ({
  publishedAt = undefined,
  ...props
}: React.ComponentProps<typeof Flex> & {
  publishedAt?: string;
}): React.JSX.Element => (
  <Flex
    {...props}
    width="100%"
    align="center"
    gap="2"
    style={{ color: "var(--gray-10)" }}
  >
    {publishedAt ? (
      <React.Fragment>
        <Text asChild size="1">
          <time dateTime={publishedAt}>{formatFullDate(publishedAt)}</time>
        </Text>
        <Text as="p" size="1">
          &middot;
        </Text>
        <Text as="p" size="1">
          <time dateTime={publishedAt}>{formatRelativeDate(publishedAt)}</time>
        </Text>
      </React.Fragment>
    ) : (
      <Badge variant="surface">draft</Badge>
    )}
  </Flex>
);
