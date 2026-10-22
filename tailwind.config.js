/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Logo: royal navy #2D3091 + orange #FD6B26 + gold #F0A838 */
        brand: {
          DEFAULT: "#FD6B26",
          dark: "#E55A18",
          soft: "#FFF3EC",
          gold: "#F0A838",
        },
        navy: {
          950: "#0F1238",
          900: "#12153F",
          800: "#151848",
          700: "#1A1D5C",
          600: "#23267A",
          500: "#2D3091",
          200: "#C5C7EB",
          100: "#E4E5F6",
          50: "#F2F3FA",
        },
        teal: {
          950: "#0F1238",
          900: "#12153F",
          800: "#151848",
          700: "#1A1D5C",
          600: "#23267A",
          500: "#2D3091",
          100: "#E4E5F6",
          50: "#F2F3FA",
        },
        coral: {
          DEFAULT: "#FD6B26",
          dark: "#E55A18",
        },
        ink: {
          DEFAULT: "#1A1D3A",
          soft: "#3A3E5C",
          mute: "#6B6F8A",
        },
        paper: {
          DEFAULT: "#F5F6FB",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(45, 48, 145, 0.28)",
        lift: "0 18px 50px -18px rgba(30, 34, 104, 0.35)",
      },
    },
  },
  plugins: [],
};
