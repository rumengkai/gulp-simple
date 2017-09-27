$(function(){
  var swiper = new Swiper('.swiper-container-banner', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay : 3000,
      loop:true,
  });
  var swiper = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 4,
      // centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 40,
      autoplay : 5000,
      loop:true
  });
});
