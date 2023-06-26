/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navBar: '#04151F',
        card: '#183A37',
        blancoAhumado: '#F5F5F5',
        accentColor: '#EFD6AC',
        grisOscuro: '#2C2C2C',
        secundary: '#708D81',
        text: '#708D81',
        cardLigth: '#01497C',
        textLigth: '#001427',
        navbarLigth: '#012A4A',
        secundaryLigth: '#2A6F97',
      },
    },
  },
  plugins: [require('flowbite/plugin'), require('@tailwindcss/aspect-ratio')],
});
