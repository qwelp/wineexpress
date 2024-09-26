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
			name: 'Все вина'
		},
		{
			name: 'Красное',
			image: '/src/assets/images/menu/red.webp'
		},
		{
			name: 'Белое',
			image: '/src/assets/images/menu/red.webp'
		},
		{
			name: 'Розовое',
			image: '/src/assets/images/menu/red.webp'
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
