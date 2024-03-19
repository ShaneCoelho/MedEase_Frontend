import React from "react";
import StyleTrackAppoint from "./StyleTrackAppoint";
import ToggleAppoint from './ToggleAppoint'; // Import the ToggleExample component
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import SubHeader from '../../Shared/SubHeader';

const TrackAppoint = () => {
  return (
    <div>
      <Header />
      <Header />
      <SubHeader title="Track Appoint" subtitle="" />
      <StyleTrackAppoint>
        <div className="pa-body">
          <div className="title">Appointment Status</div>
          <div className="content">
            {/* Embedding ToggleAppoint component */}
            <ToggleAppoint />
          </div>
        </div>
      </StyleTrackAppoint>
      <Footer/>
    </div>
  );
};

export default TrackAppoint;
