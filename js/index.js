function initCarousel() {
  if ($(window).width() < 810) {
    if (!$('.country-carousel').hasClass('slick-initialized')) {
      $('.country-carousel').slick({
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      $('.country-carousel').on('setPosition', equalizeSlideHeights);
    }
  } else {
    if ($('.country-carousel').hasClass('slick-initialized')) {
      $('.country-carousel').slick('unslick');
    }
  }
}

function equalizeSlideHeights() {
  let maxHeight = 0;
  const $slides = $('.country-carousel .slick-slide');

  $slides.css('height', 'auto');

  $slides.each(function () {
    const h = $(this).outerHeight();
    if (h > maxHeight) maxHeight = h;
  });

  $slides.css('height', maxHeight + 'px');
}

$(document).ready(initCarousel);
$(window).on('resize', function () {
  initCarousel();
  equalizeSlideHeights();
});
