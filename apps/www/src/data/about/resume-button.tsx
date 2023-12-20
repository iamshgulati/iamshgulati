import Link from "next/link";
import { ArrowTopRightIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";

export const ResumeButton = () => (
  <Flex align="center" justify="center">
    <Link href={siteConfig.links.resume} target="_blank" rel="noreferrer">
      <Button
        variant="solid"
        size="3"
        style={{
          paddingLeft: "var(--space-5)",
          paddingRight: "var(--space-5)",
          gap: "var(--space-2)",
        }}
      >
        <FileTextIcon width="18" height="18" />
        <Text>RESUME</Text>
        <ArrowTopRightIcon width="18" height="18" />
      </Button>
    </Link>
  </Flex>
);
