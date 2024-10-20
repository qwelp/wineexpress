import '../css/index.css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

function sliderHero() {
	const sliderHero = document.querySelector('.js-sliders-hero-banners');

	if (sliderHero) {
		new Swiper(sliderHero, {
			modules: [Pagination],
			slidesPerView: '1',
			pagination: {
				el: ".js-sliders-hero-banners__pagination",
			},
		});
	}
}

function productsSlider() {
	const slider = document.querySelector('.js-products-tabs__slider');
	const navLeft = slider.querySelector('.js-products-tabs__nav-left');
	const navRight = slider.querySelector('.js-products-tabs__nav-right');

	if (slider) {
		new Swiper(slider, {
			modules: [Navigation],
			loop: true,
			slidesPerView: '4',
			spaceBetween: 40,
			navigation: {
				nextEl: navLeft,
				prevEl: navRight
			},
		});
	}
}


function brandsSlider() {
	const slider = document.querySelector('.js-brands__slider');
	const navLeft = slider.querySelector('.js-brands__nav-left');
	const navRight = slider.querySelector('.js-brands__nav-right');

	if (slider) {
		new Swiper(slider, {
			modules: [Navigation],
			loop: true,
			slidesPerView: '6',
			spaceBetween: 40,
			navigation: {
				nextEl: navLeft,
				prevEl: navRight
			},
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	sliderHero();
	productsSlider();
	brandsSlider();
});
