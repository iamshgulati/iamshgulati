import { AllFrontmatter } from "~/lib/mdx-frontmatter";
import { CommandMenu } from "./command-menu";
import { Header } from "./header";
import type { HeaderProps } from "./header";
import { MainNav } from "./main-nav";

export function MarketingHeader({ ...props }: HeaderProps): React.JSX.Element {
  return (
    <Header
      commandMenu={<CommandMenu frontmatter={AllFrontmatter} />}
      {...props}
    >
      <MainNav
        items={[
          {
            title: "About Me",
            slug: "/about",
          },
          {
            title: "Contact",
            slug: "/contact",
          },
        ]}
      />
    </Header>
  );
}
