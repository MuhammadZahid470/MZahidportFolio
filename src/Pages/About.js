import React from 'react';
import Button from '../components/Button';
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import z from '../assets/images/z.png';



const About = () => {
    const handleDownloadCV = () => {
        const fileUrl = '/files/your-cv-file.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'MZahid.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div>
           <div className="container">
                    <div className="super-cv">
                        <a href="/Files/CV.pdf" download="My_CV.pdf">
                            <Button styleClass="black">Download CV</Button>
                        </a>
                    </div>
                    <div className="row about-sector mb-4">
                        <div className="col-lg-6 text-center ">
                            <div className='main-views'>
                                <img src={z} alt='crypto' className='super-admin' />
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className='main-section'>
                                <p className="super-text">Who am i?</p>
                                <p className="section-bloger">I am <span className="super-text">Syed Farhan Sajjad </span>Certified Digital Marketing Specialist | SEO | Meta Ads | Google Analytics</p>
                                <p className='seeking-section'>I’m a passionate and results-driven Full-Stack Social Media Manager, Content Creator, and Certified Canva Expert with over 4 years of proven experience in the digital marketing space. I help brands—from solo entrepreneurs to established businesses—grow their online presence, boost engagement, and build loyal communities through strategic content and creative storytelling.</p>
                                <p className="skill-text">Skills:</p>
                                <div className='skills-blonging mb-2'>
                                    <Button styleClass="animated">Social Media Manger</Button>
                                    <Button styleClass="animated">Content Creator</Button>
                                    <Button styleClass="animated">Canva Expert</Button>
                                    <Button styleClass="animated">Grapics Designer</Button>
                                    <Button styleClass="animated">Meta Ads Specialist</Button>
                                    <Button styleClass="animated">SEO Expert</Button>
                                    <Button styleClass="animated">Social Media Marketing</Button>
                                    <Button styleClass="animated">Google Ads</Button>
                                    <Button styleClass="animated">Brand Adviser</Button>
                                </div>
                                <p className="icon-text-container"><FaPhoneAlt style={{ color: '#09cdcd' }} /> +92 3040582154</p>
                                <p className="icon-text-container"><FaEnvelope style={{ color: '#09cdcd' }} />farhanbukhari88@gmail.com</p>
                                <p className="icon-text-container"> <FaMapMarkerAlt style={{ color: '#09cdcd' }} />Lahore, Punjab, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default About
