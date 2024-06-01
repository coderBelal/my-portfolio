import React, { useState } from "react";
import Modal from "react-modal";
import "./Certificate.css";
import udemy from "../../assets/ude.jpg";
import learn from "../../assets/lea.png";
const cardImages = [
  { id: 1, src: udemy, title: "Master Git & Github Beginner to Expert " },
  { id: 2, src: learn, title: "JavaScript for Beginner" },
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
    <div className="app">
      <div className="card-container">
        {cardImages.map((image) => (
          <div className="card-one" key={image.id}>
            <img src={image.src} alt={image.title} />
            <h3>{image.title}</h3>
            <button onClick={() => openModal(image.src)}>
              View Certificate
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <button onClick={closeModal} className="close-button">
          Close
        </button>
        {currentImage && (
          <img src={currentImage} alt="Popup" className="popup-image" />
        )}
      </Modal>
    </div>
  );
};

export default Certificate;
