import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F6F3",
        primary: "#084144",
        secondary: "#C5DAD8",
        accent: "#E96C5B",
        text: "#084144",
        "muted-text": "#616161",
        border: "#E1E0DD",
        success: "#2FAE8A",
        error: "#E96C5B",
        white: "#FEFFFF",
        warning: "#F4C542",
        info: "#6FAED9",
        dark: "#212121",
        trueGray: colors.neutral,
      },
      borderRadius: {
        sm: "9px",
        md: "15px",
      },
      boxShadow: {
        card: "0 2px 4px rgba(33,33,33,0.30)",
        modal: "0 8px 20px rgba(0,0,0,0.15)",
      },
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "SF Pro Text",
        "SF Pro Display",
        ...defaultTheme.fontFamily.sans,
      ],
      stock: [
        "-apple-system",
        "BlinkMacSystemFont",
        "SF Pro Text",
        "SF Pro Display",
        ...defaultTheme.fontFamily.sans,
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
