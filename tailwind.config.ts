import type { Config } from "tailwindcss";
import scrollBarHide from "tailwind-scrollbar-hide";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        skyblue: "#C3EDFF",
        lightblue: "#5BC1ED",
      },
    },
  },
  plugins: [scrollBarHide],
};
export default config;
