module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {
      backgroundColor: {
        main: '#269DF8',
        surface: '#eff6fc',
        dark: '#232B3E',
        logo: '#FF00B8',
        hover: '#FF00B8',
        active: '#FF00B8',
        NavDark: '#11151E',
        hoverDark: '#171c28',
        profileDark: '#11151E',
      },
      colors: {
        main: '#FF00B8',
      },
      borderColor: {
        main: '#269df8',
        line: '#FF00B8',
        surface: '#eff6fc',
      },
      gridTemplateRows: {
        main: '4.5em auto 3em',
      },
      gridTemplateColumns: {
        main: '20% auto 5%',
      },
      maxHeight: {
        s: '90vh',
      },
      inset: (theme, { negative }) => ({
        auto: 'auto',
        ...theme('spacing'),
        ...negative(theme('spacing')),
        '2/4': '43%',
        '1/4': '27%',
        '3/4': '30%',
        '1/3': '35%',
      }),
      colors: {
      primary: {
        100: '#151565',
        200: '#FF00B8',
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
