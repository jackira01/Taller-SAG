import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './ProductsCarousel.css';

// import required modules
import { Pagination } from 'swiper';

const ProductsCarousel = () => {
  return (
    <div className='py-20 sm:py-20'>
      <h2 className='text-center text-2xl dark:text-text font-semibold leading-8'>
        Explora Nuestros Productos!
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper demo'
      >
        <SwiperSlide className='demo border-4 border-cardLigth dark:border-card'>
          <img
            alt='ejemplo'
            src='https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0'
          />
        </SwiperSlide>
        <SwiperSlide className='demo border-4 border-cardLigth dark:border-card'>
          <img
            alt='ejemplo'
            src='https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0'
          />
        </SwiperSlide>
        <SwiperSlide className='demo border-4 border-cardLigth dark:border-card'>
          <img
            alt='ejemplo'
            src='https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0'
          />
        </SwiperSlide>
        <SwiperSlide className='demo border-4 border-cardLigth'>
          <img
            alt='ejemplo'
            src='https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0'
          />
        </SwiperSlide>
        <SwiperSlide className='demo border-8 border-cardLigth'>
          <img
            alt='ejemplo'
            src='https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
