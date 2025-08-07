import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';  // Import Navbar component
import ConnectionScience from '../components/ConnectionScience';
import '../assets/pages css/Home.css';
import z from '../assets/images/z.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Experience from './Experience';
import Education from './Education';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div id="home">
            <Navbar />
            <div className='super-display'>
                <div className='allied-dashboard'>
                    <div className="background-container">
                        <ConnectionScience />
                        <div className="main-header">
                            <div className="selection-port">
                                <img src={z} alt="crypto" className="super-man" />
                            </div>
                            <div className='describe-section'>
                                <h1>Syed Farhan Sajjad</h1>
                                <p className='first-overview'>
                                    Social Media Marketing | SEO Expert |Social Media Content Marketing| Social Media Strategy | Canva Designer | Helping Brands Grow Online with Smart Strategies
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
              
            </div>
        </div>
    );
};

export default Home;
