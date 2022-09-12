/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1455FF"
      },
      fontFamily: {
        'gothamBold': ['Gotham Pro Bold'],
        'gothamMedium': ['Gotham Pro Medium'],
        'gothamLight': ['Gotham Pro Light'],
        'gotham': ['Gotham Pro'],
      },
      backgroundImage: {
        'menu': "url('./img/pagesImages/main.png')",
        'calculator': "url('./img/pagesImages/calculator.png')"
      }
    },
  },
  plugins: [],
}
