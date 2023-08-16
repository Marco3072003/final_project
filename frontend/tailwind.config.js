/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #518064 0%, #134432 100%)',
      },
      colors: {
        'color-template': '#28282F'
      },
      height:{
        '90.72%': '90.72%'
      }
      
    },
  },
  plugins: [],
}