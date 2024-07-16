/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgFirstgradient: '#aef1d7',
        bgSecondGradient: '#def1f6',
        bgThirdGradient: '#7cd4e6',
        azur: '#89f4f2',
      },
    },
  },
  plugins: [],
};
