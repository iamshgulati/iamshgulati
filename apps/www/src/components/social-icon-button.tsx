import { AccessibleIcon, IconButton, Link } from "@radix-ui/themes";

import { Icons } from "./icons";

export const SocialIconButton = ({
  icon,
  href,
}: {
  icon: keyof typeof Icons;
  href: string;
}): React.JSX.Element => {
  const SocialIcon = Icons[icon];
  const SocialNetwork = icon.replace("Logo", "").replace("Icon", "");

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <IconButton size="3" variant="ghost" color="gray">
        <AccessibleIcon label={SocialNetwork}>
          <SocialIcon width="16" height="16" />
        </AccessibleIcon>
      </IconButton>
    </Link>
  );
};
