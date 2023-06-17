import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import ModalEdit from "./ProductEdit";
import { useDispatch } from "react-redux";
import ConfirmationModal from "./ConfirmationModal";
import { deleteProduct } from "../../redux/productThunk.js/productThunk";

const DataTableCard = ({ product }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleConfirmationConfirm = () => {
    setShowConfirmation(false);
    if (!isSubmitting) {
      handleConfirmDelete();
    }
  };

  const handleConfirmDelete = () => {
    setIsSubmitting(true);
    dispatch(deleteProduct(product._id));
    setIsSubmitting(false);
  };

  return (
    <>
      <tr key={product._id}>
        <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Avatar src={product.img} alt={product.name} size="sm" />
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {product.name || ""}
              </Typography>
            </div>
          </div>
        </td>

        <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {product.price || ""}
              </Typography>
            </div>
          </div>
        </td>

        <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {product.description || ""}
              </Typography>
            </div>
          </div>
        </td>

        <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {product.brand || ""}
              </Typography>
            </div>
          </div>
        </td>

        <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {product.category || ""}
              </Typography>
            </div>
          </div>
        </td>

        <td className="p-4 border-b border-blue-gray-50 dark:border-gray-700">
          <Tooltip content="Edit Product">
            <IconButton
              onClick={handleButtonClick}
              variant="text"
              color="blue-gray"
            >
              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>

          <Tooltip content="Delete Product">
            <IconButton
              onClick={handleDeleteClick}
              variant="text"
              color="blue-gray"
            >
              <TrashIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <ConfirmationModal
            isOpen={showConfirmation}
            onClose={handleConfirmationClose}
            onConfirm={handleConfirmationConfirm}
          />

          {modalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="modal-overlay fixed inset-0 bg-black opacity-50"
                onClick={closeModal}
              ></div>
              <div className="modal-container bg-white dark:bg-gray-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <ModalEdit
                  product={product}
                  isOpen={modalOpen}
                  onClose={closeModal}
                />
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

export default DataTableCard;
