function initCarousel() {
  if ($(window).width() < 768) {
    if (!$('.country-carousel').hasClass('slick-initialized')) {
      $('.country-carousel').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      });
    }
  } else {
    if ($('.country-carousel').hasClass('slick-initialized')) {
      $('.country-carousel').slick('unslick');
    }
  }
}

// run on load + resize
$(document).ready(initCarousel);
$(window).on('resize', initCarousel);
