"use client";

import React from "react";
import { IconButton } from "@radix-ui/themes";

import { Icons } from "../icons";

export const CopyTextButton = ({
  textToCopy = undefined,
  ...props
}: React.ComponentPropsWithoutRef<typeof IconButton> & {
  textToCopy?: string;
}): React.JSX.Element => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect((): void => {
    if (copied) setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  const copyToClipboard = (textToCopy: string) => {
    window.navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  return (
    <IconButton
      {...props}
      aria-label="Copy code to clipboard"
      onClick={(): void => {
        copyToClipboard(textToCopy ?? "");
        setCopied(true);
      }}
      mt="3"
      mr="3"
      color="gray"
      variant="soft"
      style={{
        position: "absolute",
        top: "0",
        right: "0",
      }}
    >
      {copied ? <Icons.CheckIcon /> : <Icons.ClipboardIcon />}
    </IconButton>
  );
};
