import React from 'react';
import Pagination from '../../Components/Paginate/Paginate.jsx';
import { useState } from 'react';
import ProductCard from '../../Components/Card/ProductCard.jsx';

const CardsTamplate = ({ array }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const indexLastCard = currentPage * 6;
  const indexfirstCard = indexLastCard - 6;
  const cardsCurrent = array.slice(indexfirstCard, indexLastCard);

  return (
    <div className='justify-center w-full pt-4'>
      <Pagination
        maxCards={array}
        cardsPerPage={6}
        currentPage={currentPage}
        setcurrentPage={setcurrentPage}
      />
      <div className=' flex justify-center w-full mt-6 mb-6'>
        <div className='grid grid-cols-6 gap-4'>
          {cardsCurrent.map((card) => (
            <div
              key={card._id}
              className='col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2'
            >
              <ProductCard product={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsTamplate;
