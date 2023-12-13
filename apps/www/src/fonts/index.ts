import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "Inter-4.0/InterVariable.woff2",
      style: "normal",
    },
    {
      path: "Inter-4.0/InterVariable-Italic.woff2",
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

const jetBrainsMono = localFont({
  src: "JetBrainsMono-2.304/JetBrainsMono-Variable.woff2",
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

const _plusJakartaSans = localFont({
  src: "PlusJakartaSans-2.7.1/PlusJakartaSans.woff2",
  weight: "100 900",
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

const _calSans = localFont({
  src: "CalSans-1.0.0/CalSans-SemiBold.woff2",
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

export const Fonts = {
  Heading: inter.variable,
  Body: inter.variable,
  Code: jetBrainsMono.variable,
} as const;
