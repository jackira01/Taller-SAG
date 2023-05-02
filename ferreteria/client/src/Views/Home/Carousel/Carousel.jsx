import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="ejemplo" src="https://th.bing.com/th/id/R.2ed64a9cadc0301c13ff89dee64c3872?rik=fJcWqhs8DWbX1g&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2016%2f02%2fFondos-wallpapers-4k.jpg&ehk=Cn%2bGjb7DNAZ3CbZR5hPdsAxUED6i%2bJAPKHBgKmCrjZ8%3d&risl=&pid=ImgRaw&r=0" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="ejemplo" src="https://th.bing.com/th/id/R.a7089cebf1b1ef32300d9ef81b72f4c0?rik=BAdLIE2cwMeOcQ&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2015%2f12%2fFondos-de-pantalla-4K.jpg&ehk=RaD5kIcNOaMIFL%2bMTtzDnVxh5PraACmhyduj87aU1%2fQ%3d&risl=&pid=ImgRaw&r=0" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
