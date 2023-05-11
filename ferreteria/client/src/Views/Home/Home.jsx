import React from "react";
import Carousel from "./Carousel/Carousel";
import Brands from "../../Components/Brands/Brands";

import "./Home.css";
import ProductsCarousel from "./ProductsCarousel/ProductsCarousel";

const Home = () => {
  return (
    <>
      <Carousel />

      <Brands />

      <ProductsCarousel />
    </>
  );
};

export default Home;
