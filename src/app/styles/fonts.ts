import type { NextFont } from "next/dist/compiled/@next/font";
import localFont from "next/font/local";

const ClashDisplay: NextFont = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay/ClashDisplay-Variable.ttf",
    },
  ],
});

const Poppins = localFont({
  src: [
    {
      path: "../fonts/Poppins/Poppins-Variable.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Poppins/Poppins-VariableItalic.ttf",
      style: "italic",
    },
  ],
});

export { ClashDisplay, Poppins };
