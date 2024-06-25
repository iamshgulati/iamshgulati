import React from "react";
import {
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Link,
  Text,
} from "@radix-ui/themes";

import { formatFullDate, formatRelativeDate } from "~/lib/date";
import { NextLink } from "~/lib/link";
import { Img } from "./mdx/img";

interface LinkCardProp {
  href: string;
  title: string;
  description?: string;
  image?: string;
  metadata?: {
    publishedAt?: string;
  };
}

export const LinkCard = ({
  href,
  title,
  description = undefined,
  image = undefined,
  metadata = undefined,
}: LinkCardProp): React.JSX.Element => (
  <Card asChild size="3" variant="classic">
    <NextLink href={href}>
      <Grid columns={{ initial: "1", sm: "2" }} width="100%">
        {image ? (
          <Inset
            clip="padding-box"
            side={{ initial: "top", sm: "left" }}
            pb={{ initial: "current", sm: "0" }}
            pr={{ initial: "0", sm: "current" }}
          >
            <Img
              src={image}
              alt={title}
              style={{
                display: "block",
                objectFit: "fill",
                objectPosition: "left top",
                height: "100%",
                width: "100%",
                backgroundColor: "var(--gray-3)",
                boxShadow: "0 0 0 1px var(--gray-3)",
                borderRadius: "0",
              }}
            />
          </Inset>
        ) : null}
        <Flex justify="between" direction="column">
          <Box>
            <Metadata publishedAt={metadata?.publishedAt} mb="1" />
            <Heading size="6" mb="3" wrap="balance">
              {title}
            </Heading>
            <Text as="p" mb="5" color="gray">
              {description}
            </Text>
          </Box>
          <Link asChild>
            <Box>Read more →</Box>
          </Link>
        </Flex>
      </Grid>
    </NextLink>
  </Card>
);

const Metadata = ({
  publishedAt = undefined,
  ...props
}: React.ComponentProps<typeof Flex> & {
  publishedAt?: string;
}): React.JSX.Element => (
  <Flex {...props} width="100%" align="center" gap="2">
    {publishedAt ? (
      <React.Fragment>
        <Text asChild size="2" color="gray">
          <time dateTime={publishedAt}>{formatFullDate(publishedAt)}</time>
        </Text>
        <Text as="p" size="2" color="gray">
          &middot;
        </Text>
        <Text as="p" size="2" color="gray">
          <time dateTime={publishedAt}>{formatRelativeDate(publishedAt)}</time>
        </Text>
      </React.Fragment>
    ) : (
      <Badge variant="surface">draft</Badge>
    )}
  </Flex>
);
