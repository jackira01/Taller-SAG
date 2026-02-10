import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css';

import imagen1 from './imagen 1.png';
import imagen2 from './imagen 2.png';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';

const Carousel = () => {
  return (
    <>
      <div className='px-4 py-4 md:px-8 md:py-6 lg:px-10 max-w-full overflow-hidden'>
        <Swiper
          spaceBetween={10}
          effect={'fade'}
          centeredSlides={true}
          autoplay={{
            delay: 4600,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className='mySwiper border-4 border-cardLigth dark:border-card'
        >
          <SwiperSlide>
            <img alt='imagen 1' src={imagen1} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt='imagen 2' src={imagen2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
