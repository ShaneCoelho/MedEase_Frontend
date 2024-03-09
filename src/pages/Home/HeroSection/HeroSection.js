import React from 'react';
import StyleHero from './StyleHero';
import './StyleHero'
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <StyleHero>
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>TOTAL HEALTH CARE SOLUTION</small>
                    <h1>Your Most Trusted <br />Health Partner</h1>
                    <small>Empowering Your Wellness Journey Every Step of the Way"</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Track Appointment</Link>
                </div>
            </div>
        </section>
        </StyleHero>
    )
}
export default HeroSection;