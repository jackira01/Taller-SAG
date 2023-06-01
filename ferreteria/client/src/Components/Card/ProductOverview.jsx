import React from 'react';
import { Link } from 'react-router-dom';

const ProductOverview = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-80 relative">
        <button
          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          X
        </button>
        <div className="mb-4">
          <img src={product.img} alt={product.name} className="w-full h-auto" />
        </div>
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-2">Precio: {product.price}</p>
        {/* <p className="text-gray-600 dark:text-gray-400 mb-2">Categoría: {product.category}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-2">Modelo: {product.model}</p> */}
        <Link to='/servicios'><button
          className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mt-4"
        >
          Consultar dudas
        </button></Link>

      </div>
    </div>
  );
};

export default ProductOverview;
