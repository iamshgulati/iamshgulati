import React from "react";
import { Badge } from "@radix-ui/themes";

interface BadgeWithIndicatorProps {
  indicator: number;
}

export function BadgeWithIndicator({
  indicator,
  children = undefined,
}: React.PropsWithChildren<BadgeWithIndicatorProps>): React.JSX.Element {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <Badge
      variant="soft"
      size="2"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      <span
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          width: `${percentage}%`,
          height: "0.125rem",
          backgroundColor: "currentcolor",
        }}
      />
    </Badge>
  );
}
