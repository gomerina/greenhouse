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
// Открыть навигационные элементы в каталоге
$('.aside__link.current').click(function(e){
	e.preventDefault();
	$('.aside__link').toggleClass('active');
	$('.aside-chevron').toggleClass('rotated');
});
// Открыть модальное окно с формой
$('#header-form__btn').click(function(e){
	e.preventDefault();
	$('.modal-form').addClass('open');
	$('.overlay').addClass('active');
});
$('#main-modal__btn').click(function(e){
	e.preventDefault();
	$('.modal-form').addClass('open');
	$('.overlay').addClass('active');
})
// Закрыть модальное окно с формой
$('.close-modal').click(function(){
	$('.modal-form').removeClass('open');
	$('.overlay').removeClass('active');
})