import React from 'react';
import Button from '../components/Button';
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import z from '../assets/images/z.jpeg';



const About = () => {
    const handleDownloadCV = () => {
        // Specify the file path (ensure the file is in the public folder or accessible)
        const fileUrl = '/files/your-cv-file.pdf'; // Replace with the actual path to your CV
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'My_CV.pdf'; // Replace with the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div>
            <div className='super-about'>
                <div className="super-cv">
                    <a href="/Files/CV.pdf" download="My_CV.pdf">
                        <Button styleClass="black">Download CV</Button>
                    </a>
                </div>
                <div className="container">
                    <div className="row about-sector">
                        <div className="col-md-6 text-center ">
                            <img src={z} alt='crypto' className='super-admin'  />
                        </div>
                        <div className="col-md-6 ">
                            <div className='main-section'>
                                <p className="super-text">Who am i?</p>
                                <p className="section-bloger">I am <span className="super-text">Muhammad Zahid</span>, a React.js and Next.js Developer</p>
                                <p className='seeking-section'>Seeking a challenging position where I can develop my knowledge skills further and to be an effective team member. I am keenly interested in working in a career-oriented organization to acquire experience and professional skills and become a radical part of a challenging progressive organization.</p>
                                <p className="skill-text">Skills:</p>
                                <div className='skills-blonging'>
                                    <Button styleClass="animated">HTML/CSS</Button>
                                    <Button styleClass="animated">Bootstrap</Button>
                                    <Button styleClass="animated">Tailwind</Button>
                                    <Button styleClass="animated">SASS</Button>
                                    <Button styleClass="animated">JavaScript</Button>
                                    <Button styleClass="animated">React.js</Button>
                                    <Button styleClass="animated">React Hooks</Button>
                                    <Button styleClass="animated">Redux</Button>
                                    <Button styleClass="animated">Next.js</Button>
                                </div>
                                <p className="icon-text-container"><FaCalendarAlt style={{ color: '#09cdcd' }} /> 13-Sep-1997</p>
                                <p className="icon-text-container"><FaPhoneAlt style={{ color: '#09cdcd' }} /> 0304-1536740</p>
                                <p className="icon-text-container"><FaEnvelope style={{ color: '#09cdcd' }} />muhammadzahid470786@</p>
                                <p className="icon-text-container"> <FaMapMarkerAlt style={{ color: '#09cdcd' }} /> Johar Town, Lahore,Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
