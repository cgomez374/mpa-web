module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    extend: {
      fontFamily: {
        'redhat': ['Red Hat Display', 'ui-serif'],
      },
      backgroundColor: {
        main: '#269DF8',
        surface: '#eff6fc',
        dark: '#232B3E',
        logo: '#FF00B8',
        hover: '#FF00B8',
        active: '#FF00B8',
        NavDark: '#151565',
        hoverDark: '#171c28',
        profileDark: '#151565',
      },
      textColor: {
        NavDark: '#151565',
        textGray: '#676565',

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
      width: {
        '950px': '950px'
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
      // 'sm': '576px',
      // 'md': '768px',
      // 'lg': '992px',
      // 'xl': '1200px',
      'sm': { 'max': '576px' },
      'md': { 'max': '767px' },
      'lg': { 'max': '991px' },
      'xl': { 'max': '1199px' },
      '2xl': { 'min': '1200px' },
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
