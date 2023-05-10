import React from "react";
import Card from "../../Components/Card/Card.jsx";
import { products } from "./jsons/productos.js";
import Pagination from "../../Components/Paginate/Paginate.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductPage = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const [cardsPerPage, setcardsPerPage] = useState(6);
  const indexLastCard = currentPage * cardsPerPage;
  const indexfirstCard = indexLastCard - cardsPerPage;
  const cardsCurrent = products.slice(indexfirstCard, indexLastCard);

  return (
    <div class="justify-center w-full ">
      {/* <div className="text-center"> */}
      <Pagination
        maxCards={products}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
      />
      {/* </div> */}
      <div class=" flex justify-center w-full ">
        <div class="grid grid-cols-6 gap-4">
          {cardsCurrent.map((card) => (
            <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2">
              <Link to={`/products/${card.id}`}>
                <Card
                  name={card.name}
                  img={card.img}
                  price={card.price}
                  category={card.category}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        maxCards={products}
        cardsPerPage={cardsPerPage}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
};

export default ProductPage;
