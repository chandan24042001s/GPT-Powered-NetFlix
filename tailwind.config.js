/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        LightBlack:'#333333',
        DarkRed:'#c80014',
        LightRed:'#E50914',
      },
      fontFamily: {
        'net': ['Netflix', ],
        'calibri': ['Calibri', ],
        'bebas': ['Bebas', ],
      },
    },
  },
  plugins: [],
}