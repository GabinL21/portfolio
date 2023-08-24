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
        'fade-in': 'fadeIn 750ms ease-out forwards',
        'fade-in-short': 'fadeIn 250ms ease-out forwards',
        'fade-out-short': 'fadeOut 250ms ease-in forwards',
      },
      keyframes: theme => ({
        'fadeIn': {
          '0%': { opacity: 0, visbility: 'hidden' },
          '100%': { opacity: 1, visbility: 'visible' },
        },
        'fadeOut': {
          '0%': { opacity: 1, visbility: 'visible' },
          '100%': { opacity: 0, visbility: 'hidden' },
        },
      }),
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
  ],
}
