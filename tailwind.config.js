/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      },
      transitionDuration: {
        2500: '2500ms',
        3000: '3000ms',
        3500: '3500ms',
        4000: '4000ms',
        4500: '4500ms',
      },
    },
  },
  plugins: [],
};
