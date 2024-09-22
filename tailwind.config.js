/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,pug,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['fs_elliot_probold', 'sans-serif'],
        elliotProBold: ['fs_elliot_probold', 'sans-serif'], // Ключ для fs_elliot_probold
        inter: ['Inter', 'sans-serif'],                     // Ключ для Inter
        montserrat: ['Montserrat', 'sans-serif'],           // Ключ для Montserrat
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}