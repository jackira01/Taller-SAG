import React from 'react';
import { Link } from 'react-router-dom';
const CardBrand = ({ src }) => {
  return (
    <Link to='/productos'>
      <img
        className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 '
        src={src}
        alt='Abba'
        width={158}
        height={48}
      />
    </Link>
  );
};

export default CardBrand;
