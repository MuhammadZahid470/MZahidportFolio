import React, { useState } from 'react';
import Modal from './Modal';

const CardComponent = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="project-card">
        <img src={project.img} alt={project.name} className="project-image" />
        <div className='card_description'>
          <h4>{project.name}</h4>
          <p className='types'>Type: {project.type}</p>
          <button onClick={handleShowModal} type="button" className="show-btn">
            Show more
          </button>

        </div>
      </div>

      {showModal && <Modal show={showModal} onClose={handleCloseModal} project={project} />}
    </>
  );
};

export default CardComponent;