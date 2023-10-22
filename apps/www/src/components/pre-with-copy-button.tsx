"use client";

import React from "react";
import { Box } from "@radix-ui/themes";

import { CopyCodeButton } from "./copy-code-button";
import { Pre } from "./pre";
import styles from "./pre-with-copy-button.module.css";

export const PreWithCopyButton = ({
  children,
  ...props
}: React.PropsWithChildren): React.JSX.Element => {
  const [code, setCode] = React.useState<string | undefined>("");

  return (
    <Box className={styles.Container}>
      <Pre
        {...props}
        ref={(node) => {
          if (node) {
            const codeElement = node.querySelector("code");
            const code = codeElement?.innerText.replace(/\n{2}/g, "\n");
            setCode(code);
          }
        }}
      >
        {children}
        <CopyCodeButton className={styles.CopyButton} code={code} />
      </Pre>
    </Box>
  );
};
