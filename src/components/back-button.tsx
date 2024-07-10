"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes";

import { Icons } from "./icons";

export const BackButton = ({
  children = undefined,
  style = undefined,
  ...props
}: React.ComponentProps<typeof Button>): React.JSX.Element => {
  const router = useRouter();

  return (
    <Button
      {...props}
      variant="ghost"
      style={{ ...style }}
      onClick={() => router.back()}
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
