var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  // direction: 'horizontal',
  // loop: true,
  speed:1000,
  effect: 'coverflow',
  slidesPerView: 3,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable: true,
    dynamicBullets:'span',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
		delay: 1000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
  fadeEffect: {
    crossFade: true
  },
})