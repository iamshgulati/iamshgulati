import { ImageResponse } from "next/og";
import { parse } from "valibot";

import { siteConfig } from "~/config/site";
import { formatDate } from "~/lib/date";
import { getBaseUrl } from "~/lib/url";
import { ogImageSchema } from "~/lib/validation";

export const runtime = "edge";
export const contentType = "image/jpg";
export const size = {
	width: 1920,
	height: 1080,
};

export async function GET(req: Request) {
	const [pjs600] = await Promise.all([
		fetch(`${getBaseUrl()}/fonts/PlusJakartaSans-SemiBold.woff`).then((res) => res.arrayBuffer()),
	]);

	try {
		const { searchParams } = new URL(req.url);
		const { title, publishedAt } = parse(ogImageSchema, Object.fromEntries(searchParams));

		return new ImageResponse(
			<div
				style={{
					position: "relative",
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					justifyContent: "center",
					backgroundImage: `url(${getBaseUrl()}/og-bg.jpg)`,
					filter: "saturate(0.85)",
				}}
			>
				<div
					style={{
						position: "absolute",
						top: 160,
						marginLeft: 190,
						marginRight: 190,
						display: "flex",
					}}
				>
					<svg
						width="100"
						height="100"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z"
							fill="white"
							fillRule="evenodd"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				{title ? (
					<div
						style={{
							marginLeft: 190,
							marginRight: 190,
							display: "flex",
							flexDirection: "column",
							fontSize: 130,
							fontFamily: "pjs600",
							letterSpacing: "-0.03em",
							fontStyle: "normal",
							color: "white",
							lineHeight: "150px",
							whiteSpace: "pre-wrap",
						}}
					>
						{title}
					</div>
				) : (
					<div
						style={{
							marginLeft: 190,
							marginRight: 190,
							display: "flex",
							flexDirection: "column",
							fontSize: 130,
							fontFamily: "pjs600",
							letterSpacing: "-0.03em",
							fontStyle: "normal",
							color: "white",
							lineHeight: "150px",
							whiteSpace: "pre-wrap",
						}}
					>
						Hello! I&apos;m
						<br />
						Shubham Gulati,
					</div>
				)}
				<div
					style={{
						position: "absolute",
						top: 860,
						display: "flex",
						flexDirection: "row",
						width: "100%",
						justifyContent: "space-between",
						fontSize: 50,
						fontFamily: "pjs600",
						fontStyle: "normal",
						color: "white",
					}}
				>
					<div
						style={{
							marginLeft: 190,
						}}
					>
						{siteConfig.title}
					</div>
					<div
						style={{
							marginRight: 190,
						}}
					>
						{publishedAt && formatDate({ date: publishedAt, formatOptions: { month: "short" } })}
					</div>
				</div>
			</div>,
			{
				...size,
				fonts: [
					{
						name: "pjs600",
						data: pjs600,
						style: "normal",
					},
				],
			},
		);
	} catch (error) {
		return new Response(`Failed to generate image. Error - ${JSON.stringify(error)}`, {
			status: 500,
		});
	}
}
