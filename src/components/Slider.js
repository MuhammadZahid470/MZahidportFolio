import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../assets/components css/Slider.css';
import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.jpg';
import logo3 from '../assets/images/logo3.jpg';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(''); // 'left' or 'right'

    const slides = [
        {
            id: 1,
            description: (
                <div className="slide-content">
                    <span>
                        <img
                            src={logo}
                            alt="Placeholder"
                            className="slide-image"
                        />
                    </span>
                    <div>
                        <h3>GC Lahore</h3>
                    </div>
                    <div>
                        <p>Bacholar of Science in Computer Science</p>
                        <p>3.12 cgpa</p>
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            description: (
                <div className="slide-content">
                    <span>
                        <img
                            src={logo2}
                            alt="Placeholder"
                            className="slide-image"
                        />
                    </span>
                    <div>
                        <h3>Govt Graduate College Layyah</h3>
                    </div>
                    <div>
                        <p>Fsc. Pre-Engineering</p>
                        <p>1st Division</p>
                    </div>
                </div>
            ),
        },
        {
            id: 3, description: (
                <div className="slide-content">
                    <span>
                        <img
                            src={logo3}
                            alt="Placeholder"
                            className="slide-image"
                        />
                    </span>
                    <div>
                        <h3 className="red-text">Friends Publick High School</h3>
                    </div>
                    <div>
                        <p>Matriculation</p>
                        <p>1st Division</p>
                    </div>
                </div>
            ),
        },
    ];

    const changeSlide = (direction) => {
        setAnimationDirection(direction);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                if (direction === 'right') {
                    return (prevIndex + 1) % slides.length;
                } else {
                    return (prevIndex - 1 + slides.length) % slides.length;
                }
            });
            setAnimationDirection(''); // Reset animation class
        }, 500); // Match this duration with the animation timing
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <span className="slider-btn left" onClick={() => changeSlide('left')}>
                    <FaChevronLeft /> {/* Left icon */}
                </span>
                <div className={`slide ${animationDirection}`}>
                    {slides[currentIndex].description}
                </div>
                <span className="slider-btn right" onClick={() => changeSlide('right')}>
                    <FaChevronRight /> {/* Right icon */}
                </span>
            </div>
        </div>
    );
};

export default Slider;
