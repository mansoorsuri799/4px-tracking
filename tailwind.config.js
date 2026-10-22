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
        /* Logo: SpeedPak orange #FD6B26 + near-black type */
        brand: {
          DEFAULT: "#FD6B26",
          dark: "#E55A18",
          soft: "#FFF3EC",
        },
        navy: {
          950: "#7A2E0F",
          900: "#9A3A14",
          800: "#C44A1A",
          700: "#E55A18",
          600: "#FD6B26",
          500: "#FD6B26",
          200: "#FFC9A8",
          100: "#FFE4D4",
          50: "#FFF6F1",
        },
        teal: {
          950: "#7A2E0F",
          900: "#9A3A14",
          800: "#C44A1A",
          700: "#E55A18",
          600: "#FD6B26",
          500: "#FD6B26",
          100: "#FFE4D4",
        },
        coral: {
          DEFAULT: "#FD6B26",
          dark: "#E55A18",
        },
        ink: {
          DEFAULT: "#211F1F",
          soft: "#3D3A3A",
          mute: "#6B6767",
        },
        paper: {
          DEFAULT: "#FFF8F4",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(253, 107, 38, 0.35)",
        lift: "0 18px 50px -18px rgba(33, 31, 31, 0.28)",
      },
    },
  },
  plugins: [],
};
