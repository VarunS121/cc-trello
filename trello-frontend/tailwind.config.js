/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prmRed: '#CF2027',
        prmBlue: '#5CCAE8',
        prmYellow: '#FFE275',
        prmBg: '#434343',
        headingCol: '#FFFEF2',
        contentCol: '#C0C0C0',
        outerBoxCol: '#A76F6F33'
      }
  },
  plugins: [],
  }
}