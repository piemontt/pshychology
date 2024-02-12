$(document).ready(function(){

	$('.qual__slider__card-wrapper').matchHeight();
	$('.orientation__slider__card__content-wrapper').matchHeight({
		byRow: true,
	});

	$('.orientation__slider').slick({
		slidesToShow: 4,
		dots: true,
		dotsClass: 'slider_dots',
		arrows: true,
		prevArrow: '<div class="slider_arrow slider_arrowleft"></div>',
		nextArrow: '<div class="slider_arrow slider_arrowright"></div>',
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
				}
			},  
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},  
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					arrows: false,
					
				}
			},  
		],
	});

	$('.qual__slider').slick({
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 3,
		centerPadding: '70px',
		dots: true,
		dotsClass: 'slider_dots',
		arrows: true,
		prevArrow: '<div class="slider_arrow slider_arrowleft"></div>',
		nextArrow: '<div class="slider_arrow slider_arrowright"></div>',
		responsive: [
			{
				breakpoint: 556,
				settings: {
					slidesToShow: 1,
					centerPadding: 0,
					arrows: false,
					centerPadding: '0px',
				}
			},  
		],
	});

	$('.review__slider').slick({
		slidesToShow: 4,
		dots: true,
		dotsClass: 'slider_dots',
		arrows: true,
		prevArrow: '<div class="slider_arrow slider_arrowleft"></div>',
		nextArrow: '<div class="slider_arrow slider_arrowright"></div>',
		responsive: [
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
					centerPadding: '0px',
				}
				
			},  
			{
				breakpoint: 556,
				settings: {
					slidesToShow: 1,
					arrows: false,
					centerPadding: '0px',
				}

			},  
			
		],
	});

	function scrollTo(dest) {
		$('.burger-menu-wrapper').hasClass('burger-display') ? $('.burger-menu-wrapper').toggleClass('burger-display') : null;
	 	$('html, body').animate({
			scrollTop: dest.offset().top
		}, 1000);
	}

	$('a[href="#aboutMe"]').click( () => {scrollTo( $('.head') )} );

	$('a[href="#aboutPoject"]').click( () => {scrollTo( $('.orientation') )} );

	$('a[href="#format"]').click( () => {scrollTo( $('.format') )} );

	$('a[href="#review"]').click( () => {scrollTo( $('.review') )} );

	$('#burger-close').click(function() {
		$('.burger-menu-wrapper').toggleClass('burger-display')
	});

	$('.burger-button').click(function() {
		$('.burger-menu-wrapper').toggleClass('burger-display')
	});

});




