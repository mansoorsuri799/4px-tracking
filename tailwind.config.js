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
        /* Logo: bright cyan star square + near-black type */
        brand: {
          DEFAULT: "#48C0E4",
          dark: "#2AAFD4",
          soft: "#E6F7FC",
        },
        navy: {
          950: "#0A3F50",
          900: "#0F5F78",
          800: "#157A99",
          700: "#1A93B8",
          600: "#2AAFD4",
          500: "#48C0E4",
          200: "#A8E0F0",
          100: "#D9F2FA",
          50: "#F0FAFD",
        },
        teal: {
          950: "#0A3F50",
          900: "#0F5F78",
          800: "#157A99",
          700: "#1A93B8",
          600: "#2AAFD4",
          500: "#48C0E4",
          100: "#D9F2FA",
        },
        coral: {
          DEFAULT: "#48C0E4",
          dark: "#2AAFD4",
        },
        ink: {
          DEFAULT: "#211F1F",
          soft: "#3D3A3A",
          mute: "#6B6767",
        },
        paper: {
          DEFAULT: "#F4FBFD",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(72, 192, 228, 0.35)",
        lift: "0 18px 50px -18px rgba(33, 31, 31, 0.28)",
      },
    },
  },
  plugins: [],
};
