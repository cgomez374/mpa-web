module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
      primary: {
        100: '#151565',
        200: '#1C2834',
      },
    },
  },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
