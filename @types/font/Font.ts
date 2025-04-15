import { Ubuntu, Ubuntu_Mono, Ubuntu_Condensed } from "next/font/google";

export const ubuntu = Ubuntu({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  style: ["normal"],
  variable: "--font-sans",
  weight: ["300", "400"],
});

export const ubuntuMono = Ubuntu_Mono({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  style: ["normal"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const ubuntuCondensed = Ubuntu_Condensed({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  style: ["normal"],
  variable: "--font-sans",
  weight: ["400"],
});
