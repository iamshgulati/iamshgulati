import React from "react";
import { IconButton, Link } from "@radix-ui/themes";

import type { Icon } from "./icons";
import { Icons } from "./icons";

type LinkSocialIconButtonProps = React.ComponentProps<typeof IconButton> & {
  href: string;
  icon?: keyof typeof Icons;
  ariaLabel: string;
  iconProps?: React.ComponentProps<Icon>;
};

export const LinkSocialIconButton = ({
  href,
  icon = "Link2Icon",
  ariaLabel,
  iconProps = { width: "16", height: "16" },
  ...props
}: LinkSocialIconButtonProps): React.JSX.Element => {
  const SocialIcon: Icon = Icons[icon];

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <IconButton {...props} size="3" variant="ghost" color="gray">
        <SocialIcon {...iconProps} aria-label={ariaLabel} />
      </IconButton>
    </Link>
  );
};
