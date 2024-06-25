/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
        colors:{
          light:{
            50:"#DCDAD8",
            100:"#FAF9F7",
            200:"#F4F2F0",            
          },
          dark:{
            100:"#151416"
          }
        }
      }
    },
  plugins: [],
};
