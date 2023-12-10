import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CalloutIcon, CalloutRoot, CalloutText, Link } from "@radix-ui/themes";

export const PagespeedResultsCallout = () => (
  <CalloutRoot variant="surface" mt="5" mb="5">
    <CalloutIcon>
      <InfoCircledIcon />
    </CalloutIcon>
    <CalloutText>
      Doing this cut down the overall css bundle by half. And{" "}
      <Link href="https://pagespeed.web.dev">Pagespeed</Link> also stopped
      complaining about unused css.
    </CalloutText>
  </CalloutRoot>
);
