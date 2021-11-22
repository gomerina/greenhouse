// Меняем положение кнопки в разметке на адаптиве. Главная страница первый экран
function setLink () {
	$('.main-block__text').find('.link-btn__box').appendTo('.main-block');
}
window.addEventListener("resize", function() {
	if (window.innerWidth < 1024) {
		setLink();
	}
	else {
		$('.main-block').find('.link-btn__box').appendTo('.main-block__text');
		$('.header__menu').removeClass('active');
		$('.header__burger').removeClass('active');
		$('html').css('overflow','hidden auto');
	}
});
function res (){
	if (window.innerWidth < 1024) {
		setLink();
	}
	else {
		$('.main-block').find('.link-btn__box').appendTo('.main-block__text');
	}	
}
res();

// Открыть адаптивное меню
$('.header__burger').click(function(){
	$('.header__menu').toggleClass('active');
	$('.header__burger').toggleClass('active');
	// Блокируем прокрутку страницы при открытии меню
	if ($('.header__menu').hasClass('active')) {
		$('html').css('overflow','hidden')
	} else {
		$('html').css('overflow','hidden auto')
	}
});
