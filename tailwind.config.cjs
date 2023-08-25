/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quicksand: "Quicksand, sans-serif",
      "playfair-display": "Playfair Display, sans-serif",
    },
    colors: {
      primary: "#F4F3F1",
      secondary: "#191818",
      accent: {
        400: "#E3400D",
        500: "#F25524",
        700: "#F6805B",
      },
    },
    animationDelay: {
      0: "0ms",
      200: "200ms",
      1000: "1000ms",
      3500: "3500ms",
      7000: "7000ms",
    },
    extend: {
      animation: {
        "fade-in": "fade 750ms ease-out forwards",
        "fade-in-short": "fade 500ms ease-out forwards",
      },
      keyframes: (_) => ({
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        pulse: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.3 },
          "100%": { opacity: 1 },
        },
        bounce: {
          "0%": {
            opacity: 1,
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            opacity: 1,
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
