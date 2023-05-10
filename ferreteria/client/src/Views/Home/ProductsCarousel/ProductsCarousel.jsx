import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ProductsCarousel.css";

// import required modules
import { Pagination } from "swiper";

const ProductsCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt="ejemplo"
            src="https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="ejemplo"
            src="https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="ejemplo"
            src="https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="ejemplo"
            src="https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="ejemplo"
            src="https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductsCarousel;
