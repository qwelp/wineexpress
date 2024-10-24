import '../fonts/fs_elliot_pro/stylesheet.css';
import '../css/global.css';

import 'swiper/swiper-bundle.css';
import MobileMenu from './classes/MobileMenu.js';
import Dropdown from './classes/Dropdown.js';
import 'virtual:svg-icons-register';

function getElementPosition(element) {
	let top = 0;
	let left = 0;

	while (element) {
		top += element.offsetTop;
		left += element.offsetLeft;
		element = element.offsetParent;
	}

	return { top, left };
}

function menuCatalogAutoTopStyle() {
	const viewportWidth = window.innerWidth;
	const toggleButton = document.querySelector('.js-toggle-menu');
	const headerWrapper = document.querySelector('.js-header-wrapper');
	const popupMenu = document.querySelector('.popup-menu');

	const positionToggleMenu = getElementPosition(toggleButton);

	if (viewportWidth >= 1536) {
		popupMenu.style.left = `${positionToggleMenu.left}px`;
	} else {
		popupMenu.removeAttribute('style');
	}

	if (viewportWidth >= 768) {
		popupMenu.style.top = `${headerWrapper.offsetHeight + 10}px`;
	}
}

function menuCatalogToggle() {
	const button = document.querySelector('.js-toggle-menu');
	const menu = document.querySelector('.popup-menu');
	const popupWrapper = document.querySelector('.js-popup-wrapper');
	const closeButton = document.querySelector('.js-popup-close'); // Находим кнопку закрытия
	const openButton = document.querySelector('.js-popup-open'); // Находим кнопку открытия

	if (button) {
		button.addEventListener('click', () => {
			// Открываем или закрываем меню и обёртку
			toggleMenu();
		});
	}

	// Закрываем меню при клике на обертку popupWrapper
	if (popupWrapper) {
		popupWrapper.addEventListener('click', () => {
			if (!menu.classList.contains('hidden')) {
				toggleMenu();
			}
		});
	}

	// Закрываем меню при клике на кнопку закрытия
	if (closeButton) {
		closeButton.addEventListener('click', () => {
			if (!menu.classList.contains('hidden')) {
				toggleMenu();
			}
		});
	}

	// Открываем меню при клике на кнопку открытия
	if (openButton) {
		openButton.addEventListener('click', () => {
			if (menu.classList.contains('hidden')) {
				menu.classList.remove('hidden');
				popupWrapper.classList.remove('hidden');
			}
		});
	}

	// Функция для переключения видимости меню
	function toggleMenu() {
		if (menu.classList.contains('hidden')) {
			menu.classList.remove('hidden');
			popupWrapper.classList.remove('hidden');
		} else {
			menu.classList.add('hidden');
			popupWrapper.classList.add('hidden');
		}
	}
}

function popupWrapperTopStyleAuto() {
	const headerWrapper = document.querySelector('.js-header-wrapper');
	const popupWrapper = document.querySelector('.js-popup-wrapper');
	const footerWrapper = document.querySelector('.js-footer');

	// Устанавливаем отступ сверху в зависимости от высоты хедера
	popupWrapper.style.top = `${headerWrapper.offsetHeight}px`;

	// Рассчитываем полную высоту страницы и высоту видимой области
	const availableHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);

	// Вычитаем высоту хедера и футера из полной высоты
	popupWrapper.style.height = `${availableHeight - headerWrapper.offsetHeight - footerWrapper.offsetHeight}px`;
}


window.addEventListener('resize', menuCatalogAutoTopStyle);

document.addEventListener('DOMContentLoaded', () => {
	new MobileMenu();

	const dropdownElements = document.querySelectorAll('.js-dropdown');
	if (dropdownElements.length) {
		dropdownElements.forEach(dropdown => {
			new Dropdown(dropdown);
		});
	}

	menuCatalogAutoTopStyle();
	popupWrapperTopStyleAuto();
	menuCatalogToggle();
});
