/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      backgroundImage: {
        "hero-desktop": 'url("../img/bg-header-desktop.png")',
        "hero-mobile": 'url("../img/bg-header-mobile.png")',
      },

      fontFamily: {
        sans: ["Bai Jamjuree ", "sans-serif"],
      },
    },
  },
  plugins: [],
};
