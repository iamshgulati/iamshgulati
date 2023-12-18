"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { CopyTextButton } from "./copy-text-button";
import { Pre } from "./pre";

export const PreWithCopyButton = ({ ...props }): React.JSX.Element => {
  const [code, setCode] = React.useState<string>();

  return (
    <Box>
      <Pre
        {...props}
        ref={(node: HTMLPreElement | null): void => {
          if (node) {
            const codeElement: HTMLElement | null = node.querySelector("code");
            setCode(removeDoubleLineBreaks(codeElement?.innerText ?? ""));
          }
        }}
      />
      <CopyTextButton textToCopy={code} />
    </Box>
  );
};

const removeDoubleLineBreaks = (text: string) => text.replace(/\n{2}/g, "\n");
