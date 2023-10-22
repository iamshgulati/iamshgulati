import type { NavItem } from "~/types";

interface MarketingNavConfig {
  title: string;
  hrefPrefix: string;
  mainNavItems: NavItem[];
}

export const marketingNavConfig: MarketingNavConfig = {
  title: "Home",
  hrefPrefix: "/",
  mainNavItems: [
    {
      title: "Home",
      href: "/",
      description: "Shubham Gulati's Home",
    },
  ],
};

interface WorkNavConfig {
  title: string;
  hrefPrefix: string;
  mainNavItems: NavItem[];
}

export const workNavConfig: WorkNavConfig = {
  title: "Work",
  hrefPrefix: "/work",
  mainNavItems: [
    {
      title: "Experience",
      href: "/work/experience",
      description: "All about my professional work experience",
    },
    {
      title: "Skills",
      href: "/work/skills",
      description: "Languages, libraries, and tools I have worked with",
    },
    {
      title: "Contact",
      href: "/work/contact",
      description:
        "Get in touch with me anytime, through social media, e-mail, or phone number",
    },
  ],
};

interface LearnNavConfig {
  title: string;
  hrefPrefix: string;
  mainNavItems: NavItem[];
}

export const learnNavConfig: LearnNavConfig = {
  title: "Learn",
  hrefPrefix: "/learn",
  mainNavItems: [
    {
      title: "Blog",
      href: "/learn/blog",
      description: "Thoughts, stories, and ideas",
    },
    {
      title: "Projects",
      href: "/learn/projects",
      description: "A showcase of my open source work",
    },
    {
      title: "Today",
      href: "/learn/today",
      description: "Short notes on new things I learned today",
    },
  ],
};

// interface PersonalNavConfig {
//   title: string;
//   hrefPrefix: string;
//   mainNavItems: NavItem[];
// }

// export const personalNavConfig: PersonalNavConfig = {
//   title: "Personal",
//   hrefPrefix: "/personal",
//   mainNavItems: [
//     {
//       title: "Quotes",
//       href: "/personal/quotes",
//       description: "My favourite quotes",
//       disabled: true,
//     },
//     {
//       title: "Journey",
//       href: "/personal/journey",
//       description: "My life journey",
//       disabled: true,
//     },
//     {
//       title: "Guestbook",
//       href: "/personal/guestbook",
//       description: "Leave a comment for the future visitors of my website",
//       disabled: true,
//     },
//   ],
// };
