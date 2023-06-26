import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-lg font-bold mb-4">Confirmar acción</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          ¿Estás seguro de que quieres realizar esta acción?
        </p>
        <div className="flex justify-end">
          <button
            className="mr-2 px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-red-500 hover:text-red-700 focus:outline-none"
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
