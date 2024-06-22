import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";

export const ResumeButton = () => (
  <Flex
    direction={{ initial: "column", xs: "row" }}
    justify="center"
    style={{
      textAlign: "center",
    }}
  >
    <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
      <Button
        size="3"
        style={{
          width: "100%",
          paddingLeft: "var(--space-5)",
          paddingRight: "var(--space-5)",
          gap: "var(--space-2)",
        }}
      >
        <ArrowTopRightIcon width="18" height="18" aria-hidden />
        <Text>RESUME</Text>
      </Button>
    </a>
  </Flex>
);
