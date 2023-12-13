import React from "react";
import { Heading, Link, Text } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import styles from "./blog-post-preview.module.css";

interface BlogPostPreviewProps {
  slug: string;
  title: string;
  description?: string;
}

export const BlogPostPreview = ({
  slug,
  title,
  description = undefined,
}: BlogPostPreviewProps) => (
  <React.Fragment>
    <NextLink href={slug} passHref legacyBehavior>
      <Link>
        <Heading
          size={{ initial: "5", xs: "6" }}
          mb="1"
          className={styles.BlogPostPreviewHeading}
        >
          {title}
        </Heading>
      </Link>
    </NextLink>
    {description && (
      <Text as="p" color="gray">
        {description}
      </Text>
    )}
  </React.Fragment>
);
