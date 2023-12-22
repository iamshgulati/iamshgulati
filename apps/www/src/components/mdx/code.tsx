import React from "react";
import { Code as RTCode } from "@radix-ui/themes";

import { highlight } from "~/lib/code-highlighter";

export const Code = async ({ ...props }): Promise<React.JSX.Element> => {
  const className: string | undefined = props.className as string | undefined;
  if (className) {
    const code: string = (props.children as string) ?? "";
    const lang: string = className.replace("language-", "");
    return (
      <code
        className={className}
        dangerouslySetInnerHTML={{ __html: await highlight({ code, lang }) }}
      />
    );
  } else {
    return <RTCode {...props} />;
  }
};
