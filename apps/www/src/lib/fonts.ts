import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/Inter-4.0/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "../assets/fonts/Inter-4.0/InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  variable: "--font-sans",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

export const fontHeading = localFont({
  src: "../assets/fonts/CalSans-1.0.0/CalSans-SemiBold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-heading",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

export const fontMono = localFont({
  src: "../assets/fonts/JetBrainsMono-2.304/JetBrainsMono-Variable.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-mono",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});
