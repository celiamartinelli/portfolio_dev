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
      },
      backgroundImage: {
        'custom-bg': "url('/assets/bg.png')",
        'custom-bg-dark': "url('/assets/bg-dark.png')",
      },
    },
  },
  plugins: [],
};
