/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Suspense } from "react";
import { Section } from "@radix-ui/themes";

import { PageTitleAndDescription } from "~/components/page-title-and-description";
import MDXEditor, { metadata } from "./editor.mdx";

export default function OtherPage() {
  return (
    <React.Fragment>
      <Section size="1" pt="4">
        <PageTitleAndDescription
          title={metadata.title}
          description={metadata.description}
        />
      </Section>
      <Section size={{ initial: "1", xs: "2" }}>
        <Suspense fallback={null}>
          <MDXEditor />
        </Suspense>
      </Section>
    </React.Fragment>
  );
}
