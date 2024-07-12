import React from "react";
import { Blockquote as RTBlockquote } from "@radix-ui/themes";

export const Blockquote = ({ ...props }): React.JSX.Element => (
  <RTBlockquote
    my="7"
    style={{
      fontStyle: "italic",
    }}
    {...props}
  />
);
