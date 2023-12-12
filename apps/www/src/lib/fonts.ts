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

/**
 * Inter 4 — Subset
 */
/*
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
*/

/**
 * Inter 4
 */
/*
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
});
*/

/**
 * Inter 3 — Google Fonts
 */
/*
import { Inter as SansFont } from "next/font/google";
export const fontSans = SansFont({
  weight: "variable",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-sans",
});
*/

/**
 * Playfair Diaplay — Google Fonts
 */
/*
import { Playfair_Display as SerifFont, } from "next/font/google";
export const fontSerif = SerifFont({
  weight: "variable",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-serif",
});
*/

/**
 * Bricolage Grotesque — Google Fonts
 * Failed to find font override values for font `Bricolage Grotesque`
 */
/*
import { Bricolage_Grotesque as GrotesqueFont } from "next/font/google";
export const fontGrotesque = GrotesqueFont({
  weight: "variable",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-grotesque",
});
*/

/**
 * Plus Jakarta Sans — Google Fonts
 */
/*
import { Plus_Jakarta_Sans as SansFont } from "next/font/google";
export const fontSans = SansFont({
  weight: "variable",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-sans",
});
*/
