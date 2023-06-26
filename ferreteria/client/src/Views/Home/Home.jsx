import React from "react";
import Carousel from "./Carousel/Carousel";
import Brands from "../../Components/Brands/Brands";

import "./Home.css";
import ProductsCarousel from "./ProductsCarousel/ProductsCarousel";
import GeoLocation from "./geoLocation/GeoLocation";

const Home = () => {

  return (
    <>
      <Carousel />

      <Brands />

      <GeoLocation/>

    </>
  );
};

export default Home;
