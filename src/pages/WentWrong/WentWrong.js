import React from "react";
import StyleWentWrong from "./StyleWentWrong";

const WentWrong = () => {
  return (
    <StyleWentWrong>
      <div className="error-page">
        <div className="error-content">
          <h1>Something went wrong</h1>
          <img
            src="https://i.gifer.com/origin/be/be003c72754a4234b4e5fcf2c9734b0f.gif"
            alt="Error"
          />
        </div>
      </div>
    </StyleWentWrong>
  );
};

export default WentWrong;
