/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,pug,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['fs_elliot_probold', 'sans-serif'],
        elliotProBold: ['fs_elliot_probold', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}