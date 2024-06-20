import React from "react";
import Image from "next/image";

export const Img = ({
  src,
  alt,
  width = undefined,
  height = undefined,
}: {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}): React.JSX.Element => (
  <Image
    src={src}
    alt={alt}
    width={width ? width as number : 0}
    height={height ? height as number : 0}
    sizes="100vw"
    loading="lazy"
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "var(--radius-4)",
    }}
  />
);

/*

export const Img = ({ alt = "", ...props }): React.JSX.Element => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    {...props}
    alt={alt}
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "var(--radius-4)",
    }}
  />
);
*/
