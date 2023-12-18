/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Bai Jamjuree', sans-serif;",
      },
      backgroundImage: {
        headerDesktop: "url('/src/images/bg-header-desktop.png')",
        headerMobile: "url('/src/images/bg-header-mobile.png')",
      },
    },
  },
  plugins: [],
};
