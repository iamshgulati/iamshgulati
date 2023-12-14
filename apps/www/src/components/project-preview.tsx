import React from "react";
import { Box, Flex, Heading, Link, Text } from "@radix-ui/themes";

import { formatDateRelative } from "~/lib/date";
import { NextLink } from "~/lib/link";
import { BoxLink } from "./box-link";
import styles from "./project-preview.module.css";

interface ProjectPreviewProps {
  slug: string;
  title: string;
  description?: string;
  publishedAt?: string;
  readingTime?: string;
}

export const ProjectPreview = ({
  slug,
  title,
  description = undefined,
  publishedAt = undefined,
  readingTime = undefined,
}: ProjectPreviewProps) => (
  <Box className={styles.ProjectPreviewContainer}>
    <NextLink href={slug} passHref legacyBehavior>
      <BoxLink ariaLabel={title}>
        <Link asChild className={styles.ProjectPreviewHeading}>
          <Heading size={{ initial: "5", xs: "6" }} mb="2">
            {title}
          </Heading>
        </Link>
        {description && (
          <Text as="p" color="gray">
            {description}
          </Text>
        )}
        <Flex align="center" gap="2" className={styles.ProjectPreviewMetadata}>
          {publishedAt && (
            <Text asChild size="1">
              <time dateTime={publishedAt}>
                {formatDateRelative(publishedAt).toString()}
              </time>
            </Text>
          )}
          <Text size="1">&middot;</Text>
          {readingTime && (
            <Text as="p" size="1">
              {readingTime}
            </Text>
          )}
        </Flex>
      </BoxLink>
    </NextLink>
  </Box>
);
