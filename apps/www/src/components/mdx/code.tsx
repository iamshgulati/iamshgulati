import { Code as RTCode } from "@radix-ui/themes";

export const Code = ({ ...props }) => {
  const className = props.className as string | undefined;
  return className ? (
    <code {...props} className={className} />
  ) : (
    <RTCode {...props} />
  );
};
