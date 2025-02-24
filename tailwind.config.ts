import type { Config } from "tailwindcss";

export default {
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
        accent: "var(--accent-color)"
      },
      fontFamily: {
        dmsans: "DM Sans",
        inter: "Inter",
        jakarta: "Plus Jakarta Sans"
      }
    },
  },
  plugins: [],
} satisfies Config;
