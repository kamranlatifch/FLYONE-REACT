import React from "react";
import "./guide.css";
import safetravel from "./Safe_Travel.jpg";
function GuideForSafeTravel() {
  return (
    <>
      <img src={safetravel} alt="Safe Travel" />
      <br />
      <br />
      <h4>Play video</h4>
      <br />
      <h4>Preventive Measures for Safe and Pleasant Flights</h4>
      <div className="col-12">
        <div className="guideHeader">
          <h5>Trip Planning</h5>
        </div>
      </div>
    </>
  );
}

export default GuideForSafeTravel;
