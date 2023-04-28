function SectionSlider__init() {
    const mySwiper = new Swiper('.section-slider .swiper-container', {
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
  
  SectionSlider__init();