import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { Grid } from "@radix-ui/themes";

export const CeritificationBadgesGrid = ({
  ...props
}: PropsWithoutRefOrColor<typeof Grid>) => (
  <Grid
    {...props}
    align="center"
    columns={{ initial: "3", xs: "5" }}
    gap="5"
    pt="3"
  />
);
