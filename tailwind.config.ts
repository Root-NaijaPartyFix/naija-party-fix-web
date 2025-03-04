import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        poppins: ["Poppins", ...fontFamily.sans],
        clashDisplay: ["Clash Display", ...fontFamily.sans],
      },
      colors: {
        brown: "#C1121F",
        deepBlue: "#0C2637",
        white: "#FFF",
        lightGray: "#D9D9D9",
        lightBrown: "#8B4513",
        bgDeep: "#162b40",
      },
      backgroundImage: {
        "hero-image": "url('/images/Home/home-hero.png')",
      },
      margin: {
        bom: "8rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
