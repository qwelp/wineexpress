// vite.config.js
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

const options = { pretty: true, doctype: 'html' };
const locals = {
	breadcrumbCatalog: ['Главная', 'каталог'],
	mobileMenuSections: [
		{
			name: 'Все вина',
			image: '/src/assets/images/menu/section-1.png'
		},
		{
			name: 'Красное',
			image: '/src/assets/images/menu/section-2.png'
		},
		{
			name: 'Белое',
			image: '/src/assets/images/menu/section-3.png'
		},
		{
			name: 'Розовое',
			image: '/src/assets/images/menu/section-4.png'
		},
		{
			name: 'Красное',
			image: '/src/assets/images/menu/section-1.png'
		},
		{
			name: 'Белое',
			image: '/src/assets/images/menu/section-2.png'
		},
		{
			name: 'Розовое',
			image: '/src/assets/images/menu/section-3.png'
		}
	],
	footerMenu: [
		{
			title: "Каталог",
			items: [
				{ title: "Акции" },
				{ title: "Красное вино" },
				{ title: "Белое вино" },
				{ title: "Крепкое" },
				{ title: "Вода" },
				{ title: "Деликатесы" },
				{ title: "Вода и соки" }
			]
		},
		{
			title: "Клиентам",
			items: [
				{ title: "Подборки" },
				{ title: "Частным клиентам" },
				{ title: "Корпоративным клиентам" },
				{ title: "Условия доставки" },
				{ title: "Карта лояльности" },
				{ title: "Приложение" },
				{ title: "Сертификаты" },
				{ title: "Наши бренды" }
			]
		},
		{
			title: "О компании",
			items: [
				{ title: "Контакты" },
				{ title: "Мероприятия" },
				{ title: "Блог" },
				{ title: "Винотеки" },
				{ title: "Акции" },
				{ title: "Политика конфиденциальности" }
			]
		},
		{
			title: "Контакты",
			items: [
				{ title: "г. Москва, ул. Поклонная, д. 3, корп. E1" },
				{ title: "Тел. 8 (800) 511-90-90", link: "tel:88005119090" },
				{ title: "Факс +7 (495) 980-10-74", link: "tel:+74959801074" },
				{ title: "Info@wineexpress.ru", link: "mailto:Info@wineexpress.ru" }
			]
		}
	],
	popularProducts: [
		{
			title: 'Красное вино'
		},
		{
			title: 'Белое вино'
		},
		{
			title: 'Крепкие напитки'
		},
		{
			title: 'Деликатесы'
		},
		{
			title: 'Аксессуары'
		},
		{
			title: 'В подарок'
		}
	],
	productsIndex: [
		{
			name: "Вино SET Art Russe Chateau la u des Prieurs 2014 AOC Chess Box 6*0,75l",
			image: "/src/assets/images/pages/index/product-1.png"
		},
		{
			name: "Вино SET Art Russe Chateau la u des Prieurs 2014 AOC Chess Box 6*0,75l",
			image: "/src/assets/images/pages/index/product-2.png"
		},
		{
			name: "Вино SET Art Russe Chateau la u des Prieurs 2014 AOC Chess Box 6*0,75l",
			image: "/src/assets/images/pages/index/product-3.png"
		},
		{
			name: "Вино SET Art Russe Chateau la u des Prieurs 2014 AOC Chess Box 6*0,75l",
			image: "/src/assets/images/pages/index/product-4.png"
		}
	]
};

export default defineConfig({
	plugins: [
		pugPlugin(options, locals),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'src/assets/images/icons')],
			symbolId: 'icon-[dir]-[name]',
			inject: 'body-last',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			input: {
				index: 'index.html',
				about: 'about.html'
			}
		}
	}
});
