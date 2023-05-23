import React from "react";
import Carousel from "./Carousel/Carousel";
import Brands from "../../Components/Brands/Brands";

import "./Home.css";
import ProductsCarousel from "./ProductsCarousel/ProductsCarousel";
import FilosofySeccion from "./FilosofySeccion/FilosofySeccion";

const Home = () => {
  return (
    <>
      <Carousel />

      <Brands />

      <FilosofySeccion />

      <ProductsCarousel />

    </>
  );
};

export default Home;
