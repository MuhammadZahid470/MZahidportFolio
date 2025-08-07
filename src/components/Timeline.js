import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import '../assets/components css/Timeline.css';

const CareerTimeline = () => {
    return (
        <div className='experien_section'>
            <div className='first-sliding'>
                <p className="heading-with-border">Experience</p>
            </div>
            <div className=" bg-aqua position-relative">
                <div className="timeline-line position-absolute top-0 start-50 translate-middle-x">
                </div>
                <div className="row g-4">
                    {/* Timeline Item 1 */}
                    <div className="col-md-6 alone">
                        <div className="timeline-item  verticall-padding rounded shadow">
                            <div className="timeline-icon position-absolute start-100 icon-middle translate-middle">
                                <i className="fa fa-caret-right"></i>
                            </div>
                            <span className='making-careft text-white'>1</span>
                            <div className="timeline-date super ">
                                <p>10-01-2020 - 25-12-2022</p>
                            </div>
                            <div className="timeline-content">
                                <div className='main-resourece'>
                                    <h3>Freelancer </h3>
                                    <p>Self Employe</p>
                                    <p className='super-responsibilities'>Responsibilties</p>
                                </div>
                                <ul>
                                    <li>Complete brand setup including competitor research, domain registration, and page creation.</li>
                                    <li>Engaging content creation, custom graphic design, page optimization, and link integration.</li>
                                    <li> Full campaign management with targeted Instagram, WhatsApp, and Google Ads marketing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Timeline Item 2 */}
                    <div className="col-md-6 alone">
                        <div className="timeline-item alignments  p-4 rounded shadow">
                            <div className="timeline-icon position-absolute start-0 translate-middle view">
                                <i className="fa fa-caret-left"></i>
                            </div>
                            <span className='second-careft text-white'>2</span>
                            <div className="timeline-date carefting ">
                                <p>05-03-2023 - 20-08-2024</p>
                            </div>
                            <div className="timeline-content">
                                <div className='main-resourece'>
                                    <h3>Digital Marketer</h3>
                                    <p>Nock Code</p>
                                    <p>DHA phase-8  Lahore</p>
                                    <p className='super-responsibilities'>Responsibilties</p>
                                </div>
                                <ul>
                                    <li>Experienced SEO and Digital Marketing Specialist with a data-driven approach.</li>
                                    <li>Proficient in on-page and off-page SEO, including content and technical optimization.</li>
                                    <li>Skilled at converting web traffic into qualified leads and long-term customers.</li>

                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 alone">
                        <div className="timeline-item  verticall-padding rounded shadow">
                            <div className="timeline-icon position-absolute start-100 icon-middle translate-middle">
                                <i className="fa fa-caret-right"></i>
                            </div>
                            <span className='making-careft text-white'>1</span>
                            <div className="timeline-date super ">
                                <p>10-01-2025 - Present</p>
                            </div>
                            <div className="timeline-content">
                                <div className='main-resourece'>
                                    <h3>Social Media Manager </h3>
                                    <p>codelounge</p>
                                    <p>Wapda Town  Lahore</p>
                                    <p className='super-responsibilities'>Responsibilties</p>
                                </div>
                                <ul>
                                    <li>Managed Facebook, Instagram, LinkedIn, and Twitter accounts to enhance brand visibility and audience engagement.</li>
                                    <li>Created eye-catching visual content using Canva and Adobe Photoshop aligned with brand identity.</li>
                                    <li>Scheduled and published content consistently while managing real-time audience interactions.</li>
                                    <li>Monitored performance analytics to optimize strategies and drive higher reach, quality leads, and conversions.</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="col-md-6 alone">
                        <div className="timeline-item alignments  p-4 rounded shadow">
                            <div className="timeline-icon position-absolute start-0 translate-middle view">
                                <i className="fa fa-caret-left"></i>
                            </div>
                            <span className='second-careft text-white'>2</span>
                            <div className="timeline-date carefting ">
                                <p>25-06-24 - Present</p>
                            </div>
                            <div className="timeline-content">
                                <div className='main-resourece'>
                                    <h3>Founder & CEO</h3>
                                    <p>Clickora</p>
                                    <p>Lahore</p>
                                    <p className='super-responsibilities'>Responsibilties</p>
                                </div>
                                <ul>
                                    <li>Founded and lead the overall strategic direction, vision, and growth of the digital marketing agency.</li>
                                    <li>Oversee cross-functional teams to ensure high-quality project execution and exceptional client satisfaction.</li>
                                    <li>Drive business operations, foster strategic partnerships, and innovate service offerings in a competitive digital landscape.</li>
                                    <li>Stay ahead of digital trends to continuously improve the agency’s performance and value to clients.</li>


                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CareerTimeline;
