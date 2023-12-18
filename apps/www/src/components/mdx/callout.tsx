import React from "react";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { CalloutIcon, CalloutRoot, CalloutText } from "@radix-ui/themes";

import type { Icon } from "~/components/icons";
import { Icons } from "~/components/icons";

type CalloutProps = React.PropsWithChildren<{
  icon?: keyof typeof Icons;
}> &
  PropsWithoutRefOrColor<typeof CalloutRoot>;

export const Callout = ({
  icon = "InfoCircledIcon",
  children = undefined,
}: CalloutProps): React.JSX.Element => {
  const ComputedIcon: Icon = Icons[icon];
  return (
    <CalloutRoot variant="surface" mt="5" mb="5">
      <CalloutIcon>
        <ComputedIcon />
      </CalloutIcon>
      <CalloutText>{children}</CalloutText>
    </CalloutRoot>
  );
};
