$(document).ready(function(){
  
  $('.screenshots__slider').slick({
    infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	dots: false,
  	responsive: [
    {
    	breakpoint: 841,
      	settings: {
        	slidesToShow: 2
      }
    },
    {
    	breakpoint: 741,
      	settings: {
        	slidesToShow: 1
      }
    }	
  ]
  });

  $('.reviews__slider').slick({
    infinite: true,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	dots: true,
  	arrows: false,
  	responsive: [
    {
    	breakpoint: 841,
      	settings: {
        	slidesToShow: 1,
        	slidesToScroll: 1
      }
    }	
  ]
  });

  $('.menu__burger').on('click', function() {
	$('.menu__burger').toggleClass('menu__burger--active');
	$('.menu__list').toggleClass('menu__list--active');
});


});
