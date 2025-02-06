// Button.js
import React from 'react';
import '../assets/components css/Button.css'; // Make sure you have a CSS file to define styles

const Button = ({ children, styleClass, onClick }) => {
  return (
    <button className={`button ${styleClass}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
