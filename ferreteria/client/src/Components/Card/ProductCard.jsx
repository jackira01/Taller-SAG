import React, { useState } from 'react';

const ProductCard = ({ image, title, extraInfo }) => {
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
          src={image}
          alt="Product"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
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
            <div className="modal-content py-4 text-left px-6">
              <div className="flex justify-between items-center pb-3">
                <p className="text-2xl font-bold">{title}</p>
                <div className="modal-close cursor-pointer z-50" onClick={closeModal}>
                  <svg className="fill-current text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <path
                      d="M18 1.5l-1.5-1.5-7.5 7.5-7.5-7.5-1.5 1.5 7.5 7.5-7.5 7.5 1.5 1.5 7.5-7.5 7.5 7.5 1.5-1.5-7.5-7.5z"
                    ></path>
                  </svg>
                </div>
              </div>
              <p>{extraInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
