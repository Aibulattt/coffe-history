import Swiper from 'swiper'
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import Glide from '@glidejs/glide'
import 'swiper/swiper-bundle.css'

export const swiperPrice = () => {
    
    SwiperCore.use([Navigation, Pagination]);

    const swiper = new Swiper('.adv-swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        centerSlides: true
      
      });

      const swiperTeam = new Swiper('.team-swiper', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        centerSlides: true
      
      });

    new Glide('.price-slider',{
        type: 'slider',
        startAt: 1,
        perView: 3,
        focusAt: 'center',
        keyboard: true,

    }).mount()

    if (document.documentElement.clientWidth > 767) {
        new Glide('.format-slider',{
            type: 'carousel',
            startAt: 1,
            perView: 3,
            focusAt: 'center',
            keyboard: true,
        }).mount()
    } else {
        new Glide('.format-slider',{
            type: 'carousel',
            startAt: 0,
            focusAt: 'center',
            keyboard: true,
        }).mount()
    }

}
