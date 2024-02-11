/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      desktopL: '1536px',
      // => @media(min-width: 1536px)
      desktop: '1280px',
      // => @media(min-width: 1280px)
      laptop: '1024px',
      // => @media(min-width: 1024px)
      tabletL: '768px',
      // => @media(min-width: 768px)
      tablet: '640px',
      // => @media(min-width: 640px)
      mobile: '390px',
      // => @media(min-width: 390px)
    },
    extend: {
      colors: {
        black: '#27282C',
        white: '#fff',
        pink: '#A60844',
        orange: '#FFBE41',
        purple: '#6960C6',
        green: '#65DE95',
        grey: '#EEEEEE',
        blue: '#2563EB',
      },
    },
  },
  plugins: [],
};
