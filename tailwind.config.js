/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./docs/*.html", "./docs/*.js"],
  theme: {
    fontFamily: {
      sans: ["Livvic", "sans-serif"],
    },
    extend: {
      colors: {
        darkblue: "#021e60",
        darkyellow: "#ffc503",
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* Webkit (Safari/Chrome) */
          "scrollbar-width": "none",
          /* Firefox */
          "overflow-y": "overlay",
          /* Hide scrollbar for IE, Edge and Firefox */
          "-ms-overflow-style": "none",
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-light": {
          "&::-webkit-scrollbar": {
            height: "8px",
            color: "rgba(255, 255, 255, 0.1)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "9999px",
          },

          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "9999px",
          },
        },
      });
    }),
  ],
};
