import React, { useState } from 'react';
import ProductOverview from './ProductOverview';

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="w-70 h-70 rounded overflow-hidden shadow-lg hover:shadow-xl bg-cardLigth dark:bg-card cursor-pointer transition-all hover:scale-105"
        onClick={handleCardClick}
      >
        <div className="aspect-w-3 aspect-h-2 rounded-md">
          <img
            className="object-cover w-full h-full rounded-2xl p-2"
            src={product.img}
            alt={product.name}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-textLigth dark:text-text mb-2 overflow-hidden overflow-ellipsis whitespace-nowrap">{product.name}</div>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 overflow-hidden">
            {product.description}
          </p>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="modal-container bg-white dark:bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <ProductOverview product={product} onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
