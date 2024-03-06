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
                    <small>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</small>
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