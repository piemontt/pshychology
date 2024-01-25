$(document).ready(function(){
  $('.orientation_slider_card-content').matchHeight({
    byRow: false,
  });
  $('.qual_slider_card-wrapper').matchHeight();

  $('.orientation_slider').slick({
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
      }
    },  
  ],
    });

  $('.qual_slider').slick({
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
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
      }
    },  
  ],

    });

  $('.review_slider').slick({
        slidesToShow: 4,
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
      }
    },  
  ],
    });

  $('a[href="#aboutMe"]').click(function (){
    if ($('.burger-menu-wrapper').hasClass('burger-display')){
      $('.burger-menu-wrapper').toggleClass('burger-display')
    };
    $('html, body').animate({
      scrollTop: $('.head').offset().top
    }, 1000);
  });

  $('a[href="#aboutPoject"]').click(function (){
    if ($('.burger-menu-wrapper').hasClass('burger-display')){
      $('.burger-menu-wrapper').toggleClass('burger-display')
    };
    $('html, body').animate({
      scrollTop: $('.orientation').offset().top
    }, 1000);
  });

  $('a[href="#format"]').click(function (){
    if ($('.burger-menu-wrapper').hasClass('burger-display')){
      $('.burger-menu-wrapper').toggleClass('burger-display')
    };
    $('html, body').animate({
      scrollTop: $('.format').offset().top
    }, 1000);
  });

  $('a[href="#review"]').click(function (){
    if ($('.burger-menu-wrapper').hasClass('burger-display')){
      $('.burger-menu-wrapper').toggleClass('burger-display')
    };
    $('html, body').animate({
      scrollTop: $('.review').offset().top
    }, 1000);
  });

  $('#burger-close').click(function() {
      $('.burger-menu-wrapper').toggleClass('burger-display')
  });
  $('.burger-button').click(function() {
      $('.burger-menu-wrapper').toggleClass('burger-display')
  });

});




