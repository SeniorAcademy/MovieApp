/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens:{
      lg:'1140px',
      xl:'1140px',
      '2xl':'1140px'
      },
    },
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'gemunu':  ['Gemunu Libre', 'sans-serif']
      },

      colors:{
        'gega-red': '#BC1A45',
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },

      spacing:{
       myHeight:'34rem',
      },
    },
  },
  plugins: [],
}

