import React from "react";
import { products } from "./jsons/productos.js";
import Pagination from "../../Components/Paginate/Paginate.jsx";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions.js";
import ProductCard from "../../Components/Card/ProductCard.jsx";

const ProductPage = () => {
  const [currentPage, setcurrentPage] = useState(1);
  const indexLastCard = currentPage * 6;
  const indexfirstCard = indexLastCard - 6;
  const cardsCurrent = products.slice(indexfirstCard, indexLastCard);
  const dispatch = useDispatch();
  const Allproducts = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());

    // return () => {
    //   second
    // }
  }, [dispatch]);

  return (
    <div class="justify-center w-full mt-4 mb-6">
      <Pagination
        maxCards={products}
        cardsPerPage={6}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
      />
      <div class=" flex justify-center w-full mt-4 mb-6">
        <div class="grid grid-cols-6 gap-4">
          {cardsCurrent.map((card) => (
            <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2">

              <ProductCard product={card} />
            </div>
          ))}
        </div>
      </div>
      {console.log(Allproducts)}
    </div>
  );
};

export default ProductPage;
