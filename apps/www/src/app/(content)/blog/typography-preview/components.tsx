import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  Code,
  Link,
} from "@radix-ui/themes";

export const TailwindCSSCallout = () => (
  <CalloutRoot variant="surface" mt="5" mb="5">
    <CalloutIcon>
      <InfoCircledIcon />
    </CalloutIcon>
    <CalloutText>
      The text below is from the{" "}
      <Link href="https://play.tailwindcss.com/uj1vGACRJA?layout=preview">
        Tailwind CSS
      </Link>{" "}
      docs. I copied it here to test the markdown styles.
    </CalloutText>
  </CalloutRoot>
);

export const ColocatedImagesCallout = () => (
  <CalloutRoot variant="surface" color="amber" mt="5" mb="5">
    <CalloutIcon>
      <InfoCircledIcon />
    </CalloutIcon>
    <CalloutText>
      Unfortunately, colocated images do not work as of yet. But they will be
      sometime later. For now, I can put them in <Code>/public</Code> directory
      and load from there.
    </CalloutText>
  </CalloutRoot>
);
