import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/productThunk.js/productThunk";

const ModalEdit = ({ isOpen, onClose, product }) => {
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    setImg(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Aquí puedes realizar la lógica para editar el producto
    // utilizando los datos ingresados en el formulario
    dispatch(
      editProduct(product._id, {
        name: name ? name : product.name,
        img: img ? img : product.img,
        price: price ? price : product.price,
        brand: brand ? brand : product.brand,
        category: category ? category : product.category,
        description: description ? description : product.description,
      })
    );
    setIsSubmitting(false);
  };

  const handleEditClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleConfirmationConfirm = () => {
    setShowConfirmation(false);
    if (!isSubmitting) {
      handleSubmit();
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg dark:text-white font-bold">Producto actual</h2>
            <button
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              {/* ProductCard */}
              <div className="bg-white dark:bg-gray-700 rounded-md shadow-md p-4">
                {/* Contenido del ProductCard */}
                <img src={product.img} alt={name} className="w-full mb-2 rounded" />
                <h3 className="text-md font-semibold mb-1 dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Precio: ${product.price}</p>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">Marca: {product.brand}</p>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">Categoría: {product.category}</p>
                <p className="text-md text-gray-500 dark:text-gray-400 mb-2">
                  Descripción: {product.description}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="img" className="block mb-1 dark:text-white font-medium">
                      Imagen URL:
                    </label>
                    <input
                      type="text"
                      id="img"
                      className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 dark:focus:ring-blue-600"
                      value={img}
                      onChange={handleImageChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block mb-1 dark:text-white font-medium">
                      Nombre:
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 dark:focus:ring-blue-600"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="block mb-1 dark:text-white font-medium">
                      Precio:
                    </label>
                    <input
                      type="number"
                      id="price"
                      className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 dark:focus:ring-blue-600"
                      value={price}
                      onChange={handlePriceChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="brand" className="block mb-1 dark:text-white font-medium">
                      Marca:
                    </label>
                    <input
                      type="text"
                      id="brand"
                      className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 dark:focus:ring-blue-600"
                      value={brand}
                      onChange={handleBrandChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block mb-1 dark:text-white font-medium">
                      Categoría:
                    </label>
                    <input
                      type="text"
                      id="category"
                      className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 dark:focus:ring-blue-600"
                      value={category}
                      onChange={handleCategoryChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block mb-1 dark:text-white font-medium">
                      Descripción:
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300 dark:focus:ring-blue-600"
                      value={description}
                      onChange={handleDescriptionChange}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-full"
                  onClick={handleEditClick}
                >
                  Editar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={handleConfirmationClose}
        onConfirm={handleConfirmationConfirm}
      />
    </>
  );
};

export default ModalEdit;
