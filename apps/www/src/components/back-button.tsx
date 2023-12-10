"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";

export const BackButton = ({
  children,
  ...props
}: React.PropsWithChildren & React.ComponentPropsWithoutRef<typeof Button>) => {
  const router = useRouter();

  return (
    <Button variant="ghost" {...props} onClick={() => router.back()}>
      <ChevronLeftIcon />
      {children ?? "Back"}
    </Button>
  );
};
