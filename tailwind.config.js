/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        boldPurple: '#7126B5',
        lightPurple01: '#E2D4F0',
        lightPurple: '#B893DA',
        primaryGray: '#8A8A8A'
      }
    },
  },
  plugins: [],
}
