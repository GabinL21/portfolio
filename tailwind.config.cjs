/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
    animationDelay: {
      200: '200ms',
      1000: '1000ms',
      3500: '3500ms',
    },
    extend: {
      animation: {
        'fade-in': 'fade 750ms ease-out forwards',
        'fade-in-short': 'fade 500ms ease-out forwards',
      },
      keyframes: theme => ({
        'fade': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'pulse': {
          '50%' : { opacity: 0.25 },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
  ],
}
