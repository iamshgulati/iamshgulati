import { getBaseUrl, getParams } from "./url";

type ogImageApiProps = {
	title?: string;
	publishedAt?: string;
};

export const ogImageApi = ({ title = undefined, publishedAt = undefined }: ogImageApiProps) =>
	`${getBaseUrl()}/api/og?${getParams({
		title: title,
		publishedAt: publishedAt,
	})}`;
