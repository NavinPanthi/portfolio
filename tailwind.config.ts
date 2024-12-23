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
        primary: {
          main: "#FFFAFF",
        },
        neutral: {
          dark: "#515151",
          light: "#b1b1b1",
        },
        base: {
          light: "#FFFFFF",
          dark: "#000000",
        },
        supporting: {
          error: "#D12E24",
          "error-light": "#FBEFEF",
          success: "#317D35",
          "success-light": "#EFF5EF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
