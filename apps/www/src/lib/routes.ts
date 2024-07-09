import type { Frontmatter } from "~/types/frontmatter";
import { siteConfig } from "~/config/site";
import { getAllFrontmatter } from "./mdx";

export interface AppRoute {
  label: string;
  slug: string;
  pages?: Frontmatter[];
}

export type AllRoutes = Record<
  | "mainNavLinks"
  | "home"
  | "about"
  | "contact"
  | "credits"
  | "privacy"
  | "private"
  | "quotes"
  | "terms"
  | "work"
  | "blog"
  | "projects"
  | "social"
  | "legal",
  AppRoute
>;

export const allRoutes: AllRoutes = {
  mainNavLinks: {
    label: "Most Visited",
    slug: "",
    pages: [
      { title: "Home", slug: "/", icon: "HomeIcon" },
      { title: "Work", slug: "/work", icon: "HammerIcon" },
    ],
  },

  home: {
    label: "Home",
    slug: "/",
  },

  about: {
    label: "About",
    slug: "/home/about",
  },

  contact: {
    label: "Contact",
    slug: "/home/contact",
  },

  credits: {
    label: "Credits",
    slug: "/home/credits",
  },

  privacy: {
    label: "Privacy Policy",
    slug: "/home/privacy",
  },

  private: {
    label: "Private",
    slug: "",
    pages: [
      ...(await getAllFrontmatter("/src/data", "/home/private")).map(
        (page: Frontmatter) => {
          page.icon = "FileTextIcon";
          return page;
        },
      ),
    ],
  },

  quotes: {
    label: "Quotes",
    slug: "/home/quotes",
  },

  terms: {
    label: "Terms of Service",
    slug: "/home/terms",
  },

  work: {
    label: "Work",
    slug: "/work",
  },

  blog: {
    label: "Blog",
    slug: "/work/blog",
    pages: [
      ...(await getAllFrontmatter("/src/data", "/work/blog")).map(
        (page: Frontmatter) => {
          page.icon = "FileTextIcon";
          return page;
        },
      ),
    ],
  },

  projects: {
    label: "Projects",
    slug: "/work/projects",
    pages: [
      ...(await getAllFrontmatter("/src/data", "/work/projects")).map(
        (page: Frontmatter) => {
          page.icon = "CubeIcon";
          return page;
        },
      ),
    ],
  },

  social: {
    label: "Social",
    slug: "",
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
    slug: "",
    pages: [
      {
        title: "Credits",
        slug: "/home/credits",
        icon: "HeartIcon",
      },
      {
        title: "Privacy",
        slug: "/home/privacy",
        icon: "LockClosedIcon",
      },
      {
        title: "Terms",
        slug: "/home/terms",
        icon: "InfoCircledIcon",
      },
    ],
  },
};
