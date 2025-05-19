import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#007bff",
          dark: "#0056b3",
        },
        secondary: {
          DEFAULT: "#6c757d",
          light: "#f8f9fa",
        },
        background: {
          DEFAULT: "#ffffff",
          light: "#f8f9fa",
        },
        text: {
          DEFAULT: "#212529",
          light: "#495057",
          inverted: "#ffffff",
        },
        accent: "#17a2b8",
        "brand-red-primary": "#ee2b47",
        "brand-red-light": "#f25a70",
        "brand-red-dark": "#d5112d",
        "brand-black": "#111111",
        "brand-white": "#ffffff",
        "brand-off-white": "#f6f6f6",
        "brand-gray-light": "#dedede",
        "brand-gray-dark": "#333333",
        "brand-gray-medium": "#666666",
        gray: {
          900: "#0f0f0f",
          800: "#444444",
          300: "#cccccc",
          "brand-light": "#dedede",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config; 