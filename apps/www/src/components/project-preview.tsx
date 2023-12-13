import React from "react";
import { Heading, Link, Text } from "@radix-ui/themes";

import { NextLink } from "~/lib/link";
import styles from "./project-preview.module.css";

interface ProjectPreviewProps {
  slug: string;
  title: string;
  description?: string;
}

export const ProjectPreview = ({
  slug,
  title,
  description = undefined,
}: ProjectPreviewProps) => (
  <React.Fragment>
    <NextLink href={slug} passHref legacyBehavior>
      <Link>
        <Heading
          size={{ initial: "5", xs: "6" }}
          mb="1"
          className={styles.ProjectPreviewHeading}
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
