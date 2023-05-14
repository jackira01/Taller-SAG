import React, { useState } from "react";
import { Button, Modal } from "antd";

function ProductCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">
      <img
        className="w-full"
        src="https://via.placeholder.com/300"
        alt="{props.name}"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">demo</div>
        <p className="text-gray-700 text-base">12</p>
      </div>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}

export default ProductCard;
