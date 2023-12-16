"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export const BackButton = ({
  children = undefined,
  ...props
}: React.ComponentProps<typeof Button>) => {
  const router = useRouter();

  return (
    <Button variant="ghost" {...props} onClick={() => router.back()}>
      {children ?? (
        <React.Fragment>
          <ChevronLeftIcon />
          Back
        </React.Fragment>
      )}
    </Button>
  );
};
