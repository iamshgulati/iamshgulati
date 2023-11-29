import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  Link,
  Strong,
} from "@radix-ui/themes";

export const PagespeedResultsCallout = () => (
  <CalloutRoot variant="surface" mt="4" mb="4">
    <CalloutIcon>
      <InfoCircledIcon />
    </CalloutIcon>
    <CalloutText>
      Doing this cut down the overall css bundle by <Strong>50%</Strong>. And{" "}
      <Link href="https://pagespeed.web.dev">Pagespeed</Link> also stopped
      complaining about unused css.
    </CalloutText>
  </CalloutRoot>
);
