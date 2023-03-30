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
    extend: {},
  },
  plugins: [],
}
