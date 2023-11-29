import type { PropDef } from "..";
import { themePropDefs } from "../../theme-options";

const radiusProp = {
  type: "enum",
  values: themePropDefs.radius.values,
  default: undefined,
} satisfies PropDef<(typeof themePropDefs.radius.values)[number]>;

export { radiusProp };
