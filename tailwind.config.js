/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      mono: ['Manrope', 'sans-serif']
    },
    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(217, 19%, 38%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(82, 255, 168,1)',
      }
    },
  },
  plugins: [],
}
