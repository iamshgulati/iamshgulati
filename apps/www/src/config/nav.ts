import type { NavItem } from "~/types";
import { siteConfig } from "./site";

interface ProfessionalNav {
  mainNav: NavItem[];
}

export const professionalNav: ProfessionalNav = {
  mainNav: [
    {
      title: "About Me",
      href: "/about",
      icon: "PersonIcon",
    },
    {
      title: "Blog",
      href: "/blog",
      icon: "FileTextIcon",
    },
    {
      title: "Projects",
      href: "/projects",
      icon: "CubeIcon",
    },
  ],
};

interface PersonalNav {
  mainNav: NavItem[];
}

export const personalNav: PersonalNav = {
  mainNav: [
    {
      title: "Thoughts",
      href: "/thoughts",
      icon: "CrumpledPaperIcon",
    },
    {
      title: "Quotes",
      href: "/quotes",
      icon: "QuoteIcon",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: "ChatBubbleIcon",
    },
  ],
};

interface SocialNav {
  mainNav: NavItem[];
}

export const socialNav: SocialNav = {
  mainNav: [
    {
      title: "GitHub",
      href: siteConfig.links.github,
      icon: "GitHubLogoIcon",
    },
    {
      title: "LinkedIn",
      href: siteConfig.links.linkedin,
      icon: "LinkedInLogoIcon",
    },
    {
      title: "Twitter",
      href: siteConfig.links.twitter,
      icon: "TwitterLogoIcon",
    },
    {
      title: "Threads",
      href: siteConfig.links.threads,
      icon: "ThreadsLogoIcon",
    },
    {
      title: "Mastodon",
      href: siteConfig.links.mastodon,
      icon: "MastodonLogoIcon",
    },
    {
      title: "Bluesky",
      href: siteConfig.links.bluesky,
    },
  ],
};

interface LegalNav {
  mainNav: NavItem[];
}

export const legalNav: LegalNav = {
  mainNav: [
    {
      title: "Privacy",
      href: "/privacy",
      icon: "EyeNoneIcon",
    },
    {
      title: "Terms",
      href: "/terms",
      icon: "CheckboxIcon",
    },
  ],
};
