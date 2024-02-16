import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-cg-gradient": "linear-gradient(315deg, #fde1fe, #f5f6fe 72%)",
      },
      colors: {
        "cg-gradient-purple": "#fde1fe",
        "cg-gradient-white": "#f5f6fe",
        "cg-text-blue": "#3443f4",
        "cg-btn-border-light-blue": "#c2c7fc",
        "cg-hover-btn-bg-blue": "#2a36c3",
        "cg-text-color-gray": "#545454",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
