"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";

import { Icons } from "./icons";

type BackButtonProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<typeof Button>
>;

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
