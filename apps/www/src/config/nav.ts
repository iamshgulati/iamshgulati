import type { NavItem } from "~/types";
import { siteConfig } from "./site";

interface ProfessionalNav {
  mainNav: NavItem[];
}

export const professionalNav: ProfessionalNav = {
  mainNav: [
    {
      title: "About Me",
      slug: "/about",
      icon: "PersonIcon",
    },
    {
      title: "Blog",
      slug: "/blog",
      icon: "FileTextIcon",
    },
    {
      title: "Projects",
      slug: "/projects",
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
      slug: "/thoughts",
      icon: "CrumpledPaperIcon",
    },
    {
      title: "Quotes",
      slug: "/quotes",
      icon: "QuoteIcon",
    },
    {
      title: "Contact",
      slug: "/contact",
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
      slug: "/privacy",
      icon: "EyeNoneIcon",
    },
    {
      title: "Terms",
      slug: "/terms",
      icon: "CheckboxIcon",
    },
  ],
};
