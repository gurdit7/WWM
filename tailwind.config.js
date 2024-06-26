/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          50: "#DCDAD8",
          100: "#FAF9F7",
          150: "#F4F4F3",
          200: "#F4F2F0",
        },
        dark: {
          100: "#151416",
          200:"#2A292C"
        },
        accent:{
          100:"#25D366"
        }
      },
      boxShadow: {
        "3xl": " 0px 1px 2px 0px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
};
