import type { badgePropDefs } from "@radix-ui/themes";

import type { PageLabel } from "~/types";

export const getBadgeColor = (
  label: PageLabel,
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
