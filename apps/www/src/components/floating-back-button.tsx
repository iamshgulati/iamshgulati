"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";

export const FloatingBackButton = (): React.JSX.Element => {
  const router = useRouter();
  return (
    <IconButton
      aria-label="Navigate Back"
      size="3"
      variant="soft"
      color="gray"
      radius="full"
      style={{
        position: "fixed",
        bottom: "8px",
        left: "8px",
        zIndex: "999",
      }}
      onClick={() => router.back()}
    >
      <ChevronLeftIcon width="20" height="20" />
    </IconButton>
  );
};
