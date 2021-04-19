const plugin = require('tailwindcss/plugin');

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
      gradientColorStops: {
        'FFC700': '#FFC700',
        'FF655B': '#FF655B',
        'FF00B8': '#FF00B8',

      },
      boxShadow: {
        'mentor': '0 25px 50px -12px rgba(0, 0, 0, 1)'

      },
      textColor: {
        NavDark: '#151565',
        textGray: '#676565',

      },
      colors: {
        main: '#FF00B8',
      },
      borderColor: {
        NavDark: '#151565',
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
        '1/13': '100%',
        '2/13': '91.66666666666667%',
        '3/13': '83.33333333333333%',
        '4/13': '75%',
        '5/13': '66.66666666666667%',
        '6/13': '58.33333333333333%',
        '7/13': '50%',
        '8/13': '41.66666666666667%',
        '9/13': '33.33333333333333%',
        '10/13': '25%',
        '11/13': '16.66666666666667%',
        '12/13': '8.333333333333333%',
        '13/13': '0%',

        '1300px': '1300px',
        '640px': '640px',
        '950px': '950px',
        '140px': '140px',
      },
      minHeight: {
        '600px': '600px'
      },
      height: {
        '660px': '660px',
        'inherit': 'inherit'
      },
      maxHeight: {
        s: '90vh',
        'fitContent': 'fit-content',
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
    extend: {
      // add new variants to a property we want to extend
      backgroundColor: ['label-checked'],
      textColor: ['label-checked'],
      fontWeight: ['label-checked'],
      borderColor: ['label-checked'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) => {
            const eClassName = e(`label-checked${separator}${className}`); // escape class
            const yourSelector = 'input[type="radio"]'; //  input selector. 
            return `${yourSelector}:checked ~ .${eClassName}`; // ~ - CSS selector for siblings
          }
        )
      })
    }),
  ],
}
