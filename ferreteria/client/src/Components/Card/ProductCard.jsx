import React, { useState } from 'react';
import ProductOverview from './ProductOverview';

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-80 h-80 rounded overflow-hidden shadow-lg hover:shadow-xl dark:bg-gray-800">
      <div className="aspect-w-3 aspect-h-2">
        <img
          className="object-cover w-full h-full"
          src={product.img}
          alt="Product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{product.name}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Ver más
        </button>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="modal-container bg-white dark:bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <ProductOverview product={product} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
