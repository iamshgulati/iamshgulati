import { ImageResponse } from "next/og";

import { siteConfig } from "~/config/site";
import { getOgFonts } from "~/fonts";
import { formatShortDate } from "~/lib/date";
import { getBaseUrl } from "~/lib/url";
import { ogImageSchema } from "~/lib/validation";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const { title, publishedAt } = ogImageSchema.parse(
      Object.fromEntries(searchParams),
    );

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
              fontSize: 220,
              fontFamily: "Playfair 700",
              fontStyle: "normal",
              color: "white",
              lineHeight: "70px",
              overflow: "hidden",
            }}
          >
            <span style={{ paddingTop: "2px", paddingBottom: "33px" }}>S</span>
          </div>
          <div
            style={{
              marginLeft: 190,
              marginRight: 190,
              display: "flex",
              fontSize: 130,
              fontFamily: "CalSans 600",
              letterSpacing: "0em",
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
              fontSize: 50,
              fontFamily: "Inter 400",
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
              {publishedAt && formatShortDate(publishedAt)}
            </div>
          </div>
        </div>
      ),
      {
        width: 1920,
        height: 1080,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fonts: await getOgFonts(),
      },
    );
  } catch (error) {
    return new Response("Failed to generate image", {
      status: 500,
    });
  }
}
