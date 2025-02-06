import React, { useState } from 'react';
import '../assets/components css/TabbedInterface.css';
import CardComponent from '../components/Card'; 
import project1 from '../assets/images/project1.jpg';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('all'); // State to track active tab

  const projects = [
    { id: 1, type: 'A', name: 'Project 1', img: project1 },
    { id: 2, type: 'B', name: 'B-type Project 2', img: project1 },
    { id: 3, type: 'C', name: 'C-type Project 3', img: project1 },
    { id: 4, type: 'B', name: 'B-type Project 4', img: project1 },
    { id: 5, type: 'C', name: 'C-type Project 5', img: project1 },
  ];

  const filteredProjects = {
    all: projects,
    'B': projects.filter(project => project.type === 'B'),
    'C': projects.filter(project => project.type === 'C')
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === 'all' ? 'active' : ''}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={activeTab === 'B' ? 'active' : ''}
          onClick={() => setActiveTab('B')}
        >
          React Js
        </button>
        <button
          className={activeTab === 'C' ? 'active' : ''}
          onClick={() => setActiveTab('C')}
        >
          Next Js
        </button>
      </div>
      <div className="tab-content">
        {filteredProjects[activeTab].map(project => (
          <CardComponent key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default TabbedInterface;
