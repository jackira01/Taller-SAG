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
  const [isLoading, setIsLoading] = useState(true);

  const isMaintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === 'true';

  useEffect(() => {
    const loadProducts = async () => {
      if (!productList.length) {
        setIsLoading(true);
        await dispatch(fetchProducts());
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, [dispatch, productList.length]);

  // Maintenance mode view
  if (isMaintenanceMode) {
    return (
      <div className='flex justify-center items-center w-full min-h-[400px]'>
        <div className='text-center p-8 bg-yellow-50 border-2 border-yellow-300 rounded-lg shadow-md max-w-md'>
          <svg 
            className='w-16 h-16 mx-auto mb-4 text-yellow-600' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth={2} 
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' 
            />
          </svg>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Estamos en mantenimiento
          </h2>
          <p className='text-gray-600'>
            Estaremos de vuelta pronto
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='justify-center w-full'>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorCard message={error} />
      ) : !productList.length ? (
        <div className='flex justify-center items-center w-full min-h-[400px]'>
          <div className='text-center p-8 bg-gray-50 border-2 border-gray-300 rounded-lg shadow-md max-w-md'>
            <svg 
              className='w-16 h-16 mx-auto mb-4 text-gray-400' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4' 
              />
            </svg>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              No hay productos disponibles
            </h2>
            <p className='text-gray-600'>
              Actualmente no hay productos para mostrar
            </p>
          </div>
        </div>
      ) : search.length ? (
        <CardsTamplate array={search} />
      ) : (
        <CardsTamplate array={productList} />
      )}
    </div>
  );
};

export default ProductPage;
