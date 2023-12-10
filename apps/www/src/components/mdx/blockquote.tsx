import { Blockquote as RTBlockquote } from "@radix-ui/themes";

export const Blockquote = ({ ...props }): React.JSX.Element => (
  <RTBlockquote
    {...props}
    my="6"
    style={{
      fontStyle: "italic",
    }}
  />
);
