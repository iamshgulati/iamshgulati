import React from "react";
import { AspectRatio, Skeleton } from "@radix-ui/themes";

import { Img } from "./mdx/img";

type PageCoverImageProps = {
  src?: string;
  alt?: string;
};

export const PageCoverImage = ({
  src = undefined,
  alt = undefined,
}: PageCoverImageProps): React.JSX.Element | null =>
  src ? (
    <Skeleton loading={true}>
      <AspectRatio asChild ratio={16 / 9}>
        <Img
          src={src}
          alt={alt}
          style={{
            display: "block",
            objectFit: "cover",
            objectPosition: "top left",
            width: "100%",
            height: "100%",
            backgroundColor: "var(--gray-3)",
            boxShadow: "0 0 0 1px var(--gray-3)",
          }}
        />
      </AspectRatio>
    </Skeleton>
  ) : null;
