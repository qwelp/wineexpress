/*
Пример

.relative.js-dropdown
    button.js-dropdown-button.flex.items-center.gap-2(
            type="button"
            class="text-[14px]"
            aria-haspopup="true",
            aria-expanded="false",
            aria-controls="dropdownMenu-cities"
        )
        span.opacity-80 Клиентам
        svg(class="w-[11px] h-[3px]")
            use(href="#icon-arrow-down")
    .absolute.t-full.-left-4.m-2.p-3.bg-gray100.hidden.js-dropdown-menu(class="rounded-[8px]", id="dropdownMenu-cities")
        ul.flex.flex-col.gap-3
            each item in ['Частным клиентам', 'Корпоративным клиентам', 'Производители']
                li
                    a.inline-flex.items-center.whitespace-nowrap.gap-2(href="#")
                        span(class="text-[14px]")=item
                        svg(class="w-[26px] h-[13px]")
                            use(href="#icon-arrow-big-right")

    const dropdownElements = document.querySelectorAll('.js-dropdown');
	if (dropdownElements.length) {
		dropdownElements.forEach(dropdown => {
			new Dropdown(dropdown);
		});
	}
 */

export default class Dropdown {
	static activeDropdown = null; // Текущий активный дропдаун

	constructor(dropdownElement) {
		this.dropdown = dropdownElement;
		this.button = this.dropdown.querySelector('.js-dropdown-button');
		this.menu = this.dropdown.querySelector('.js-dropdown-menu');
		this.arrow = this.dropdown.querySelector('.js-dropdown-arrow');
		this.closeButton = this.menu.querySelector('.js-dropdown-close'); // Кнопка закрытия (может быть отсутствующей)

		if (!this.button || !this.menu || !this.arrow) {
			console.warn('Dropdown: Не удалось найти кнопку, меню или стрелку в элементе:', this.dropdown);
			return;
		}

		this.isOpen = false;

		// Привязываем методы к контексту
		this.toggle = this.toggle.bind(this);
		this.close = this.close.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.handleEsc = this.handleEsc.bind(this);
		this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this); // Обработчик клика для кнопки закрытия

		// Добавляем события
		this.button.addEventListener('click', this.toggle);

		// Если кнопка закрытия существует, добавляем обработчик клика
		if (this.closeButton) {
			this.closeButton.addEventListener('click', this.handleCloseButtonClick);
		}
	}

	// Переключение состояния дропдауна
	toggle(event) {
		event.stopPropagation();
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	// Открыть дропдаун
	open() {
		// Закрываем текущий активный дропдаун, если он есть и не равен текущему
		if (Dropdown.activeDropdown && Dropdown.activeDropdown !== this) {
			Dropdown.activeDropdown.close();
		}

		// Устанавливаем текущий дропдаун как активный
		Dropdown.activeDropdown = this;

		this.menu.classList.remove('hidden');
		this.arrow.classList.add('rotate-180');  // Поворачиваем стрелку
		this.button.setAttribute('aria-expanded', 'true');
		document.addEventListener('click', this.handleClickOutside);
		document.addEventListener('keydown', this.handleEsc);
		this.isOpen = true;
	}

	// Закрыть дропдаун
	close() {
		this.menu.classList.add('hidden');
		this.arrow.classList.remove('rotate-180');  // Возвращаем стрелку в исходное положение
		this.button.setAttribute('aria-expanded', 'false');
		document.removeEventListener('click', this.handleClickOutside);
		document.removeEventListener('keydown', this.handleEsc);
		this.isOpen = false;

		// Если текущий дропдаун был активным, очищаем ссылку
		if (Dropdown.activeDropdown === this) {
			Dropdown.activeDropdown = null;
		}
	}

	// Обработчик для закрытия при клике вне дропдауна
	handleClickOutside(event) {
		if (!this.dropdown.contains(event.target)) {
			this.close();
		}
	}

	// Обработчик для закрытия при нажатии Esc
	handleEsc(event) {
		if (event.key === 'Escape') {
			this.close();
		}
	}

	// Обработчик для кнопки закрытия
	handleCloseButtonClick(event) {
		event.stopPropagation(); // Останавливаем распространение события
		this.close(); // Закрываем дропдаун
	}
}
