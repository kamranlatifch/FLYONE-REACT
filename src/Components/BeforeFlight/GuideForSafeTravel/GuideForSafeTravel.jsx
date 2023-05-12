import React from "react";
import "./guide.css";
import safetravel from "./Safe_Travel.jpg";
import tp1 from "./tp1.svg";
import tp2 from "./tp2.svg";
import tp3 from "./tp3.svg";
import tp4 from "./tp4.svg";
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
      <div className="col-12 d-flex my-3">
        <div className="col-6 d-flex">
          <img src={tp1} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Online planning – book tickets on flyone.eu. Select online card
            payment.
          </p>
        </div>
        <div className="col-6 d-flex">
          <img src={tp2} alt="" style={{ width: 70 }} />
          <p style={{ marginLeft: "10px" }}>
            Check-in online and get the boarding pass on your mobile.
          </p>
        </div>
      </div>
      <div className="row d-flex my-3">
        <div className="col-6 d-flex">
          <img src={tp1} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Be aware that you do not display any symptoms characteristic to
            COVID-19. Do not go to the airport if you have any of these
            symptoms.
          </p>
        </div>
        <div className="col-6 d-flex gx-2">
          <img src={tp2} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            &nbsp; Make sure you always have protective masks, gloves and hand
            sanitizer prepared. Make sure you replace your mask every four
            hours.
          </p>
        </div>
      </div>
    </>
  );
}

export default GuideForSafeTravel;
