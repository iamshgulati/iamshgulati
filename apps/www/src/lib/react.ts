import React from "react";

export const extractTextFromChildren = (
  node?: React.ReactNode,
): string | null => {
  if (React.isValidElement(node)) {
    const { children } =
      node.props as React.PropsWithChildren<React.ReactElement>;
    return extractTextFromChildren(children);
  }

  if (Array.isArray(node)) {
    return node.map(extractTextFromChildren).flat().filter(Boolean).join("");
  }

  if (typeof node === "string") {
    return node;
  }

  return null;
};
