import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap CSS
import '../assets/components css/Timeline.css';

const CareerTimeline = () => {
    return (
        <div>
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
                                <p>11-2019 - 12-2020</p>
                            </div>
                            <div className="timeline-content">
                                <div className='main-resourece'>
                                    <h3 >Web Developer</h3>
                                    <p>Yamani International</p>
                                    <p>Daska, Sialkot</p>
                                    <p className='super-responsibilities'>Responsibilties</p>
                                </div>
                                <ul>
                                    <li>Handled projects from planning to implementation.</li>
                                    <li>Used Asp.net webforms for full stack applications.</li>
                                    <li>Tackled React js projects by coordinating with backend team.</li>
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
                                <p>01-2021 - 06-2021</p>
                            </div>
                            <div className="timeline-content">
                                <div className='main-resourece'>
                                    <h3>React Js Developer</h3>
                                    <p>ILI Digital</p>
                                    <p>Tricon center, Lahore</p>
                                    <p className='super-responsibilities'>Responsibilties</p>
                                </div>
                                <ul>
                                    <li>Project handling from scratch.</li>
                                    <li>Working on tickets assigned by higher management.</li>
                                    <li>Resolving issues of support projects.</li>
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
