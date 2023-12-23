import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "./InterVariable[wght,opsz].woff2",
      style: "normal",
    },
    {
      path: "./InterVariable-Italic[wght,opsz].woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  variable: "--font-sans",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0000-007F",
    },
    {
      prop: "font-feature-settings",
      value:
        "'liga' 1, 'calt' 1, 'tnum' 1, 'ss01' 1, 'ss02' 1, 'ss03' 1",
    },
  ],
});

const plusJakartaSans = localFont({
  src: [
    {
      path: "./PlusJakartaSans[wght].woff2",
      style: "normal",
    },
    // {
    //   path: "./PlusJakartaSans-Italic[wght].woff2",
    //   style: "italic",
    // },
  ],
  weight: "200 800",
  display: "swap",
  variable: "--font-heading",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0000-007F",
    },
    {
      prop: "font-feature-settings",
      value: "'liga' 1, 'calt' 1",
    },
  ],
});

const jetBrainsMono = localFont({
  src: [
    {
      path: "./JetBrainsMono[wght].woff2",
      style: "normal",
    },
    // {
    //   path: "./JetBrainsMono-Italic[wght].woff2",
    //   style: "italic",
    // },
  ],
  weight: "100 800",
  display: "swap",
  variable: "--font-mono",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0000-007F",
    },
    {
      prop: "font-feature-settings",
      value: "'liga' 1, 'calt' 1",
    },
  ],
});

export const fonts = [
  inter.variable,
  jetBrainsMono.variable,
  plusJakartaSans.variable,
].join(" ");
