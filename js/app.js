$(document).ready(function () {

	// -------------------- header --------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('header').addClass('active');
		}
		else {
			$('header').removeClass('active');
		}
	});

	// --------------------- Category Tabs ---------------------------
	var tab = $('#catTabs .tabs-items > div');
	tab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#catTabs .tabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#catTabs .tabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('#catTabs .tabs-nav a[href=' + $(this).attr('href') + ']').click();
	});
	// Отрытие вкладки из хеша URL
	if (window.location.hash) {
		$('#tabs-nav a[href=' + window.location.hash + ']').click();
		window.scrollTo(0, $("#".window.location.hash).offset().top);
	}

	// --------------------- Search Tabs ---------------------------
	var tab = $('#searchTabs .stabs-items > div');
	tab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#searchTabs .stabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#searchTabs .stabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('#searchTabs .stabs-nav a[href=' + $(this).attr('href') + ']').click();
	});

	// --------------------- Product Tabs ---------------------------
	var tab = $('#productTabs .ptabs-items > div');
	tab.hide().filter(':first').show();
	// Клики по вкладкам.
	$('#productTabs .ptabs-nav a').click(function () {
		tab.hide();
		tab.filter(this.hash).show();
		$('#productTabs .ptabs-nav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
	// Клики по якорным ссылкам.
	$('.tabs-target').click(function () {
		$('#productTabs .ptabs-nav a[href=' + $(this).attr('href') + ']').click();
	});

	// -------------------- burger --------------------------
	const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close'),
		body = document.querySelector('body');
	/*===== MENU SHOW =====*/
	if (navToggle) {
		navToggle.addEventListener('click', () => {
			navMenu.classList.add('show-menu');
			body.classList.add('dis-scroll');
		})
	}
	/*===== MENU HIDDEN =====*/
	if (navClose) {
		navClose.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			body.classList.remove('dis-scroll');
		})
	}
	/*=============== REMOVE MENU MOBILE ===============*/
	const navLink = document.querySelectorAll('.nav__link')
	const linkAction = () => {
		const navMenu = document.getElementById('nav-menu')
		navMenu.classList.remove('show-menu');
		body.classList.remove('dis-scroll');
	}
	navLink.forEach(n => n.addEventListener('click', linkAction));

	
	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();	


	/*=============== Accrodion ===============*/
	const accordionItems = document.querySelectorAll('.accordion-item')
	accordionItems.forEach((item) => {
		const accordionHeader = item.querySelector('.accordion-header')
		accordionHeader.addEventListener('click', () => {
			const openItem = document.querySelector('.accordion-open')
			toggleItem(item)
			if (openItem && openItem !== item) {
				toggleItem(openItem)
			}
		})
	})
	const toggleItem = (item) => {
		const accordionContent = item.querySelector('.accordion-content')
		if (item.classList.contains('accordion-open')) {
			accordionContent.removeAttribute('style')
			item.classList.remove('accordion-open')
		} else {
			accordionContent.style.height = accordionContent.scrollHeight + 'px'
			item.classList.add('accordion-open')
		}
	}


	/*=============== Accrodion ===============*/
	// const faccordionItems = document.querySelectorAll('.f-accordion-item')

	// faccordionItems.forEach((item) => {
	// 	const faccordionHeader = item.querySelector('.f-accordion-header')

	// 	faccordionHeader.addEventListener('click', () => {
	// 		const openItem = document.querySelector('.f-accordion-open')

	// 		ftoggleItem(item)

	// 		if (openItem && openItem !== item) {
	// 			ftoggleItem(openItem)
	// 		}
	// 	})
	// })
	// const ftoggleItem = (item) => {
	// 	const faccordionContent = item.querySelector('.f-accordion-content')

	// 	if (item.classList.contains('f-accordion-open')) {
	// 		faccordionContent.removeAttribute('style')
	// 		item.classList.remove('f-accordion-open')
	// 	} else {
	// 		faccordionContent.style.height = faccordionContent.scrollHeight + 'px'
	// 		item.classList.add('f-accordion-open')
	// 	}
	// }

	// ----------------- SWIPER ----------------------
	var mainSwiper = new Swiper(".specialSwiper", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	var newSwiper = new Swiper(".newSwiper", {
		slidesPerView: "auto",
		spaceBetween: 70,
		breakpoints: {
			320: {
				spaceBetween: 18
			},
			769: {
				spaceBetween: 30
			},
			1440: {
				spaceBetween: 70
			},
		}
	});

	var productThumbs = new Swiper(".productThumbs", {
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		direction: "vertical",
	});
	var productGallery = new Swiper(".productGallery", {
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: productThumbs,
		},
	});


	// ------------------- Fancybox -------------------
	$('[data-fancybox]').fancybox({
		closeExisting: true,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false,
		lang: 'ru',
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Вперёд',
				PREV: 'Назад',
				FULL_SCREEN: 'На весь экран',
			}
		},
	});


	// ------------------- jQuery Validation -------------------

	$("#formRegistr").validate({
		debug: true,
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			email: {
				required: true,
				email: true,
			},
			password: {
				required: true,
			},
		},
		messages: {
			name: {
				required: "Пожалуйста, введите ваше имя",
				minlength: jQuery.validator.format("Имя должно содержать больше двух символов")
			},
			email: {
				required: "Это обязательное поле",
				email: "Поле заполнено не верно"
			},
			password: {
				required: "Это обязательное поле",
			},
		}
	});

	$("#formLogin").validate({
		debug: true,
		rules: {
			email: {
				required: true,
				email: true,
			},
			password: {
				required: true,
			},
		},
		messages: {
			email: {
				required: "Это обязательное поле",
				email: "Поле заполнено не верно"
			},
			password: {
				required: "Это обязательное поле",
			},
		}
	});


	// ------------------- Choices Select ------------------
	// const multiDefault = () => {
	// 	const elements = document.querySelectorAll('.select-default');
	// 	elements.forEach(element => {
	// 		const choices = new Choices(element, {
	// 			searchEnabled: false,
	// 			itemSelectText: '',

	// 		});
	// 	});
	// }
	// multiDefault();

	// -------------------------modal----------------------
	// $('.to-state').on('click', function (event) {
	// 	event.preventDefault();
	// 	$('div').removeClass('active');
	// 	$('.state').removeClass('active');
	// 	var state = $(this).attr('data-state');
	// 	$('.state[data-state=' + state + ']').addClass('active');
	// });
	// $('.close').on('click', function (event) {
	// 	$(this).parents().removeClass('active');
	// });
	// jQuery(function ($) {
	// 	$(document).mouseup(function (e) { // событие клика по веб-документу
	// 		var div = $(".state-box"); // тут указываем ID элемента
	// 		if (!div.is(e.target) // если клик был не по нашему блоку
	// 			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
	// 			div.parents().removeClass('active'); // скрываем его
	// 			$('body').removeClass('modal-open');
	// 		}
	// 	});
	// });

	//end
});