/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      boxShadow: {
        'myShadow': '0 3px 10px #EB1F2A',
      },
      colors: {
        "myPink": "#FF69B4",
        "light-pink": "#FFF0F3",
        "myRed": "#EB1F2A",
      },
      fontFamily: {
        ultra: ['"Ultra"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
