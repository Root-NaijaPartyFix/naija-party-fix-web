import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        brown: "#C1121F",
        deepBlue: "#0C2637",
        green: "",
        white: "#FFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
