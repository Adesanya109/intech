import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        intechOrange: "#FF6a00",
        softOrange: "#FFaa00",
        intechPrimary: "#CB5757",
        intechSecondary: "#EBDEDE",
        intechTetiary: "#D9D9D9",
        papayaOrange: {
          light: "#FF8E00", // Light version of Papaya Orange
          DEFAULT: "#FF8700", // Papaya Orange
          dark: "#FF7700", // Darker version of Papaya Orange
        },
      },
      backgroundImage: (theme) => ({
        "gradient-mclaren": "linear-gradient(10deg, #FF6a00, #FFaa00)",
        "mclaren-gradient":
          "linear-gradient(to right,#FF7700, #FF8700, #FF8E00 )",
      }),
    },
  },
  plugins: [],
};
export default config;
