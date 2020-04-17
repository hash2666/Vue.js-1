var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',

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
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true
  },
})