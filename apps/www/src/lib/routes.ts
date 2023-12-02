import type { Route as NextRoute } from "next";

import type { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import type { Frontmatter } from "./mdx";
import { getFrontmatter } from "./mdx";

export type PageLabel = "Soon" | "Preview" | "New";

export interface Page {
  slug: NextRoute;
  title: string;
  description?: string;
  label?: PageLabel;
  disabled?: boolean;
  icon?: keyof typeof Icons;
}

export interface Route {
  label: string;
  pages: Page[] | Frontmatter[];
}

export type AllRoutes = Record<
  | "home"
  | "professional"
  | "personal"
  | "social"
  | "legal"
  | "projects"
  | "blog"
  | "thoughts",
  Route
>;

export const allRoutes: AllRoutes = {
  home: {
    label: "Home",
    pages: [
      { title: "Home", slug: "/", icon: "HomeIcon" },
      { title: "About", slug: "/about", icon: "PersonIcon" },
      { title: "Contact", slug: "/contact", icon: "ChatBubbleIcon" },
    ],
  },
  professional: {
    label: "Professional",
    pages: [
      { title: "Projects", slug: "/projects", icon: "CubeIcon" },
      { title: "Experience", slug: "/experience", icon: "BackpackIcon" },
      { title: "Skills", slug: "/skills", icon: "MixIcon" },
    ],
  },
  personal: {
    label: "Personal",
    pages: [
      { title: "Blog", slug: "/blog", icon: "FileTextIcon" },
      { title: "Thoughts", slug: "/thoughts", icon: "CrumpledPaperIcon" },
      { title: "Quotes", slug: "/quotes", icon: "QuoteIcon" },
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
  projects: {
    label: "Projects",
    pages: [
      ...getFrontmatter("src/app/(professional)", "/projects").map((page) => {
        page.icon = "CubeIcon";
        return page;
      }),
    ],
  },
  blog: {
    label: "Blog Posts",
    pages: [
      ...getFrontmatter("src/app/(personal)", "/blog").map((page) => {
        page.icon = "FileTextIcon";
        return page;
      }),
    ],
  },
  thoughts: {
    label: "Thoughts",
    pages: [
      ...getFrontmatter("src/app/(personal)", "/thoughts").map((page) => {
        page.icon = "CrumpledPaperIcon";
        return page;
      }),
    ],
  },
};
