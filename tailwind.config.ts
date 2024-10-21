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
      keyframes: {
        slide: {
          "0%": { transform: "translate(-50%,0)" },
          "5%": { transform: "translate(-50%,0)" },
          "20%": { transform: "translate(10%,-40px)" },
          "60%": { transform: "translate(10%,-40px)" },
          "90%": { transform: "translate(-50%,0)" },
          "100%": { transform: "translate(-50%,0)" },
        },
        float: {
          "0%": { transform: "translate(0,0)" },
          "25%": { transform: "translate(0,-14px)" },
          "50%": { transform: "translate(0,0)" },
          "75%": { transform: "translate(0,-14px)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      animation: {
        slide: "slide 7s infinite",
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [scrollBarHide],
};
export default config;
