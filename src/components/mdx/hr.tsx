import React from "react";
import { Separator } from "@radix-ui/themes";

export const Hr = ({ ...props }): React.JSX.Element => (
  <Separator {...props} size="3" my="7" style={{ marginInline: "auto" }} />
);
