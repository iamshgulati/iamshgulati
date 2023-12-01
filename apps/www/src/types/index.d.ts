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

export type NavItemLabel = "Soon" | "Preview" | "New";

interface NavItem {
  slug: Route;
  title: string;
  description?: string;
  label?: NavItemLabel;
  disabled?: boolean;
  icon?: keyof typeof Icons;
}

type NavItemWithChildren = {
  title: string;
  description?: string;
  label?: NavItemLabel;
  disabled?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      slug: Route;
      items?: never;
    }
  | {
      slug?: Route;
      items: NavItem[];
    }
);
