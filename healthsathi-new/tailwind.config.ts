import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // Enable system preference-based dark mode
  theme: {
    extend: {
      colors: {
        // Theme-aware colors
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          inverse: 'var(--bg-inverse)',
        },
        foreground: {
          DEFAULT: 'var(--foreground)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          muted: 'var(--text-muted)',
          inverse: 'var(--text-inverse)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          light: 'var(--brand-red-light)',
          dark: 'var(--brand-red-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: {
          DEFAULT: 'var(--border)',
          light: 'var(--border-light)',
          medium: 'var(--border-medium)',
          dark: 'var(--border-dark)',
        },
        input: {
          DEFAULT: 'var(--input)',
        },
        ring: {
          DEFAULT: 'var(--ring)',
        },
        
        // Legacy colors for backward compatibility
        text: {
          DEFAULT: 'var(--text-primary)',
          light: 'var(--text-secondary)',
          inverted: 'var(--text-inverse)',
        },
        
        // Brand colors
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
      // Add theme-aware utilities
      textColor: {
        'theme-primary': 'var(--text-primary)',
        'theme-secondary': 'var(--text-secondary)',
        'theme-tertiary': 'var(--text-tertiary)',
        'theme-muted': 'var(--text-muted)',
        'theme-inverse': 'var(--text-inverse)',
      },
      backgroundColor: {
        'theme-primary': 'var(--bg-primary)',
        'theme-secondary': 'var(--bg-secondary)',
        'theme-tertiary': 'var(--bg-tertiary)',
        'theme-inverse': 'var(--bg-inverse)',
      },
      borderColor: {
        'theme-light': 'var(--border-light)',
        'theme-medium': 'var(--border-medium)',
        'theme-dark': 'var(--border-dark)',
      },
    },
  },
  plugins: [],
};

export default config; 