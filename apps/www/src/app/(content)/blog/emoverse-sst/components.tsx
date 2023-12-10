import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CalloutIcon, CalloutRoot, CalloutText } from "@radix-ui/themes";

export const ComingSoonCallout = () => (
  <CalloutRoot variant="surface" color="amber">
    <CalloutIcon>
      <InfoCircledIcon />
    </CalloutIcon>
    <CalloutText>
      Editing is in progress. This post will be available soon.
    </CalloutText>
  </CalloutRoot>
);
