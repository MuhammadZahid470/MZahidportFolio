// Modal.js
import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/components css/Modal.css';


const Modal = ({ show, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  if (!show) return null;

  const images = project.images || [project.img];

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>×</span>
        
        <div className="image-container">
          <button className="arrow-btn prev-btn" onClick={handlePrev}>
            <i className="bi bi-chevron-compact-left"></i>
          </button>
          
          <img 
            src={images[currentImageIndex]} 
            alt={`${project.name} - ${currentImageIndex + 1}`} 
          />
          
          <button className="arrow-btn next-btn" onClick={handleNext}>
            <i className="bi bi-chevron-compact-right"></i>
          </button>
        </div>

        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="image-counter">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default Modal;