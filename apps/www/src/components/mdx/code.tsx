import React from "react";
import { Code as RTCode } from "@radix-ui/themes";
import { highlight } from "sugar-high";

export const Code = ({ ...props }): React.JSX.Element => {
  const className: string | undefined = props.className as string | undefined;
  if (className === undefined) {
    return <RTCode {...props} />;
  } else {
    const children: string = (props.children as string) ?? "";
    return (
      <code
        className={className}
        dangerouslySetInnerHTML={{ __html: highlight(children) }}
      />
    );
  }
};
