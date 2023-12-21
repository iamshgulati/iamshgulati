import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { ImageResponse } from "next/og";

import { siteConfig } from "~/config/site";
import { formatShortDate } from "~/lib/date";
import { getBaseUrl } from "~/lib/url";
import { ogImageSchema } from "~/lib/validation";

export const runtime = "nodejs";
export const contentType = "image/jpg";
export const size = {
  width: 1920,
  height: 1080,
};

export async function GET(req: Request) {
  const [inter400, calSans600] = await Promise.all([
    fs.promises.readFile(
      path.join(
        fileURLToPath(import.meta.url),
        `../../../../fonts/Inter-4.0/Inter-Regular.ttf`,
      ),
    ),
    fs.promises.readFile(
      path.join(
        fileURLToPath(import.meta.url),
        `../../../../fonts/CalSans-1.0.0/CalSans-SemiBold.ttf`,
      ),
    ),
  ]);

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
        ...size,
        fonts: [
          {
            name: "Inter 400",
            data: inter400,
            style: "normal",
          },
          {
            name: "CalSans 600",
            data: calSans600,
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
