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
      },
      backgroundImage: {
        "hero-image": "url('/images/Home/home-hero.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
