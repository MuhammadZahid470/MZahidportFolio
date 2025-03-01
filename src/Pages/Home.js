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
import Button from '../components/Button';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const handleDownloadCV = () => {
        const fileUrl = '/files/your-cv-file.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'My_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                                <h1>Muhammad Zahid</h1>
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
