/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7126B5",
        success: "#73CA5C",
        danger: "#FF0000",
        boldPurple: '#7126B5',
        lightPurple01: '#E2D4F0',
        lightPurple: '#B893DA',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'], 
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
