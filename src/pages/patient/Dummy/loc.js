import React from 'react';
import Header from '../../Shared/Header/Header';
import SubHeader from '../../Shared/SubHeader';
import Footer from '../../Shared/Footer/Footer';

const loc = () => {
    return (
        <div>
        <Header />
        <SubHeader title="Find Location" subtitle="Locate nearby doctors with ease."/>
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="https://www.google.com/maps/d/embed?mid=1AWQSGAOdBVr2_AWGhbhK-FftNYbPowk&ehbc=2E312F"
                style={{ width: '100%', height: '100%' }}
                frameBorder="0"
                title="Google Maps"
            ></iframe>
        </div>
        <Footer/>
        </div>
    );
};

export default loc;