$(function() {

	wow = new WOW({
		boxClass:     'wow',      // default
		animateClass: 'animated', // default
		offset:       200,          // default
		mobile:       false,       
		live:         true        // default
	});
	
	wow.init();
	const burger = $('.header__burger');
	const menu = $('.header__menu');
	
	burger.on('click', function(e) {
	    e.preventDefault();
	    burger.toggleClass('header__burger--close');
	    menu.toggleClass('open');
	});
	
	$(document).keyup(function(e) {
	    if (e.key === "Escape" || e.keyCode === 27) {
	        menu.removeClass('open');
	        burger.removeClass('header__burger--close');
	    }
	});
	
	$('body').on('click', '.header__menu a[href*="#"]', function(e) {
		var fixed_offset = 70;
	
		$('html,body').stop().animate({
				scrollTop: $(this.hash).offset().top - fixed_offset
		}, 300);
		e.preventDefault();
		menu.removeClass('open');
		burger.removeClass('header__burger--close');
	});
	
	$('body').on('click', '.footer__menu a[href*="#"]', function(e) {
		var fixed_offset = 70;
	
		$('html,body').stop().animate({
				scrollTop: $(this.hash).offset().top - fixed_offset
		}, 300);
		e.preventDefault();
	});
	var swiper = new Swiper(".swiper", {
		// loop: "true",
		// effect: "coverflow",
		// grabCursor: true,
		// centeredSlides: true,
		// slidesPerView: "auto",
		// coverflowEffect: {
		// 	rotate: 50,
		// 	stretch: 0,
		// 	depth: 100,
		// 	modifier: 1,
		// 	slideShadows: true,
		// },
		// pagination: {
		// 	el: ".swiper-pagination",
		// },
		effect: "cards",
	  grabCursor: true,
		navigation: {
			nextEl: ".case-button-next",
			prevEl: ".case-button-prev",
		},
		pagination: {
			el: ".case-pagination",
			clickable: true,
		},
	});

});