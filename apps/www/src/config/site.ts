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
  openGraph: {
    //
  };
  handles: {
    twitter: string;
  };
}

export const siteConfig: SiteConfig = {
  title: "Shubham Gulati",
  description: "Software Engineer & Certified Cloud Architect.",
  url: "https://gulati.sh",
  locale: "en_US",
  type: "website",
  links: {
    resume: "/files/ShubhamGulati_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/iamshgulati/",
    github: "https://github.com/iamshgulati",
    twitter: "https://twitter.com/iamshgulati",
    threads: "https://www.threads.net/@iamshgulati",
    mastodon: "https://mastodon.social/@iamshgulati",
    bluesky: "https://bsky.app/about/iamshgulati.bsky.social",
  },
  openGraph: {
    //
  },
  handles: {
    twitter: "IAmShGulati",
  },
};
