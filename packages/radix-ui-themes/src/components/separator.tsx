"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import classNames from "classnames";

import {
  extractMarginProps,
  withBreakpoints,
  withMarginProps,
} from "../helpers";
import type {
  GetPropDefTypes,
  MarginProps,
  PropsWithoutRefOrColor,
} from "../helpers";
import { separatorPropDefs } from "./separator.props";

type SeparatorElement = React.ElementRef<typeof SeparatorPrimitive.Root>;
type SeparatorOwnProps = GetPropDefTypes<typeof separatorPropDefs>;
interface SeparatorProps
  extends PropsWithoutRefOrColor<typeof SeparatorPrimitive.Root>,
    MarginProps,
    SeparatorOwnProps {}
const Separator = React.forwardRef<SeparatorElement, SeparatorProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const {
      className,
      size = separatorPropDefs.size.default,
      color = separatorPropDefs.color.default,
      ...separatorProps
    } = marginRest;
    return (
      <SeparatorPrimitive.Root
        data-accent-color={color}
        {...separatorProps}
        ref={forwardedRef}
        className={classNames(
          "rt-Separator",
          className,
          withBreakpoints(size, "rt-r-size"),
          withMarginProps(marginProps),
        )}
      />
    );
  },
);
Separator.displayName = "Separator";

export { Separator };
export type { SeparatorProps };
