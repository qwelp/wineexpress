/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,pug,css}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['fs_elliot_probold', 'sans-serif'],
				elliotProBold: ['fs_elliot_probold', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
			colors: {
				primary: '#444444',
				navLink: '#2c2c38',
				gray300: '#d0d0d0',
				gray400: '#c4c4c4',
				accentRed: '#b12333',
				gray500: '#acacbc',
				bgLight: '#F4F4F4',
				gray50: '#F6F6F6',
				gray600: '#B3B3B3',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '16px',
			},
			screens: {
				md: '960px',    // Планшет
				xl: '1920px',   // Десктоп
			},
		},
	},
	plugins: [],
};
