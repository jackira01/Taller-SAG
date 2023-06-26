import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { searchProduct } from '../../../redux/productThunk.js/productThunk';

const Search = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const handleChangeInput = (e) => {
    dispatch(searchProduct(productList, e.target.value));
  };

  return (
    <div className='flex mx-20'>
      <input
        type='text'
        placeholder='Que buscas?'
        autoComplete='off'
        className='w-full px-4 py-2 text-gray-700 bg-white border rounded-lg border-gray-300'
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Search;
