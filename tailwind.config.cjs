/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDD5AD',
        secondary: '#6FA6A6',
        tertiary: '#BF8B5E',
        quaternary: '#261307'
      }
    },
  },
  plugins: []
}
