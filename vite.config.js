// vite.config.js
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

const options = { pretty: true, doctype: 'html' }
const locals = {
  "breadcrumbCatalog":  ['Главная', 'каталог'],
  "pagesMenu": [
    {
      name: "Главная",
      url: "/"
    },
    {
      name: "Каталог",
      url: "/catalog/"
    },
    {
      name: "Каталог женщины",
      url: "/catalog/woman/"
    },
    {
      name: "Каталог lookbook",
      url: "/catalog/lookbook/"
    },
    {
      name: "Карточка товара",
      url: "/catalog/product/"
    },
    {
      name: "О бренде",
      url: "/brand/"
    },
    {
      name: "Палитра",
      url: "/palette/"
    },
    {
      name: "Пресса",
      url: "/press/"
    },
    {
      name: "Профиль",
      url: "/profile/"
    },
    {
      name: "Заказы и возвраты",
      url: "/profile/orders/"
    },
    {
      name: "Заказ",
      url: "/profile/order/"
    },
    {
      name: "Адрес доставки",
      url: "/profile/address/"
    },
    {
      name: "Данные для входа",
      url: "/profile/update/"
    },
    {
      name: "Поиск",
      url: "/catalog/search/"
    },
    {
      name: "Popup",
      url: "/popup/"
    },
    {
      name: "Корзина",
      url: "/basket/"
    },
    {
      name: "Корзина пустая",
      url: "/basket/empty.html"
    },
    {
      name: "Спасибо за ваш заказ!",
      url: "/basket/order-creation/index.html"
    },
    {
      name: "Частые вопросы",
      url: "/faq/index.html"
    },
    {
      name: "Такой страницы не существует 404",
      url: "/404/index.html"
    },
    {
      name: "Контакты",
      url: "/contact/index.html"
    },
    {
      name: "Оплата",
      url: "/payment/index.html"
    },
    {
      name: "Lookbook 1",
      url: "/catalog/lookbook/index_1.html"
    },
    {
      name: "Lookbook 2",
      url: "/catalog/lookbook/index_2.html"
    },
    {
      name: "Lookbook 3",
      url: "/catalog/lookbook/index_3.html"
    }
  ],
  "press": [
    {
      title: "/images/pages/press/img.png",
      text: "Аксессуары для адептов минимализма в коллекции HIGHCRAFT",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_1.png",
      text: "Коллекция сумок российского бренда HIGHCRAFT и другие модные новости недели",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_2.png",
      text: "Российский бренд кожаных аксессуаров HIGHCRAFT представил коллекцию AURA",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_3.png",
      text: "Российский бренд HIGHCRAFT создает кожаные сумки современного дизайна из материалов премиального качества",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_2.png",
      text: "Российский бренд кожаных аксессуаров HIGHCRAFT представил коллекцию AURA",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_1.png",
      text: "Коллекция сумок российского бренда HIGHCRAFT и другие модные новости недели",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_3.png",
      text: "Российский бренд HIGHCRAFT создает кожаные сумки современного дизайна из материалов премиального качества",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_2.png",
      text: "Российский бренд кожаных аксессуаров HIGHCRAFT представил коллекцию AURA",
      image: "/images/pages/press/img_4.png"
    },
    {
      title: "/images/pages/press/img_1.png",
      text: "Коллекция сумок российского бренда HIGHCRAFT и другие модные новости недели",
      image: ""
    }
  ]
}

export default defineConfig({
  plugins: [
    pugPlugin(options, locals),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        about: 'about.html',
      },
    },
  },
});
