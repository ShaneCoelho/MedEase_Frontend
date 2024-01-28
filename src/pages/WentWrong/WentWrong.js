import React, { useState, useEffect } from "react";
import StyleWentWrong from "./StyleWentWrong";
import Loading from "../Loading/Loading";

const WentWrong = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay of 3 seconds
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
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
      )}
    </div>
  );
};

export default WentWrong;