$(function(){
  var swiper = new Swiper('.swiper-container-banner', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay : 30000,
      loop:true,
  });
  var swiper = new Swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 4,
      // centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 40,
      autoplay : 8000,
      loop:true
  });
  // $(window).scroll(function () {
  //   var _top=$("#header").offset().top;
  //   console.log($("#header").height()+"|"+_top);
  //   if (_top<=400&&$("#header").height()!=50) {
  //     $("#header").animate({height:50},300);
  //   }
  //   if (_top>=400&&$("#header").height()==50) {
  //     console.log('222');
  //     $("#header").animate({height:80},300);
  //   }
  // })
});
