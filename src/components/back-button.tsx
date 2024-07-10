"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

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
          <ChevronLeftIcon />
          Back
        </React.Fragment>
      )}
    </Button>
  );
};
