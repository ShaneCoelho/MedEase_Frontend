import React from 'react';
import './StyleInfo.js';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import StyleInfo from './StyleInfo.js';

const InfoPage = () => {
    return (
        <StyleInfo>
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                            Choose MedEase for seamless access to doctor appointments, nearby locations, reviews, and personalized doctor predictions. With user-friendly navigation and comprehensive features, MedEase simplifies healthcare management. Find the right doctor, read real-time reviews, and predict suitable healthcare professionals based on your preferences. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Appointment</h4>
                                        <small className='text-secondary'>24 Hours Service</small>
                                        <p>Schedule appointments effortlessly through MedEase. Choose your preferred date, time, and specialist, ensuring convenience and efficiency in managing your healthcare needs. With just a few clicks, book appointments seamlessly and stay organized with reminders.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Emegency Cases</h4>
                                        <h6 className='text-secondary'>+88 01751 040425</h6>
                                        <p>Access the Emergency Cases section for immediate medical assistance. Quickly locate emergency services, contact numbers, and essential information during critical situations for prompt care and support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </StyleInfo>
    )
}

export default InfoPage