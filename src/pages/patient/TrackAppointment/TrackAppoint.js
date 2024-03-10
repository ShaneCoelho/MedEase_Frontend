import React from "react";
import StyleTrackAppoint from "./StyleTrackAppoint";
import ToggleAppoint from './ToggleAppoint'; // Import the ToggleExample component

const TrackAppoint = () => {
  return (
    <div>
      <StyleTrackAppoint>
        <div className="pa-body">
          <div className="title">Appointment Status</div>
          <div className="content">
            {/* Embedding ToggleAppoint component */}
            <ToggleAppoint />
          </div>
        </div>
      </StyleTrackAppoint>
    </div>
  );
};

export default TrackAppoint;
