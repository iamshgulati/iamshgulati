export type SiteConfig = {
	title: string;
	description: string;
	url: string;
	locale: string;
	links: {
		resume: string;
		linkedin: string;
		github: string;
		twitter: string;
		bluesky: string;
		mastodon: string;
	};
	handles: {
		twitter: string;
	};
	og: {
		displayUrl: string;
	};
};

export const siteConfig: SiteConfig = {
	title: "Shubham Gulati",
	description: "Software Engineer & Full-stack Developer.",
	url: "https://shubhamgulati.com",
	locale: "en_US",
	links: {
		resume: "/files/ShubhamGulati_Resume.pdf",
		linkedin: "https://www.linkedin.com/in/iamshgulati",
		github: "https://github.com/iamshgulati",
		twitter: "https://twitter.com/iamshgulati",
		bluesky: "https://bsky.app/profile/iamshgulati.bsky.social",
		mastodon: "https://mastodon.social/@iamshgulati",
	},
	handles: {
		twitter: "IAmShGulati",
	},
	og: {
		displayUrl: "www.shubhamgulati.com",
	},
};
