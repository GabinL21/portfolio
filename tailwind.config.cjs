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
    },
    colors: {
      primary: '#F4F3F1',
      secondary: '#191818',
      accent: colors.orange,
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
