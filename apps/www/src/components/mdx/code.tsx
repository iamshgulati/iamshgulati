import React from "react";
import { Code as RTCode } from "@radix-ui/themes";

import { highlight } from "~/lib/code-highlighter";

export const Code = async ({ ...props }): Promise<React.JSX.Element> => {
  const className: string | undefined = props.className as string | undefined;
  if (className) {
    const children: string = (props.children as string) ?? "";
    const language: string = className.replace("language-", "");
    const preElementHtml = await highlight({
      code: children,
      language: language,
    });

    return (
      <code
        className={className}
        dangerouslySetInnerHTML={{
          __html: preElementHtml,
        }}
      />
    );
  } else {
    return <RTCode {...props} />;
  }
};
