import React from "react";
import { Code as RTCode } from "@radix-ui/themes";

export const Code = ({ ...props }): React.JSX.Element => {
  const className: string | undefined = props.className as string | undefined;
  return className ? (
    <code {...props} className={className} />
  ) : (
    <RTCode {...props} />
  );
};
