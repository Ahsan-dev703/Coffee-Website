const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true, // shows a grab-hand cursor on desktop too
  // Responsiveness
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
