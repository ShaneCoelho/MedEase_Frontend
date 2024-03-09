import React from 'react';

import Footer from '../../Shared/Footer/Footer';

import ClinicAndSpecialities from '../ClinicAndSpecialities/ClinicAndSpecialities';

import HeroSection from '../HeroSection/HeroSection';
import InfoPage from '../InfoPage/InfoPage';
import Header from '../../Shared/Header/Header';

import Gallery from '../Gallery/Gallery';
import OurDoctors from '../OurDoctor/OurDoctors';


const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <InfoPage />
            <ClinicAndSpecialities />
            <OurDoctors/>

            <Gallery/>
            <Footer />
        </>
    );
};

export default Home;