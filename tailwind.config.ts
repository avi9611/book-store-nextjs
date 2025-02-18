import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ibm-plex-sans": ["IBM Plex Sans", "sans-serif"],
        "bebas-neue": ["var(--bebas-neue)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "#6A5ACD", // SlateBlue
          "2": "#40E0D0", // Turquoise
          "3": "#9370DB", // MediumPurple
          "4": "#FF69B4", // HotPink
          "5": "#FFD700", // Gold
        },
        primary: {
          DEFAULT: "#80D0C7", // Deep Purple
          admin: "#2E1A47", // Darker Shade
        },
        green: {
          DEFAULT: "#00A36C", // Jade Green
          100: "#D4F1F4",
          400: "#5F9EA0",
          500: "#008B8B",
          800: "#004C4C",
        },
        red: {
          DEFAULT: "#E63946", // Coral Red
          400: "#F08080",
          500: "#E27233",
          800: "#8B0000",
        },
        blue: {
          100: "#4169E1", // Royal Blue
        },
        light: {
          100: "#F8E8EE", // Soft Pink
          200: "#E0C3FC", // Pastel Purple
          300: "#E6E6FA", // Lavender
          400: "#D0E6F0", // Sky Blue
          500: "#C5D5E4", // Soft Steel
          600: "#F9FAFB",
          700: "#E2E8F0",
          800: "#F8FAFC",
        },
        dark: {
          100: "#1B1B2F", // Midnight Blue
          200: "#162447", // Deep Navy
          300: "#1F4068", // Dark Blue
          400: "#1B2A41", // Muted Indigo
          500: "#0F172A", // Deep Night
          600: "#4B527E",
          700: "#464F6F",
          800: "#1E2230",
        },
        gray: {
          100: "#BFC0C0",
        },
      },
      screens: {
        xs: "480px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        pattern: "url('/images/pattern.webp')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
