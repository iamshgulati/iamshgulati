import React from "react";
import { CheckIcon, ClipboardIcon } from "@radix-ui/react-icons";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { IconButton } from "@radix-ui/themes";
import copy from "copy-to-clipboard";

export const CopyCodeButton = ({
  code = undefined,
  ...props
}: PropsWithoutRefOrColor<typeof IconButton> & {
  code?: string;
}): React.JSX.Element => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect((): void => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  return (
    <IconButton
      {...props}
      aria-label="Copy code to clipboard"
      onClick={(): void => {
        copy(code ?? "");
        setHasCopied(true);
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
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </IconButton>
  );
};
