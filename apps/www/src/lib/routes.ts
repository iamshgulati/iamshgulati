import type { Route } from "next";

import type { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import type { ContentPage } from "./mdx";
import { getFrontmatter } from "./mdx";

export type PageLabel = "Soon" | "Preview" | "New";

export interface AppPage {
  slug: Route;
  title: string;
  description?: string;
  label?: PageLabel;
  disabled?: boolean;
  icon?: keyof typeof Icons;
}

export interface AppRoute {
  label: string;
  pages: AppPage[] | ContentPage[];
}

export type AllRoutes = Record<
  "productLinks" | "personal" | "projects" | "blog" | "social" | "legal",
  AppRoute
>;

export const allRoutes: AllRoutes = {
  productLinks: {
    label: "Most Visited",
    pages: [
      { title: "Home", slug: "/", icon: "HomeIcon" },
      { title: "About", slug: "/about", icon: "PersonIcon" },
      { title: "Projects", slug: "/projects", icon: "CubeIcon" },
      { title: "Blog", slug: "/blog", icon: "FileTextIcon" },
    ],
  },
  personal: {
    label: "Personal",
    pages: [{ title: "Quotes", slug: "/quotes", icon: "QuoteIcon" }],
  },
  projects: {
    label: "Projects",
    pages: [
      ...getFrontmatter("src/app/(content)", "/projects").map((page) => {
        page.icon = "CubeIcon";
        return page;
      }),
    ],
  },
  blog: {
    label: "Blog Posts",
    pages: [
      ...getFrontmatter("src/app/(content)", "/blog").map((page) => {
        page.icon = "FileTextIcon";
        return page;
      }),
    ],
  },
  social: {
    label: "Social",
    pages: [
      {
        title: "GitHub",
        slug: siteConfig.links.github,
        icon: "GitHubLogoIcon",
      },
      {
        title: "LinkedIn",
        slug: siteConfig.links.linkedin,
        icon: "LinkedInLogoIcon",
      },
      {
        title: "Twitter",
        slug: siteConfig.links.twitter,
        icon: "TwitterLogoIcon",
      },
      {
        title: "Threads",
        slug: siteConfig.links.threads,
        icon: "ThreadsLogoIcon",
      },
      {
        title: "Mastodon",
        slug: siteConfig.links.mastodon,
        icon: "MastodonLogoIcon",
      },
      {
        title: "Bluesky",
        slug: siteConfig.links.bluesky,
        icon: "Link2Icon",
      },
    ],
  },
  legal: {
    label: "Legal",
    pages: [
      {
        title: "Credits",
        slug: "/credits",
        icon: "HeartIcon",
      },
      {
        title: "Privacy",
        slug: "/privacy",
        icon: "LockClosedIcon",
      },
      {
        title: "Terms",
        slug: "/terms",
        icon: "InfoCircledIcon",
      },
    ],
  },
};
