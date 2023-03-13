/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        WorkSans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
