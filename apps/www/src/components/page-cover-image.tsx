import React from "react";
import { AspectRatio, Box, Skeleton } from "@radix-ui/themes";

import { Img } from "./mdx/img";

interface PageCoverImageProps {
  src?: string;
  alt?: string;
}
export const PageCoverImage = ({
  src,
  alt,
}: PageCoverImageProps): React.JSX.Element | null =>
  src ? (
    <Box mb="7">
      <Skeleton loading={true}>
        <AspectRatio asChild ratio={16 / 9}>
          <Img
            src={src}
            alt={alt}
            style={{
              display: "block",
              objectFit: "cover",
              width: "100%",
              height: "100%",
              backgroundColor: "var(--gray-3)",
              boxShadow: "0 0 0 1px var(--gray-3)",
            }}
          />
        </AspectRatio>
      </Skeleton>
    </Box>
  ) : null;
