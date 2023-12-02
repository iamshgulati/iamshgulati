import { siteConfig } from "~/config/site";
import type { AllAppRouteProps } from "~/types";

export const AllAppRoutes: AllAppRouteProps = {
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
