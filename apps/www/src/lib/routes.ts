import type { Frontmatter } from "~/types/frontmatter";
import { siteConfig } from "~/config/site";
import { getAllFrontmatter } from "./mdx";

export interface AppRoute {
  label: string;
  pages: Frontmatter[];
}

export type AllRoutes = Record<
  | "navLinks"
  | "personal"
  | "projects"
  | "blog"
  | "private"
  | "social"
  | "legal",
  AppRoute
>;

export const allRoutes: AllRoutes = {
  navLinks: {
    label: "Most Visited",
    pages: [
      { title: "Home", slug: "/", icon: "HomeIcon" },
      { title: "Work", slug: "/work", icon: "HammerIcon" },
      { title: "Blog", slug: "/blog", icon: "FileTextIcon" },
      // { title: "Projects", slug: "/projects", icon: "CubeIcon" },
      { title: "Quotes", slug: "/quotes", icon: "QuoteIcon" },
      { title: "About Me", slug: "/about", icon: "PersonIcon" },
    ],
  },
  blog: {
    label: "Blog Posts",
    pages: [
      ...(await getAllFrontmatter("/src/data", "/blog")).map(
        (page: Frontmatter) => {
          page.icon = "FileTextIcon";
          return page;
        },
      ),
    ],
  },
  projects: {
    label: "Projects",
    pages: [
      // ...(await getAllFrontmatter("/src/data", "/projects")).map(
      //   (page: Frontmatter) => {
      //     page.icon = "CubeIcon";
      //     return page;
      //   },
      // ),
    ],
  },
  personal: {
    label: "Personal",
    pages: [],
  },
  private: {
    label: "Private Pages",
    pages: [
      ...(await getAllFrontmatter("/src/data", "/private")).map(
        (page: Frontmatter) => {
          page.icon = "FileTextIcon";
          return page;
        },
      ),
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
        title: "Bluesky",
        slug: siteConfig.links.bluesky,
        icon: "BlueskyLogoIcon",
      },
      {
        title: "Mastodon",
        slug: siteConfig.links.mastodon,
        icon: "MastodonLogoIcon",
      },
      {
        title: "Threads",
        slug: siteConfig.links.threads,
        icon: "ThreadsLogoIcon",
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
