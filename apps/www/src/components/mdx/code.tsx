import React from "react";
import { Code as RTCode } from "@radix-ui/themes";

import { codeToHtml } from "~/lib/code-highlighter";
import { removeDoubleLineBreaks, removeFinalBlankLine } from "~/lib/strings";

export const Code = async ({ ...props }): Promise<React.JSX.Element> => {
  const className: string | undefined = props.className as string | undefined;
  if (className) {
    const children: string = removeFinalBlankLine(
      removeDoubleLineBreaks((props.children as string) ?? ""),
    );
    const language: string = className.replace("language-", "");
    const html = await codeToHtml({
      code: children,
      language: language,
    });

    return (
      <code
        className={className}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    );
  } else {
    return <RTCode {...props} />;
  }
};
