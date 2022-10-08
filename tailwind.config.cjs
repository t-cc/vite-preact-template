const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Bitter', ...defaultTheme.fontFamily.serif],
        display: ['Bitter', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        'vite-yellow': '#FFD931',
        'vite-blue': '#52BCFF',
        'vite-violet': '#BD34FE'
      }
    }
  },
  plugins: []
}
