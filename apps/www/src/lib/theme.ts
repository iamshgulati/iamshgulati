import type { badgePropDefs } from "@radix-ui/themes";

import type { NavItemLabel } from "~/types";

export const getBadgeColor = (
  label: NavItemLabel,
): (typeof badgePropDefs.color.values)[number] => {
  switch (label) {
    case "Preview":
      return "indigo";
    case "New":
      return "green";
    default:
      return "amber";
  }
};
