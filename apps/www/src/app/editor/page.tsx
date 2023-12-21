/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Suspense } from "react";
import { Flex, Section } from "@radix-ui/themes";

import { BackButton } from "~/components/back-button";
import { TitleAndDescription } from "~/components/title-and-description";
import MDXEditor, { metadata } from "./editor.mdx";

export default function OtherPage() {
  return (
    <React.Fragment>
      <Section size="1" pt="4">
        <TitleAndDescription
          title={metadata.title}
          description={metadata.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Suspense fallback={null}>
          <MDXEditor />
        </Suspense>
      </Section>
      <Section size={{ initial: "1", xs: "2" }} pb="0">
        <Flex align="center" justify="center">
          <BackButton size="3" />
        </Flex>
      </Section>
    </React.Fragment>
  );
}
