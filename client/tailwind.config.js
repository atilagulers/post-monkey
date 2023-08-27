/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f3f33f',
        white: '#F5F5F5',
        dark: '#0F0F0F',
      },
    },
  },
  plugins: [],
};
