export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  locale: string;
  links: {
    resume: string;
    linkedin: string;
    github: string;
    twitter: string;
    threads: string;
    mastodon: string;
    bluesky: string;
  };
  handles: {
    twitter: string;
  };
  og: {
    displayUrl: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "Shubham Gulati",
  description: "Software Engineer & Certified Cloud Architect.",
  url: "https://gulati.sh",
  locale: "en_US",
  links: {
    resume: "/files/ShubhamGulati_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/iamshgulati/",
    github: "https://github.com/iamshgulati",
    twitter: "https://twitter.com/iamshgulati",
    threads: "https://www.threads.net/@iamshgulati",
    mastodon: "https://mastodon.social/@iamshgulati",
    bluesky: "https://bsky.app/about/iamshgulati.bsky.social",
  },
  handles: {
    twitter: "IAmShGulati",
  },
  og: {
    displayUrl: "www.gulati.sh",
  },
};
