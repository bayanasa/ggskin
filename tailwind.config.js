const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

const colors = {
  seashell: '#F1F1F3',
  ghost: '#C7CAD1',
  tuna: '#32363E',
  shark: '#1B1D21',
  mandy: '#E94D50',
  manatee: '#8F95A3',
  concrete: '#F2F2F2',
  mako: '#454954',
  peach: '#FCA579',
  woodsmoke: '#101114',
  alto: '#D9D9D9',
  malibu: '#6EADFF',
  cinder: '#121212',
  darkblue: '#23252B',
  'shuttle-gray': '#5C6270',
  'pastel-green': '#6FDE9D',
  mindaro: '#E6F783'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': 0,
        '3xl': 0
      },
      screens: {
        sm: '639px',
        md: '767px',
        lg: '1023px',
        xl: '1279px',
        '2xl': '1464px',
        '3xl': '1464px'
      }
    },
    colors: {
      // Base colors
      transparent: 'transparent',
      current: 'currentColor',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      bubbleGum: '#ff77e9',
      block: '#16161F',
      yellow: '#F2C94C',
      blue: '#6EADFF',
      orange: '#F5915A',
      pink: '#FDAEFF',
      seashell: colors.seashell,
      ghost: colors.ghost,
      tuna: colors.tuna,
      shark: colors.shark,
      mandy: colors.mandy,
      manatee: colors.manatee,
      concrete: colors.concrete,
      mako: colors.mako,
      peach: colors.peach,
      woodsmoke: colors.woodsmoke,
      alto: colors.alto,
      malibu: colors.malibu,
      cinder: colors.cinder,
      'dark-blue': colors.darkblue,
      'shuttle-gray': colors['shuttle-gray'],

      // Primary colors
      primary: {
        DEFAULT: '#FF8753',
        100: '#FF8753',
        200: '#FFAA85',
        300: '#FFCDB8',
        400: '#FF611F'
      },
      // Secondary colors
      secondary: {
        DEFAULT: '#4CC2EA',
        100: '#4CC2EA',
        200: '#7BD2EF',
        300: '#A9E2F5',
        400: '#20B3E4'
      },
      // Interface colors
      interface: {
        DEFAULT: '#010709',
        100: '#04151B',
        200: '#051C24',
        300: '#082A35',
        400: '#2D4953',
        500: '#365863',
        600: '#15718E',
        700: '#F1F3F3'
      },
      // Typography colors
      typography: {
        DEFAULT: '#F9FAFB',
        100: '#F9FAFB',
        200: '#B6C4C9',
        300: '#89A1A9',
        400: '#6C8993',
        500: '#1A1A1A',
        600: '#FF8653',
        700: '#95A9B0',
        'stattrack': '#F29057'
      },
      // Accent colors,
      accent: {
        success: '#6FDE9D',
        warning: '#E6F783',
        error: '#FA7383',
        100: '#FCA36F',
        200: '#6EADFF'
      },

      black: {
        DEFAULT: '#000000',
        button: '#101114',
        bolt: '#121212'
      },
      darkblue: {
        DEFAULT: '#111219',
        block: '#1E1E27',
        input: '#262632',
        pop: '#2C2C3A',
        menu: '#353546',
        user: '#4B4B63',
        signup: '#1D1D27'
      },
      gray: {
        DEFAULT: '#313131',
        text: '#C6C9D2',
        more: '#9DA1B1',
        input: '#79798F',
        sort: '#9A9AAB',
        desc: '#BDBDBD',
        sale: '#3B3B4E',
        light: '#E0E0E0',
        button: '#424257',
        dark: '#121219',
        profile: '#9090A2',
        out: '#79799A',
        filter: '#1B1D21',
        filters: '#23252B',
        category: '#C7CAD1',
        reset: '#8F95A3',
        range: '#32363E',
        rangetext: '#8F95A3',
        checkbox: '#454954',
        recom: '#5C6270',
        path: '#393D46'
      },
      lime: {
        DEFAULT: '#D2FA63',
        hovered: '#E7FCAB',
        active: '#C3F82F',
        disabled: '#474E36'
      },
      white: {
        DEFAULT: '#fff',
        hovered: '#D9D9D9',
        active: '#B3B3B3',
        disabled: '#4F4F4F',
        light: '#F2F2F2',
        qty: '#F1F1F3'
      },
      red: {
        DEFAULT: '#FA7383',
        menu: '#EB5656'
      },
      green: {
        pastel: '#6FDE9D'
      },
      yellow: {
        mindaro: '#E6F783'
      },
      darkGray: {
        DEFAULT: '#32363E'
      }
    },
    screens: {
      '3xl': { max: '1919px' },
      // => @media (max-width: 1919px) { ... }

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        gotham: ['Gotham'],
        gothamreg: ['Gotham-book'],
        gothammed: ['Gotham-medium'],
        inter: ['Inter'],
        interblack: ['Inter-Black'],
        interbold: ['Inter-Bold'],
        interextrabold: ['Inter-ExtraBold'],
        interextralight: ['Inter-ExtraLight'],
        interlight: ['Inter-Light'],
        intermedium: ['Inter-Medium'],
        intersemibold: ['Inter-SemiBold'],
        interthin: ['Inter-Thin']
      },
      opacity: {
        '04': '.04',
        '05': '.05',
        '08': '.08',
        16: '.16'
      },
      boxShadow: {
        base: '0px 8px 24px 0px rgba(0, 0, 0, 0.6)',
        popover: '0px 0px 30px 0px rgba(0, 0, 0, 0.6)',
        'p2p': '0px 8px 24px rgba(18, 18, 18, 0.4)'
      },
      backgroundImage: {
        'p2p': 'linear-gradient(144.2deg, #04151B 37.02%, #2C3437 107.56%), linear-gradient(180deg, #051C24 0%, rgba(5, 28, 36, 0) 137.03%, rgba(255, 255, 255, 0) 137.03%)',
        'about-us': 'linear-gradient(144.2deg, #04151B 37.02%, #2C3437 107.56%)'
      },
      backgroundSize: {
        '100': '100%',
        '1920': '1920px',
      },
      backgroundPosition: {
        'top-center': '50% 0'
      },
      maxWidth: {
        'main': '1910px',
        'sub': '1740px'
      },
      borderColor: {
        'onboarding-100': 'rgba(123, 210, 239, .16)',
        'onboarding-200': 'rgba(123, 210, 239, .08)',
        'onboarding-300': 'rgba(76, 194, 234, .48)'
      },
      backgroundColor: {
        'onboarding-100': 'rgba(123, 210, 239, .04)',
        'onboarding-200': 'rgba(123, 210, 239, .08)',
        'onboarding-300': 'rgba(76, 194, 234, .12)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        '.scrollstyle::-webkit-scrollbar': {
          background: 'transparent',
          width: '4px'
        },
        '.scrollstyle::-webkit-scrollbar-thumb': {
          background: '#365863',
          borderRadius: '4px'
        },
        '.filters::-webkit-scrollbar': {
          background: 'transparent',
          width: '8px'
        },
        '.filters::-webkit-scrollbar-thumb': {
          background: '#365863',
          height: '30px',
          borderRadius: '8px'
        },
        '.registration-gradient': {
          background:
            'radial-gradient(100% 100% at 50% 0%, #22222E 0%, rgba(18, 18, 25, 0) 100%)'
        },
        '.bg-body-img': {
          background: 'url(/img/old/footer.png) center bottom no-repeat'
        },
        '.bg-homeblock': {
          background:
            'linear-gradient(144.2deg, #181820 37.02%, #2C2C37 107.56%)'
        },
        '.popup-shadow': {
          boxShadow: '0px 0px 10px rgb(0 0 0 / 40%)'
        },
        '.list-dot': {
          position: 'relative'
        },
        '.list-dot > span:first-child': {
          content: '',
          fontFamily: 'Gotham',
          width: '.3rem',
          height: '.3rem',
          position: 'absolute',
          backgroundColor: 'currentColor',
          borderRadius: '50%',
          left: '-1rem',
          top: '.55rem',
          color: '#fff'
        },
        '.f-40': {
          flex: '10rem 0 0'
        },
        '.pop-shadow': {
          boxShadow: '0px 0px 30px rgb(0 0 0 / 70%)'
        },
        '.check': {
          display: 'none'
        },
        'input:checked + span .check': {
          display: 'block'
        },
        '.notice + span': {
          display: 'none'
        },
        '.notice:hover + span': {
          display: 'block'
        },
        '.range-wrapper .range-slider': {
          height: '4px',
          background: 'transparent',
          width: 'calc(100% - 10px)',
          marginLeft: '5px'
        },
        '.range-wrapper.range-wrapper .range-slider__range': {
          background: '#FF8753',
          marginTop: '-2px',
          height: '4px'
        },
        '.range-wrapper.range-wrapper .range-slider .range-slider__thumb': {
          background: '#FF8753',
          width: '12px',
          height: '12px',
          border: '6px solid rgba(253,174,255, .2)',
          backgroundClip: 'padding-box',
          boxSizing: 'content-box',
          top: 0,
          borderRadius: '50%',
          outline: '0'
        },
        '.range-slider.range-slider .range-slider__thumb:focus-visible': {
          boxShadow: 'none'
        },
        '.filter-checkbox': {
          position: 'relative',
          fontSize: '14px',
          paddingLeft: '36px',
          marginBottom: '7px',
          cursor: 'pointer'
        },
        '.filter-checkbox span': {
          position: 'absolute',
          content: '',
          width: '24px',
          height: '24px',
          borderRadius: '8px',
          background: '#365863',
          left: 0,
          top: '-1px'
        },
        '.filter-checkbox:hover span': {
          background: '#15718E'
        },
        '.filter-checkbox img': {
          left: '5px',
          top: '6px',
          position: 'absolute'
        },
        'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button':
          {
            appearance: 'none'
          },
        '.overlay': {
          background: 'rgba(27,29,33,.4)'
        },
        '.overlay-black': {
          background: 'rgba(0,0,0,.2)'
        },
        input: {
          outline: 'none'
        },
        '.faq ul, .faq ol': {
          listStyle: 'inherit',
          paddingLeft: '40px',
          marginBottom: '24px'
        },
        '.faq ul li, .faq ol li': {
          marginBottom: '8px'
        },
        '.faq p': {
          marginBottom: '24px'
        },
        '.asset-image': {
          width: 'auto !important',
          height: 'auto !important',
          position: 'static !important'
        }
      })
    })
  ]
}
