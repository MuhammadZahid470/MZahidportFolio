import React, { useState } from 'react';
import '../assets/components css/TabbedInterface.css';
import CardComponent from '../components/Card';
import pizzadashboard from '../assets/images/pizzadash.png';
import pizarecipe from '../assets/images/pizzarecipy.png';
import pizzacontact from '../assets/images/pizaacontact.png';
import pizzateam from '../assets/images/pizzateam.png';
import pizzablog from '../assets/images/pizzablog.png';
import pizzanews from '../assets/images/pizzanews.png';
import pizzareg from '../assets/images/pizzareg.png';
import pizzalogin from '../assets/images/pizzalogin.png';
import omerious1 from '../assets/images/omerious1.png';
import omerious2 from '../assets/images/omorous2.png';
import omerious3 from '../assets/images/omerious3.png';
import omerious4 from '../assets/images/omerious4.png';
import omerious5 from '../assets/images/omerious5.png';
import returant1 from '../assets/images/rst1.png';
import returant2 from '../assets/images/rst2.png';
import returant3 from '../assets/images/rst3.png';
import returant4 from '../assets/images/rst4.png';
import returant5 from '../assets/images/rst5.png';
import returant6 from '../assets/images/rst6.png';
import returant7 from '../assets/images/rst7.png';
import returant8 from '../assets/images/rst8.png';
import hr1 from '../assets/images/hr1.png';
import h2 from '../assets/images/h2.png';
import h4 from '../assets/images/h4.png';
import hr5 from '../assets/images/hr5.png';
import hr6 from '../assets/images/hr6.png';


const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 2,
      type: 'B',
      name: 'Omerous loan application',
      img: omerious1,
      description: 'I’m developing a pixel-perfect ReactJS front-end for Omerous loan applications, based on Figma wireframes. Using Redux for state management and Tailwind CSS, it connects to existing backend endpoints, caches data for 30 minutes, and supports URL-based theme switching. It includes Google Analytics, input validation, and responsive design',
      images: [omerious2, omerious3, omerious4, omerious5]
    },
    {
      id: 3,
      type: 'C',
      name: 'HR Management ',
      img: hr1,
      description: 'I developed a responsive HR Management System using Next.js with Tailwind CSS for styling and Redux for state management. The system simplifies employee management by handling attendance, payroll, and leave tracking, offering an intuitive interface and a seamless user experience across all devices.',
      images: [h2, h4, hr5, hr6]
    },
    {
      id: 4,
      type: 'B',
      name: 'PizzHut',
      img: pizzadashboard,
      description: 'I built a responsive pizza order web app in ReactJS, utilizing Redux for state management. Styled with CSS, it offers seamless ordering, cart functionality, and adapts to all devices, ensuring an intuitive user experience for pizza customization and checkout.',
      images: [pizarecipe, pizzacontact, pizzateam, pizzablog, pizzanews, pizzareg, pizzalogin]
    },
    {
      id: 5,
      type: 'C',
      name: 'Omerous loan application',
      img: omerious1,
      description: 'I’m developing a pixel-perfect ReactJS front-end for Omerous loan applications, based on Figma wireframes. Using Redux for state management and Tailwind CSS, it connects to existing backend endpoints, caches data for 30 minutes, and supports URL-based theme switching. It includes Google Analytics, input validation, and responsive design',
      images: [omerious2, omerious3, omerious4, omerious5]
    },
    {
      id: 6,
      type: 'B',
      name: 'resturant',
      img: returant1,
      description: 'I developed a responsive restaurant booking web app using ReactJS and Redux for state management. The app offers table reservations, service selection, and an intuitive interface. Styled with CSS, it delivers a seamless user experience across all devices, making restaurant bookings efficient and user-friendly.',
      images: [returant2, returant3, returant4, returant5, returant6, returant7, returant8]
    },
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