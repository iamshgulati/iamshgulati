import { ImageResponse } from "next/og";

import { siteConfig } from "~/config/site";
import { getBaseUrl } from "~/lib/url";
import { ogImageSchema } from "~/lib/validation";

export const runtime = "edge";

export const size = {
  width: 1920,
  height: 1080,
};

const inter400 = fetch(
  new URL("../../../fonts/Inter-4.0/Inter-Regular.woff", import.meta.url),
).then((res) => res.arrayBuffer());

const inter600 = fetch(
  new URL("../../../fonts/Inter-4.0/Inter-SemiBold.woff", import.meta.url),
).then((res) => res.arrayBuffer());

const plusJakartaSans600 = fetch(
  new URL(
    "../../../fonts/PlusJakartaSans-2.7.1/PlusJakartaSans-SemiBold.woff",
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());

const calSans600 = fetch(
  new URL(
    "../../../fonts/CalSans-1.0.0/CalSans-SemiBold.woff",
    import.meta.url,
  ),
).then((res) => res.arrayBuffer());

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const values = ogImageSchema.parse(Object.fromEntries(searchParams));
    const title = values.title;

    return new ImageResponse(
      (
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
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 150,
              marginLeft: 190,
              marginRight: 190,
              display: "flex",
            }}
          >
            <svg
              width="80"
              height="80"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
                d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
              />
            </svg>
          </div>
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: "flex",
              fontSize: 140,
              fontFamily: "CalSans 600",
              fontStyle: "normal",
              color: "white",
              lineHeight: "150px",
              whiteSpace: "pre-wrap",
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: "absolute",
              top: 860,
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginLeft: 190,
                fontSize: 60,
                fontFamily: "Inter 400",
                fontStyle: "normal",
                color: "white",
              }}
            >
              {siteConfig.title}
            </div>
            <div
              style={{
                marginRight: 190,
                fontSize: 60,
                fontFamily: "Inter 400",
                fontStyle: "normal",
                color: "white",
              }}
            >
              {siteConfig.og.displayUrl}
            </div>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [
          {
            name: "Inter 400",
            data: await inter400,
            style: "normal",
          },
          {
            name: "Inter 600",
            data: await inter600,
            style: "normal",
          },
          {
            name: "Plus Jakarta Sans 600",
            data: await plusJakartaSans600,
            style: "normal",
          },
          {
            name: "CalSans 600",
            data: await calSans600,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    return new Response("Failed to generate image", {
      status: 500,
    });
  }
}
