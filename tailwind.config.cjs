/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'quicksand': 'Quicksand, sans-serif',
      'playfair-display': 'Playfair Display, sans-serif',
    },
    colors: {
      primary: '#F4F3F1',
      secondary: '#191818',
      accent: {
        400: '#E3400D',
        500: '#F25524',
        700: '#F6805B',
      },
    },
    extend: {
      animation: {
        fade: 'fade 750ms ease-in forwards',
      },
      keyframes: theme => ({
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
