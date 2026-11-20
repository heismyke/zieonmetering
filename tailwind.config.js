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
        sans: ['"Manrope"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ['"Space Grotesk"', '"Manrope"', "system-ui", "sans-serif"],
      },
      colors: {
        // Signal teal: Zieon Metering's accent (600 on white is 5.4:1)
        brand: {
          50: "#ecfdf9",
          100: "#cdf8ee",
          200: "#9cefdc",
          300: "#5fdcc5",
          400: "#27c0a9",
          500: "#0ea38f",
          600: "#0b8273",
          700: "#0c685d",
          800: "#0f534b",
          900: "#10443f",
        },
        // Amber for "coming soon"
        gold: {
          400: "#f5b544",
          500: "#d9921a",
          600: "#b07414",
        },
        // Graphite neutrals
        ink: {
          50: "#f4f5f6",
          100: "#e7e9ec",
          200: "#cfd3d8",
          300: "#a8afb7",
          400: "#7b838d",
          500: "#58606b",
          600: "#3e4550",
          700: "#2a3039",
          800: "#1b2027",
          900: "#111419",
        },
        surface: "#f5f6f7",
        line: "#e2e5e8",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,20,25,0.06)",
        "card-hover": "0 10px 30px rgba(17,20,25,0.10)",
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
