import React from "react";

export const BackgroundImage = ({
  style,
  ...props
}: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    width="2560"
    height="1920"
    viewBox="0 0 2560 1920"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.6, ...style }}
    {...props}
  ></svg>
);
