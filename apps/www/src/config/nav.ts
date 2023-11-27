import type { NavItem } from "~/types";

interface NavConfig {
  mainNavItems: NavItem[];
}

export const navConfig: NavConfig = {
  mainNavItems: [
    {
      title: "Blog",
      href: "/blog",
      description: "Thoughts, stories, and ideas",
    },
    {
      title: "Projects",
      href: "/projects",
      description: "A showcase of my open source work",
    },
  ],
};
