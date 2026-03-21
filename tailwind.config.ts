import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#E11D8A",
        yellow: "#F5C400",
        ocean: "#0077B6",
        brown: "#5A3E2B",
        black: "#0A0A0A",
        pearl: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;