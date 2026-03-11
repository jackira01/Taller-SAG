import React from 'react';
import { Link } from 'react-router-dom';

const ProductOverview = ({ product, onClose }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4'>
      <div className='bg-cardLigth dark:bg-card rounded-lg p-6 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto shadow-xl'>
        <button
          className='bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white absolute top-4 right-4 rounded-full w-8 h-8 flex items-center justify-center hover:opacity-80 transition-opacity z-10'
          onClick={onClose}
        >
          X
        </button>

        <h2 className='text-2xl text-textLigth dark:text-text font-bold mb-6 text-center'>
          Detalle de producto
        </h2>

        <div className='flex flex-col md:grid md:grid-cols-2 gap-8'>
          {/* Left Column: Image */}
          <div className='flex items-center justify-center'>
            <img
              src={product.img}
              alt={product.name}
              className='w-full h-auto max-h-[400px] object-contain rounded-lg'
            />
          </div>

          {/* Right Column: Details */}
          <div className='flex flex-col'>
            {/* Header Row: Name, Price, Category */}
            <div className='flex flex-wrap items-center gap-4 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4'>
              <h3 className='text-xl text-textLigth dark:text-text font-bold'>{product.name}</h3>
              <p className='text-xl text-textLigth dark:text-text font-bold'>
                Precio: {product.price}
              </p>
              <span className='text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full'>
                {product.category}
              </span>
            </div>

            {/* Description */}
            <div className='mb-6'>
              <h4 className='text-md font-bold text-textLigth dark:text-text mb-2'>
                Descripción:
              </h4>
              <p className='text-md text-textLigth dark:text-text leading-relaxed'>
                {product.description}
              </p>
            </div>

            {/* Action Button */}
            <div className='mt-auto flex justify-end'>
              <Link to='/servicios'>
                <button className='bg-blue-500 dark:bg-secundary hover:bg-blue-600 dark:hover:bg-accentColor text-white font-semibold py-2 px-6 rounded transition-colors'>
                  Consultar dudas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
