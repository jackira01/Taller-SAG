import React from 'react';
import Pagination from '../../Components/Paginate/Paginate.jsx';
import { useState } from 'react';
import ProductCard from '../../Components/Card/ProductCard.jsx';

const CardsTamplate = ({ array }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const indexLastCard = currentPage * 8;
  const indexfirstCard = indexLastCard - 8;
  const cardsCurrent = array.slice(indexfirstCard, indexLastCard);

  return (
    <div className='justify-center w-full pt-4'>
      <div className=' flex justify-center w-full mt-6 mb-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4'>
          {cardsCurrent.map((card) => (
            <ProductCard key={card._id} product={card} />
          ))}
        </div>
      </div>
      <Pagination
        maxCards={array}
        cardsPerPage={8}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
      />
    </div>
  );
};

export default CardsTamplate;
