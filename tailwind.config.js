const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      //BREAKPOINT
      screens: {
        uw: '1872px', //Pantalla ultra-wide
        'max-custom-sm': {max: '639px'},
        'max-custom-lg': {max: '992px'}
      },
      //THEME
      colors: {
        primary: {
          300: 'hsl(230, 45%, 30%)',
          500: 'hsl(230, 45%, 20%)',
          700: 'hsl(230, 45%, 10%)'
        },
        secondary: 'hsl(0, 0%, 100%)',
        tertiary: 'hsl(210, 16%, 97%)',
        link: {
          light: 'hsla(0, 0%, 0%, 0.5)',
          DEFAULT: 'hsla(0, 0%, 0%, 0.7)',
          dark: 'hsla(0, 0%, 0%, 1)'
        },
        error: 'hsl(0, 100%, 50%)',
        valid: 'hsl(118, 100%, 35%)',
      },
      textShadow: { 
        DEFAULT: '0 0 4px oklch(57.18% 0.172 19.48)'
      } ,
      //TYPOGRAPHY (configurado en main.scss)
      /*fontFamily: {
        primary: ['"Merienda"', 'cursive'],
      },*/
      fontSize: {
        big: '1.1rem',
        normal: '0.95rem',
        small: '0.85rem',
      },
      //BACKGROUND
      maskImage: {
        'radial-image': 'radial-gradient(circle at center, hsl(0, 0%, 100%) 50%, hsla(0, 0%, 0%, 0) 70%)',
        'linear-top': 'linear-gradient(to top, hsla(0, 0%, 0%, 0) 0%, hsl(0, 0%, 100%) 10%)', //gradient-mask-t-[transparent_0%, hsl(0, 0%, 100%)_10%]
      },
      backgroundImage: {
        'linear-gradient-right': 'linear-gradient(to right, transparent 70%, white 100%)',
        'linear-gradient-left': 'linear-gradient(to left, transparent 70%, white 100%)'
      },
      //LAYOUT
      zIndex: {
        fixed: '1000',
      },
      textAlign: {
        'webkit-text-center': '-webkit-center'
      }
    },
  },
  plugins: [
    //PLUGIN mask-image: linear-gradient
    require("tailwind-gradient-mask-image"),
    //PLUGIN mask-image: radial-gradient
    plugin(function ({ addUtilities }) {
      const shape = {
        c: "circle",
      };

      const steps = [
        "0",
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
      ];

      const utilities = Object.entries(shape).reduce(
        (result, [shorthand, shape]) => {
          const variants = steps.map((step) => {
            const className = `.radial-mask-${shorthand}-${step}`;
            return {
              [className]: {
                maskImage: `radial-gradient(${shape} at center, hsl(0, 0%, 100%) ${step}%, transparent 70%)`,
              },
            };
          });

          const stepClasses = Object.assign(...variants);
          return {
            ...result,
            ...stepClasses,
          };
        },
        {}
      );

      addUtilities(utilities);
    }),
    //PLUGIN text-shadow
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    ],
}

