import React from "react";
import { Box } from "@radix-ui/themes";

/**
 * Image element for Next.js
 */
/*
export const Img = ({
  src = undefined,
  alt = undefined,
  width = undefined,
  height = undefined,
  style = undefined,
  ...props
}: React.ComponentProps<"img">): React.JSX.Element | null =>
  src && alt ? (
    <Box asChild my="7">
      <Image
        src={src}
        alt={alt}
        width={width ? (width as number) : 0}
        height={height ? (height as number) : 0}
        sizes="100vw"
        loading="lazy"
        style={{
            width: "100%",
            height: "auto",
            borderRadius: "var(--radius-4)",
            ...style,
        }}
        {...props}
      />
    </Box>
  ) : null;
*/

/**
 * Image element for static site export
 */
export const Img = ({
  src = undefined,
  alt = undefined,
  width = undefined,
  height = undefined,
  style = undefined,
  ...props
}: React.ComponentProps<"img">): React.JSX.Element | null =>
  src && alt ? (
    <Box asChild my="7">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width ? (width as number) : 0}
        height={height ? (height as number) : 0}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "var(--radius-4)",
          ...style,
        }}
        {...props}
      />
    </Box>
  ) : null;
