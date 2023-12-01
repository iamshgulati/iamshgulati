import { siteConfig } from "~/config/site";
import type { AllAppRouteProps } from "~/types";

export const AllAppRoutes: AllAppRouteProps = {
  productLinks: {
    label: "",
    pages: [
      { title: "Home", slug: "/" },
      { title: "Blog", slug: "/blog" },
      { title: "Projects", slug: "/projects" },
      { title: "Thoughts", slug: "/thoughts" },
    ],
  },
  home: {
    label: "Home",
    pages: [
      { title: "About", slug: "/about", icon: "PersonIcon" },
      { title: "Contact", slug: "/contact", icon: "ChatBubbleIcon" },
    ],
  },
  professional: {
    label: "Professional",
    pages: [
      { title: "About", slug: "/about", icon: "PersonIcon" },
      { title: "Blog", slug: "/blog", icon: "FileTextIcon" },
      { title: "Projects", slug: "/projects", icon: "CubeIcon" },
    ],
  },
  personal: {
    label: "Personal",
    pages: [
      { title: "Thoughts", slug: "/thoughts", icon: "CrumpledPaperIcon" },
      { title: "Quotes", slug: "/quotes", icon: "QuoteIcon" },
      { title: "Contact", slug: "/contact", icon: "ChatBubbleIcon" },
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
        title: "Privacy",
        slug: "/privacy",
        icon: "EyeNoneIcon",
      },
      {
        title: "Terms",
        slug: "/terms",
        icon: "CheckboxIcon",
      },
    ],
  },
};
