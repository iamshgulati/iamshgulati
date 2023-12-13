import { Link2Icon } from "@radix-ui/react-icons";
import type { PropsWithoutRefOrColor } from "@radix-ui/themes";
import { Link } from "@radix-ui/themes";

import { cn } from "~/lib/utils";
import styles from "./heading-link.module.css";

export const HeadingLink = ({
  id,
  children,
  className,
  ...props
}: PropsWithoutRefOrColor<"a">): React.JSX.Element => (
  <Link
    {...props}
    id={id}
    href={`#${id}`}
    color="gray"
    highContrast
    underline="hover"
    className={cn(className, styles.HeadingLink)}
  >
    {children}
    <Link2Icon aria-hidden />
  </Link>
);
