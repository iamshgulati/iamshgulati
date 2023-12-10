import type * as _CSS from "csstype";

declare module "csstype" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type Properties = Record<`--${string}`, any>;
}
