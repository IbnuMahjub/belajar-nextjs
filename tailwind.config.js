/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      sans : ["'Montserrat', sans-serif"]
    },
    colors: {
      green: "#32D320",
      white: "#ffff",
      primarry: "#EEF2F5",
      grey: "#ABABAB",
        gray: "#F1F3F5",
      blue: "#EFF6FF",
      transparent: "transparent",
    },
    extend: {},
  },
  plugins: [],
}
