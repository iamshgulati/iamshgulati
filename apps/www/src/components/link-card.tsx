import React from "react";
import { Card, Flex, Text } from "@radix-ui/themes";

import { formatDateRelative } from "~/lib/date";
import { NextLink } from "~/lib/link";

interface LinkCardProp {
  href: string;
  title: string;
  description?: string;
  metadata?: {
    publishedAt?: string;
    readingTime?: string;
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
      <Text as="p" size="2" color="gray" mb="1">
        {description}
      </Text>
      <Flex align="center" gap="2" style={{ color: "var(--gray-10)" }}>
        <Text asChild size="1">
          {metadata?.publishedAt && (
            <time dateTime={metadata.publishedAt}>
              {formatDateRelative(metadata.publishedAt).toString()}
            </time>
          )}
        </Text>
        <Text as="p" size="1">
          &middot;
        </Text>
        <Text as="p" size="1">
          {metadata?.readingTime}
        </Text>
      </Flex>
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
