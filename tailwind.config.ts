import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // Small devices
      md: "768px", // Medium devices (Tablets)
      lg: "1024px", // Large devices (Laptops)
      xl: "1280px", // Extra-large devices
    },
  },
  plugins: [],
} satisfies Config;
