import localFont from "next/font/local";

const inter = localFont({
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

const jetBrainsMono = localFont({
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

const playfairLogo = localFont({
  src: "../assets/fonts/Playfair-2.1/Playfair-RegularBold-Logo.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-logo",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0053",
    },
  ],
});

const playfair = localFont({
  src: [
    {
      path: "../assets/fonts/Playfair-2.1/PlayfairRomanVF.woff2",
      style: "normal",
    },
    {
      path: "../assets/fonts/Playfair-2.1/PlayfairItalicVF.woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  variable: "--font-serif",
  declarations: [
    {
      prop: "unicode-range",
      value: "U+0020-007F",
    },
  ],
});

const plusJakartaSans = localFont({
  src: "../assets/fonts/PlusJakartaSans-2.7.1/PlusJakartaSans.woff2",
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

export const fonts = [
  inter.variable,
  playfair.variable,
  playfairLogo.variable,
  jetBrainsMono.variable,
  plusJakartaSans.variable,
].join(" ");
