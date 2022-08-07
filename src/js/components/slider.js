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