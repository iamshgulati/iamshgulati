import { Grid } from "@radix-ui/themes";

export const CeritificationBadgesGrid = ({
  ...props
}: React.ComponentPropsWithoutRef<typeof Grid>) => (
  <Grid
    align="center"
    columns={{ initial: "3", xs: "5" }}
    gap="5"
    pt="3"
    {...props}
  />
);
