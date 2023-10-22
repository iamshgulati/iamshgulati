import { getBaseUrl } from "~/helpers/url";
import type { SiteConfig } from "~/types";

export const siteConfig: SiteConfig = {
  name: "Shubham Gulati",
  description: "Software Engineer & Certified Cloud Architect.",
  url: `${getBaseUrl()}`,
  links: {
    resume: "/files/ShubhamGulati_Resume.pdf",
    linkedin: "https://www.linkedin.com/in/iamshgulati/",
    github: "https://github.com/iamshgulati",
    githubGists: "https://gist.github.com/iamshgulati",
    twitter: "https://twitter.com/iamshgulati",
    threads: "https://www.threads.net/@iamshgulati",
    mastodon: "https://mastodon.social/@iamshgulati",
    bluesky: "https://bsky.app/profile/iamshgulati.bsky.social",
  },
  og: {
    displayUrl: "gulati.sh",
    displayHandle: "@iamshgulati",
  },
};
