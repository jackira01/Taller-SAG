import React, { useEffect } from "react";
import Pagination from "../../Components/Paginate/Paginate.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/Card/ProductCard.jsx";
import { fetchProducts } from "../../redux/productThunk.js/productThunk.js";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [currentPage, setcurrentPage] = useState(1);
  const indexLastCard = currentPage * 6;
  const indexfirstCard = indexLastCard - 6;
  const cardsCurrent = productList.slice(indexfirstCard, indexLastCard);

  useEffect(() => {
    if (!productList.length) {
      dispatch(fetchProducts());
    }
  });

  return (
    <div class="justify-center w-full mt-4 mb-6">
      <Pagination
        maxCards={productList}
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
    </div>
  );
};

export default ProductPage;
