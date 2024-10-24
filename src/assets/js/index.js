import '../css/index.css';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

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

function sliderHeroMobile() {
	const slider = document.querySelector('.js-slider-menu-brands-mobile');

	if (slider) {
		const scrollbar = slider.querySelector('.swiper-scrollbar');

		new Swiper(slider, {
			modules: [Scrollbar],
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 8,
			scrollbar: {
				el: scrollbar,
			}
		});
	}
}

function popularCategories() {
	const slider = document.querySelector('.js-slider-popular-categories');

	if (slider) {
		new Swiper(slider, {
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 16,
			breakpoints: {
				640: {
					slidesPerView: 5,
					spaceBetween: 16
				},
				1280: {
					slidesPerView: 6,
					spaceBetween: 32
				}
			}
		});
	}
}

function productsSlider() {
	const slider = document.querySelector('.js-products-tabs__slider');

	if (slider) {
		const navLeft = slider.querySelector('.js-products-tabs__nav-left');
		const navRight = slider.querySelector('.js-products-tabs__nav-right');

		new Swiper(slider, {
			modules: [Navigation],
			loop: true,
			slidesPerView: '2',
			spaceBetween: 16,
			navigation: {
				nextEl: navLeft,
				prevEl: navRight
			},
			breakpoints: {
				640: {
					slidesPerView: 4,
					spaceBetween: 16
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 32
				},
				1536: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			}
		});
	}
}

function compilationsSlider() {
	const slider = document.querySelector('.js-compilations__slider');

	if (slider) {
		new Swiper(slider, {
			modules: [Navigation],
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 8,
			breakpoints: {
				640: {
					slidesPerView: 4,
					spaceBetween: 16
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 32
				},
				1536: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			}
		});
	}
}

function brandsSlider() {
	const slider = document.querySelector('.js-brands__slider');

	if (slider) {
		const navLeft = slider.querySelector('.js-brands__nav-left');
		const navRight = slider.querySelector('.js-brands__nav-right');

		new Swiper(slider, {
			modules: [Navigation],
			loop: true,
			slidesPerView: 'auto',
			spaceBetween: 8,
			navigation: {
				nextEl: navLeft,
				prevEl: navRight
			},
			breakpoints: {
				640: {
					slidesPerView: 6,
					spaceBetween: 20
				},
				1280: {
					slidesPerView: 6,
					spaceBetween: 40
				}
			}
		});
	}
}

function eventsSlider() {
	const slider = document.querySelector('.js-events__slider');

	if (slider) {
		const navLeft = slider.querySelector('.js-events__nav-left');
		const navRight = slider.querySelector('.js-events__nav-right');

		new Swiper(slider, {
			modules: [Navigation],
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				640: {
					slidesPerView: 4,
					spaceBetween: 16
				},
				1280: {
					slidesPerView: 3,
					spaceBetween: 32
				},
				1536: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			},
			navigation: {
				nextEl: navLeft,
				prevEl: navRight
			},
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	sliderHero();
	sliderHeroMobile();
	popularCategories();
	productsSlider();
	compilationsSlider();
	brandsSlider();
	eventsSlider();
});
