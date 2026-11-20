/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      colors: {
        // Brand orange sampled from the Zenerlink mark
        brand: {
          50: "#fdf3ec",
          100: "#fbe3d2",
          200: "#f6c3a0",
          300: "#ef9c66",
          400: "#e67d3a",
          500: "#d5651b",
          600: "#b95412",
          700: "#934111",
          800: "#713414",
          900: "#4a2410",
        },
        // Gold accent sampled from the ZIEVON logotype
        gold: {
          400: "#e0a548",
          500: "#cd8c2a",
          600: "#a96f1c",
        },
        // Deep navy used for dark bands, utility bar and footer
        ink: {
          50: "#f3f5f8",
          100: "#e4e8ee",
          200: "#c9d1dc",
          300: "#9aa6b6",
          400: "#6b7889",
          500: "#4a5667",
          600: "#334052",
          700: "#1f2b3b",
          800: "#13202e",
          900: "#0b1622",
        },
        surface: "#f4f5f7",
        line: "#e2e5e9",
      },
      boxShadow: {
        card: "0 1px 3px rgba(11,22,34,0.05)",
        "card-hover": "0 8px 30px rgba(11,22,34,0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "ken-burns": "ken-burns 9s ease-out both",
      },
    },
  },
  plugins: [],
};
