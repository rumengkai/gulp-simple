$(function(){
  $("#tochannels").click(function () {
    var _top=$("#channels").offset().top;
    $("body,html").animate({scrollTop:_top-80},500);
  });
  $("#index").click(function () {
    var _top=$("#channels").offset().top;
    $("body,html").animate({scrollTop:0},500);
  });
  $(window).scroll(function () {
    var _top=$("#channels").offset().top;
    var _h=$('#channels').height();
    var _scrollTop=$(window).scrollTop();
    if (_scrollTop>=_top-80&&_scrollTop<=_top+_h-80) {
      $("#tochannels").parent().parent().find("a").removeClass("active");
      $("#tochannels").addClass("active");
    }else{
      $("#index").parent().parent().find("a").removeClass("active");
      $("#index").addClass("active");
    }
  })
  var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 4,
      // centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 37,
      autoplay : 3000,
      loop:true
  });
  var swiper = new Swiper('.swiper-container2', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      slidesPerView: 5,
      // centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 37,
      autoplay : 4000,
      loop:true
  });
});
