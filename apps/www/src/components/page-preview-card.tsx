import React from "react";
import {
  AspectRatio,
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Link,
  Skeleton,
  Text,
} from "@radix-ui/themes";

import { formatFullDate, formatRelativeDate } from "~/lib/date";
import { NextLink } from "~/lib/link";
import { Img } from "./mdx/img";

interface PagePreviewCardProps {
  href: string;
  title: string;
  description?: string;
  publishedAt?: string;
  image?: string;
  imageStyle?: {
    width?: string | number;
    height?: string | number;
  };
}

export const PagePreviewCard = ({
  href,
  title,
  description = undefined,
  publishedAt = undefined,
  image = undefined,
}: PagePreviewCardProps): React.JSX.Element => (
  <Card asChild size="3" variant="ghost" m="5">
    <NextLink href={href}>
      <Grid columns={{ initial: "1", sm: "2" }} width="100%">
        {image ? (
          <Inset
            clip="padding-box"
            side={{ initial: "top", sm: "left" }}
            pb={{ initial: "current", sm: "0" }}
            pr={{ initial: "0", sm: "current" }}
          >
            <Skeleton loading={true}>
              <AspectRatio asChild ratio={16 / 9}>
                <Img
                  src={image}
                  alt={title}
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "var(--gray-3)",
                    boxShadow: "0 0 0 1px var(--gray-3)",
                    borderRadius: "0",
                  }}
                />
              </AspectRatio>
            </Skeleton>
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
