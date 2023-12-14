import Image from "next/image";

export const _Img = ({ alt = "", ...props }): React.JSX.Element => (
  // eslint-disable-next-line @next/next/no-img-element
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

export const Img = ({
  src,
  alt,
  width,
  height,
}: {
  src?: string | undefined;
  alt?: string | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
}): React.JSX.Element => (
  <Image
    src={src!}
    alt={alt!}
    width={width as number}
    height={height as number}
    layout="responsive"
    loading="lazy"
    style={{
      borderRadius: "var(--radius-4)",
    }}
  />
);
