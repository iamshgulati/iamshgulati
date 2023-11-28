import type { Route } from "next";

import type { Icons } from "~/components/icons";

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    resume: string;
    linkedin: string;
    github: string;
    githubGists: string;
    twitter: string;
    threads: string;
    mastodon: string;
    bluesky: string;
  };
  og: {
    displayUrl: string;
    displayHandle: string;
  };
}

interface NavItem {
  title: string;
  description?: string;
  href: Route;
  external?: boolean;
  disabled?: boolean;
  icon?: keyof typeof Icons;
}

type NavItemWithChildren = {
  title: string;
  description?: string;
  external?: boolean;
  disabled?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: Route;
      items?: never;
    }
  | {
      href?: Route;
      items: NavItem[];
    }
);
