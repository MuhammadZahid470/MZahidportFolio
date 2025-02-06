import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';  // Import Navbar component
import ConnectionScience from '../components/ConnectionScience';
import '../assets/pages css/Home.css';
import z from '../assets/images/z.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Education from './Education';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);  // Ensure the page starts at the top when loaded
    }, []);

    return (
        <div id="home"> {/* Set the ID to home for smooth scrolling */}
            <Navbar />  {/* Render Navbar here */}
            <div className='super-display'>
                <div className="background-container">
                    <ConnectionScience />
                    <div className="centered-content">
                        <div className="main-header">
                            <div className="selection-port">
                                <img src={z} alt="crypto" className="super-man" />
                            </div>
                            <h1>Muhammad Zahid</h1>
                            <div className='describe-section'>
                                <p className='first-overview'>
                                    This is my official portfolio website to showcase all my work related to{' '}
                                    <span className="black-text">React.js</span> and{' '}
                                    <span className="black-text">Next.js</span>.
                                </p>
                            </div>                     
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <section id="about">
                    <About />
                </section>
                <section id="exper">
                    <Experience />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="portfolio">
                    <Portfolio />
                </section> 
            </div>
        </div>
    );
};

export default Home;
