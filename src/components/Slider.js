import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../assets/components css/Slider.css';
import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo2.png';

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
                        <h3>PMAS-Arid Agriculture University Rawalpindi</h3>
                    </div>
                    <div>
                        <p>Bachelor of Agriculture Food Tech</p>
                        <p>3.27 CGPA</p>
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
                        <h3>Govt. Post Graduate College Bhakkar</h3>
                    </div>
                    <div>
                        <p>F.Sc. Pre-Medical</p>
                        <p>1st Division</p>
                    </div>
                </div>
            ),
        },
        // Third slide removed ✅
    ];

    // ✅ Reset index if out of range (e.g., after slide removal)
    useEffect(() => {
        if (currentIndex >= slides.length) {
            setCurrentIndex(0);
        }
    }, [currentIndex, slides.length]);

    const changeSlide = (direction) => {
        setAnimationDirection(direction);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                return direction === 'right'
                    ? (prevIndex + 1) % slides.length
                    : (prevIndex - 1 + slides.length) % slides.length;
            });
            setAnimationDirection('');
        }, 500); // Match animation duration
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <span className="slider-btn left" onClick={() => changeSlide('left')}>
                    <FaChevronLeft />
                </span>
                <div className={`slide ${animationDirection}`}>
                    {slides[currentIndex] && slides[currentIndex].description}
                </div>
                <span className="slider-btn right" onClick={() => changeSlide('right')}>
                    <FaChevronRight />
                </span>
            </div>
        </div>
    );
};

export default Slider;
