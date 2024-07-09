import { Grid } from "@radix-ui/themes";

export const CeritificationBadgesGrid = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Grid>) => (
  <Grid
    {...props}
    align="center"
    columns={{ initial: "3", xs: "5" }}
    gap="5"
    pt="3"
  />
);
