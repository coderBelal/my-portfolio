import React, { useState } from "react";
import Modal from "react-modal";

const cardImages = [
  { id: 1, src: "https://i.postimg.cc/nrmFR3Tf/ude-CYv6-Fgd-H.jpg", title: "Master Git & Github Beginner to Expert" },
  { id: 2, src: "https://i.postimg.cc/HLPTTqhC/lea-Cpn-CXOXm-1.png", title: "JavaScript for Beginner" },
];

Modal.setAppElement("#root");

const Certificate = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="flex flex-col items-center p-5 mt-48">
      <div className="flex justify-center flex-wrap gap-10 mb-8">
        {cardImages.map((image) => (
          <div
            className="w-[300px] border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 text-center bg-white"
            key={image.id}
          >
            <img src={image.src} alt={image.title} className="w-full h-44 object-cover rounded-t-lg" />
            <h3 className="my-4 text-lg font-semibold text-gray-800">{image.title}</h3>
            <button
              onClick={() => openModal(image.src)}
              className="bg-[#10E956] text-white border-none py-2 px-4 mb-4 cursor-pointer rounded transition-colors duration-300 hover:bg-[#0cc84d]"
            >
              View Certificate
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-lg outline-none max-w-[95vw] max-h-[95vh] mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <button
          onClick={closeModal}
          className="self-end bg-red-600 text-white border-none py-1 px-3 cursor-pointer mb-3 rounded-full hover:bg-red-500 transition-colors duration-300"
        >
          Close
        </button>
        {currentImage && (
          <img
            src={currentImage}
            alt="Popup"
            className="w-full max-w-[800px] max-h-[80vh] object-contain rounded-lg shadow-md"
          />
        )}
      </Modal>
    </div>
  );
};

export default Certificate;
