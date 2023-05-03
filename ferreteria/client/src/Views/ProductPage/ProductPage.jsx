import React from "react";
import Card from "../../Components/Card/Card.jsx";
import { products } from "./jsons/productos.js";
const ProductPage = () => {
  return (
    <div class="flex justify-center">
      <div class="grid grid-cols-6 gap-4">
        {products.map((card) => (
          <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2">
            <Card
              name={card.name}
              img={card.img}
              price={card.price}
              category={card.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
