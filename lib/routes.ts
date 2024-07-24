import type { Frontmatter } from "~/types/frontmatter";
import { siteConfig } from "~/config/site";
import { getAllFrontmatter } from "./mdx";

export type Route = {
  slug: string;
  label: string;
  description?: string;
  pages?: Frontmatter[];
};

export type StaticRoutes = Record<
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
  Route
>;

export const staticRoutes: StaticRoutes = {
  mainNavLinks: {
    label: "Most Visited",
    slug: "",
    pages: [
      { title: "Home", slug: "/", icon: "HomeIcon" },
      { title: "Blog", slug: "/blog", icon: "FileTextIcon" },
      { title: "Projects", slug: "/projects", icon: "CubeIcon" },
      { title: "Work", slug: "/work", icon: "HammerIcon" },
      { title: "About", slug: "/about", icon: "PersonIcon" },
      { title: "Quotes", slug: "/quotes", icon: "QuoteIcon" },
    ],
  },

  home: {
    label: "Home",
    slug: "/",
  },

  about: {
    label: "About",
    slug: "/about",
  },

  blog: {
    label: "Blog",
    description: "Thoughts, stories, and ideas.",
    slug: "/blog",
  },

  contact: {
    label: "Contact",
    slug: "/contact",
  },

  credits: {
    label: "Credits",
    slug: "/credits",
  },

  privacy: {
    label: "Privacy Policy",
    slug: "/privacy",
  },

  private: {
    label: "Private",
    slug: "",
  },

  projects: {
    label: "Projects",
    description: "A showcase of my open source work.",
    slug: "/projects",
  },

  quotes: {
    label: "Quotes",
    slug: "/quotes",
  },

  terms: {
    label: "Terms of Service",
    slug: "/terms",
  },

  work: {
    label: "Work",
    slug: "/work",
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
    ],
  },

  legal: {
    label: "Legal",
    slug: "",
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

export type DynamicRoutes = Pick<StaticRoutes, "blog" | "private" | "projects">;

export const dynamicRoutes: DynamicRoutes = {
  blog: {
    ...staticRoutes.blog,
    pages: [
      ...(await getAllFrontmatter("/data", "/blog")).map(
        (page: Frontmatter) => {
          page.icon = "FileTextIcon";
          return page;
        },
      ),
    ],
  },

  private: {
    ...staticRoutes.private,
    pages: [
      ...(await getAllFrontmatter("/data", "/private")).map(
        (page: Frontmatter) => {
          page.icon = "FileTextIcon";
          return page;
        },
      ),
    ],
  },

  projects: {
    ...staticRoutes.projects,
    pages: [
      ...(await getAllFrontmatter("/data", "/projects")).map(
        (page: Frontmatter) => {
          page.icon = "CubeIcon";
          return page;
        },
      ),
    ],
  },
};
