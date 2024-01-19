/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway'],
      },
      colors: {
        primary: {
          25: '#EDFEFB',
          50: '#DBFDF7',
          100: '#C9FCF3',
          200: '#95F9F0',
          300: '#5EEDEC',
          400: '#36D0DB',
          DEFAULT: '#00A7C4',
          600: '#0082A8',
          700: '#00628D',
          800: '#004671',
          900: '#00325E',
        },
        secondary: {
          100: '#FEF7EB',
          200: '#FEEDD8',
          300: '#FEE1C4',
          400: '#FED5B6',
          DEFAULT: '#FEC19E',
          600: '#DA9273',
          700: '#B6684F',
          800: '#934332',
          900: '#602A0F',
        },
        tertiary: {
          100: '#FFF3F0',
          200: '#FFE5E2',
          300: '#FFD4D3',
          400: '#FFC9CC',
          DEFAULT: '#FFB7C3',
          600: '#DB859C',
          700: '#B75C7C',
          800: '#933A62',
          900: '#7A2352',
        },
      }
    },
  },
  plugins: [],
};
