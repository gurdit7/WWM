/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-2xl': { "max": "1440px" },
        'max-xl': { "max": "1366px" },
        'max-l': { "max": "1280px" },
        'max-tab': { "max": "1024px" },
        'max-sm-tab': { "max": "990px" },
        'max-xs-tab': { "max": "768px" },
        'max-md': { "max": "749px" },
        'max-sm': { "max": "576px" }
      },
      colors: {
        light: {
          50: "#DCDAD8",
          75: "#E8E7E5",
          100: "#FAF9F7",
          150: "#F4F4F3",
          200: "#F4F2F0",
        },
        dark: {
          100: "#151416",
          150: "#292b28",
          200: "#2A292C",
        },
        accent: {
          100: "#25D366"
        }
      },
      boxShadow: {
        "3xl": " 0px 1px 2px 0px rgba(0,0,0,0.25)",
        "6xl": "0px 1px 2px 0px rgba(0,0,0,0.65)",
        "9xl": "0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)"

      },
    },
  },
  plugins: [],
};
