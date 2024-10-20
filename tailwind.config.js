/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,pug,css}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['FS Elliot Pro', 'sans-serif'],
				elliotProBold: ['fs_elliot_probold', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
			colors: {
				primary: '#444444',
				navLink: '#2c2c38',
				gray100: '#F2F3F5',
				gray300: '#d0d0d0',
				gray400: '#c4c4c4',
				accentRed: '#b12333',
				gray500: '#acacbc',
				bgLight: '#F4F4F4',
				gray50: '#F6F6F6',
				gray600: '#B3B3B3',
				customRed: '#A41012',
				coolGray: '#707090',
				gray700: '#AEAEAE',
				gray800: '#f5f5f7',
				gray900: '#ababbc',
				gray1000: '#dfdfe6',
			},
			fontSize: {
				xs: ['12px', '16px'],     // Очень маленький текст
				sm: ['14px', '20px'],     // Маленький текст
				base: ['16px', '24px'],   // Базовый размер текста
				lg: ['18px', '28px'],     // Большой текст
				xl: ['20px', '28px'],     // Очень большой текст
				'2xl': ['24px', '32px'],  // Текст в 2 раза больше базового
				'3xl': ['30px', '36px'],  // Текст в 3 раза больше базового
				'4xl': ['36px', '40px'],  // Текст в 4 раза больше базового
				'5xl': ['48px', '1'],     // Текст в 5 раз больше базового
				'6xl': ['60px', '1'],     // Текст в 6 раз больше базового
				'7xl': ['72px', '1'],     // Текст в 7 раз больше базового
				'8xl': ['96px', '1'],     // Текст в 8 раз больше базового
				'9xl': ['128px', '1'],    // Текст в 9 раз больше базового
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '12px',
				sm: '12px',
				lg: '20px',
				xl: '20px',
				'2xl': '0',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
				'3xl': '1792px',
			},
		},
	},
	plugins: [],
};
