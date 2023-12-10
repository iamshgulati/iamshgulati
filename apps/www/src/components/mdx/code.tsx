import { Code as RTCode } from "@radix-ui/themes";

export const Code = ({ ...props }) => {
  const className = props.className as string | undefined;
  const isInlineCode = !className;
  return isInlineCode ? (
    <RTCode {...props} className={className} />
  ) : (
    <code {...props} className={className} />
  );
};
