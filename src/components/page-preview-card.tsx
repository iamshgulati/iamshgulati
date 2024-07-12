import React from "react";
import {
  AspectRatio,
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

import type { Frontmatter } from "~/types/frontmatter";
import { NextLink } from "~/lib/link";
import { Img } from "./mdx/img";
import { PageMeta } from "./page-meta";

interface PagePreviewCardProps {
  page: Frontmatter;
  imageStyle?: {
    width?: string | number;
    height?: string | number;
  };
}

export const PagePreviewCard = ({
  page,
}: PagePreviewCardProps): React.JSX.Element => (
  <Card asChild size="3" variant="classic">
    <NextLink href={page.slug}>
      <Grid columns={{ initial: "1", sm: "2" }} width="100%">
        {page.image ? (
          <Inset
            clip="padding-box"
            side={{ initial: "top", sm: "left" }}
            pb={{ initial: "current", sm: "0" }}
            pr={{ initial: "0", sm: "current" }}
          >
            <Skeleton loading={true}>
              <AspectRatio asChild ratio={16 / 9}>
                <Img
                  src={page.image}
                  alt={page.title}
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
              <PageMeta size="2" publishedAt={page.publishedAt} />
            </Flex>
            <Heading size="5" mb="2">
              {page.title}
            </Heading>
            <Text as="p" size="3" mb="3" color="gray">
              {page.description}
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