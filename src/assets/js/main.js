import '../fonts/fs_elliot_pro/stylesheet.css';
import '../css/global.css';

import 'swiper/swiper-bundle.css';
import MobileMenu from './classes/MobileMenu.js';
import Dropdown from './classes/Dropdown.js';
import 'virtual:svg-icons-register';

document.addEventListener('DOMContentLoaded', () => {
	new MobileMenu();

	const dropdownElements = document.querySelectorAll('.js-dropdown');
	if (dropdownElements.length) {
		dropdownElements.forEach(dropdown => {
			new Dropdown(dropdown);
		});
	}
});

console.log('main.js');
