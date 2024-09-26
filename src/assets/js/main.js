import '../fonts/fs_elliot_probold/stylesheet.css';
import '../css/global.css';

import 'swiper/swiper-bundle.css';
import MobileMenu from './classes/MobileMenu.js';
import 'virtual:svg-icons-register';

document.addEventListener('DOMContentLoaded', () => {
	new MobileMenu();
});

console.log('main.js');
