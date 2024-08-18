import type React from "react";

/**
 * Image element for Next.js
 */
/*
export const Image = ({
  src = undefined,
  alt = undefined,
  width = undefined,
  height = undefined,
  style = undefined,
  ...props
}: React.ComponentProps<"img">): React.JSX.Element | null =>
  src && alt ? (
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
  ) : null;
*/

/**
 * Image element for static site export
 */
export const Image = ({
	src = undefined,
	alt = undefined,
	width = undefined,
	height = undefined,
	style = undefined,
	...props
}: React.ComponentProps<"img">): React.JSX.Element | null =>
	src && alt ? (
		// biome-ignore lint/a11y/useAltText: <explanation>
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
	) : null;
