import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default class MobileMenu {
	constructor() {
		const sliders = document.querySelectorAll('.js-slider-menu');
		const slidersBrands = document.querySelectorAll('.js-slider-menu-brands');

		sliders.forEach(slider => {
			new Swiper(slider, {
				slidesPerView: 'auto',
				spaceBetween: 12,
				breakpoints: {
					768: {
						slidesPerView: '4',
						spaceBetween: 12
					},
					1280: {
						slidesPerView: '4',
						spaceBetween: 24
					}
				}
			});
		});

		if (slidersBrands) {
			slidersBrands.forEach(slider => {
				const scrollbar = slider.querySelector('.swiper-scrollbar');

				new Swiper(slider, {
					modules: [Scrollbar],
					slidesPerView: 'auto',
					spaceBetween: 20,
					scrollbar: {
						el: scrollbar,
					},
					breakpoints: {
						1280: {
							spaceBetween: 40
						}
					}
				});
			});
		}
	}
}

