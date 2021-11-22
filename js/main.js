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
