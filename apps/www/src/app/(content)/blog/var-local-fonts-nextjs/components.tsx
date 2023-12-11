import { InfoCircledIcon } from "@radix-ui/react-icons";
import { CalloutIcon, CalloutRoot, CalloutText, Code } from "@radix-ui/themes";

export const WeightPropCallout = () => (
  <CalloutRoot variant="surface" mt="5" mb="5">
    <CalloutIcon>
      <InfoCircledIcon />
    </CalloutIcon>
    <CalloutText>
      Setting the <Code>{`weight: "100 900"`}</Code> was important here. This is
      not documented clearly in Next.js documentation, and without it all my
      font sizes were being synthesized from just single regular weight.
    </CalloutText>
  </CalloutRoot>
);