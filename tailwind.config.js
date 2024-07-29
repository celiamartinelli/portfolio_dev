/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        bgFirstgradient: '#aef1d7',
        bgSecondGradient: '#def1f6',
        bgThirdGradient: '#7cd4e6',
        lightBlue: '#b4d9fc',
        blue: '#90bce5',
        lightMint: '#7edfd1',
        dark: '#0d0d0d',
        light: '#f5f5f5',
        lightsage: '#d8e2dc',
        sage: '#adc9b8',
        darkSage: '#89a594',
        cream: '#ffe5d9',
        lightPink: '#ffcad4',
        pink: '#f4acb8',
        brown: '#9e8189',
        darkBrown: '#6d6875',
        rosyBrown: '#bfa4a4',
        // Button Navigation
        lightButtonNav: '#b4d9fc',
        lightTextButtonNav: '#112a46',
        darkButtonNav: '#112a46',
        darkTextButtonNav: '#f5f5f5',
        // Tag HardSkills(Technologies)
        lightTag: '#7edfd1',
        lightTextTag: '#112a46',
        darkTag: '#114538',
        darkTextTag: '#f5f5f5',
        // Tag SoftSkills
        lightTagSoft: '#35a78b',
        lightTextTagSoft: '#112a46',
        darkTagSoft: '#073328',
        darkTextTagSoft: '#f5f5f5',

        // autre couleur DarkMode:
        vertEmeraudLight: '#0a9090',
        vertEmeraud: '#096f70',
        vertDark: '#05262a',
        vertFonce1: '#0f9f99',
        vertClair: '#0ec0ba',
        vertFonce2: '#089a90',
      },
      backgroundImage: {
        'custom-bg': "url('/assets/bg.png')",
        'custom-bg-dark': "url('/assets/bg-dark.png')",
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        press: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'background-fade': {
          '0%': { backgroundColor: 'rgba(0,0,0,0)' },
          '100%': { backgroundColor: 'rgba(255,255,255,0.75)' },
        },
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        'background-fade': 'background-fade 0.5s ease-in-out',
        press: 'press 0.5s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 0.3) infinite',
      },
      transitionProperty: {
        bg: 'background-color',
        text: 'color',
        shadow: 'box-shadow',
      },
    },
  },
  plugins: [],
};
