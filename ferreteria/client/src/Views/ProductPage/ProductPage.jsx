import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/productThunk.js/productThunk.js';
import ErrorCard from '../../Components/ErrorCard/ErrorCard.jsx';
import CardsTamplate from './CardsTemplate.jsx';
import Loader from '../../Components/Loader/Loader.jsx';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { search } = useSelector((state) => state.filter);
  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    if (!productList.length) {
      dispatch(fetchProducts());
    }
  });

  return (
    <div className='justify-center w-full'>
      {!productList.length ? (
        <Loader />
      ) : error ? (
        <ErrorCard message={error} />
      ) : search.length ? (
        <CardsTamplate array={search} />
      ) : (
        <CardsTamplate array={productList} />
      )}
    </div>
  );
};

export default ProductPage;
