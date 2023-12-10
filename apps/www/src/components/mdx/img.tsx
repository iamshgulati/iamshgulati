/* eslint-disable @next/next/no-img-element */

export const Img = ({ alt = "", ...props }): React.JSX.Element => (
  <img
    {...props}
    alt={alt}
    style={{
      maxWidth: "100%",
      verticalAlign: "middle",
      borderRadius: "var(--radius-4)",
    }}
  />
);
