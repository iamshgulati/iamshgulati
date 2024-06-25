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
  publishedAt?: string;
}

export const LinkCard = ({
  href,
  title,
  description = undefined,
  image = undefined,
  publishedAt = undefined,
}: LinkCardProp): React.JSX.Element => (
  <Card asChild size="3" variant="surface">
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
                objectFit: "cover",
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
            <Flex width="100%" align="center" gap="2" mb="2">
              {publishedAt ? (
                <React.Fragment>
                  <Text asChild size="1" color="gray">
                    <time dateTime={publishedAt}>
                      {formatFullDate(publishedAt)}
                    </time>
                  </Text>
                  <Text as="p" size="1" color="gray">
                    &middot;
                  </Text>
                  <Text as="p" size="1" color="gray">
                    <time dateTime={publishedAt}>
                      {formatRelativeDate(publishedAt)}
                    </time>
                  </Text>
                </React.Fragment>
              ) : (
                <Badge variant="surface">draft</Badge>
              )}
            </Flex>
            <Heading size={{ initial: "5", sm: "6" }} mb="2">
              {title}
            </Heading>
            <Text as="p" size="3" mb="3" color="gray">
              {description}
            </Text>
          </Box>
          <Link asChild>
            <Text size="2">Read more →</Text>
          </Link>
        </Flex>
      </Grid>
    </NextLink>
  </Card>
);
