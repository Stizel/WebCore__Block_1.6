import Swiper, { Pagination } from 'swiper';

Swiper.use(Pagination)

let swiper;
let init = false;

let swiperMode = () => {
   let mobile = window.matchMedia('(max-width: 767px)');

    if(mobile.matches && !init) {
             init = true;
             swiper = new Swiper('.swiper', {
                slidesPerView: "auto",
                spaceBetween: 16,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true,
                  },
             });  
    }
  if (!mobile.matches && init) {
    if (swiper.destroy && typeof swiper.destroy === 'function') {
      swiper.destroy(true, true)
      init = false;
    }    
  }
}

let arr = ["load", "resize"];
arr.forEach(el => window.addEventListener(el,()=>swiperMode()));  

swiperMode()

