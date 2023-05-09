import React from "react";
import { products } from "../ProductPage/jsons/productos";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";
import { useParams } from "react-router-dom";
const DetailProduct = ({ id }) => {
  const detailProduct = useParams(id);
  return (
    <div>
      <Card
        name={detailProduct.name}
        img={detailProduct.img}
        price={detailProduct.price}
        category={detailProduct.category}
      />
    </div>
  );
};

export default DetailProduct;
