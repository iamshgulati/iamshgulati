import { ScreenSizeIndicator } from "~/components/screen-size-indicator";
import { siteConfig } from "~/config/site";
import { Providers } from "~/providers";

import "~/styles/globals.css";

import type { Metadata } from "next";

import { isProduction } from "~/config/env";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div id="skip-to-top" />
        <div id="root">
          <Providers>
            {children}
            {!isProduction && <ScreenSizeIndicator />}
          </Providers>
        </div>
      </body>
    </html>
  );
}
