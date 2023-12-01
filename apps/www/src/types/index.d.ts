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

export type PageLabel = "Soon" | "Preview" | "New";

export interface Page {
  slug: Route;
  title: string;
  description?: string;
  label?: PageLabel;
  disabled?: boolean;
  icon?: keyof typeof Icons;
}

export interface AppRoute {
  label: string;
  pages: Page[];
}

export type AllAppRouteProps = Record<
  "productLinks" | "home" | "professional" | "personal" | "social" | "legal",
  AppRoute
>;

export interface Frontmatter {
  slug: string;
  slugAsParams: string;
  title: string;
  description?: string;
  publishedAt?: string;
  image?: string;
  by?: "shubham";
  category?: string;
  tags?: string[];
  icon?: keyof typeof Icons;
  label?: PageLabel;
}

export type ProjectFrontmatter = Frontmatter & {
  summary?: string;
  link?: string;
  sourceCodeLink?: string;
};

export interface ContentRoute {
  label: string;
  pages: Frontmatter[];
}

export type AllContentRouteProps = Record<
  "blogPosts" | "projects" | "thoughts",
  ContentRoute
>;
