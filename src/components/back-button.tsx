"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";

import { Icons } from "./icons";

interface BackButtonProps
  extends React.PropsWithChildren<
    React.ComponentPropsWithoutRef<typeof Button>
  > {
  style?: React.CSSProperties;
}

export const BackButton = ({
  children = undefined,
  style = undefined,
  ...props
}: BackButtonProps): React.JSX.Element => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      style={{ ...style }}
      onClick={() => router.back()}
      {...props}
    >
      {children ?? (
        <React.Fragment>
          <Icons.ChevronLeftIcon />
          Back
        </React.Fragment>
      )}
    </Button>
  );
};
