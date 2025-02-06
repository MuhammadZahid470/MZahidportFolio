// CardComponent.jsx
import React from 'react';

const CardComponent = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.name} className="project-image" />
      <h4>{project.name}</h4>
      <p>Type: {project.type}</p>
    </div>
  );
};

export default CardComponent;
