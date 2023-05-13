import React from "react";
import "./guide.css";
import safetravel from "./Safe_Travel.jpg";
import tp1 from "./tp1.svg";
import tp2 from "./tp2.svg";
import tp3 from "./tp3.svg";
import tp4 from "./tp4.svg";
import ba1 from "./ba1.svg";
import ba2 from "./ba2.svg";
import ba3 from "./ba3.svg";
import ba4 from "./ba4.svg";
import ba5 from "./ba5.svg";
import ba6 from "./ba6.svg";
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
          <img src={tp3} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Be aware that you do not display any symptoms characteristic to
            COVID-19. Do not go to the airport if you have any of these
            symptoms.
          </p>
        </div>
        <div className="col-6 d-flex gx-2">
          <img src={tp4} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            &nbsp; Make sure you always have protective masks, gloves and hand
            sanitizer prepared. Make sure you replace your mask every four
            hours.
          </p>
        </div>
      </div>

      <div className="col-12">
        <div className="guideHeader">
          <h5>Before arriving at the airport</h5>
        </div>
      </div>
      <div className="col-12 d-flex my-3">
        <div className="col-6 d-flex">
          <img src={ba1} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Complete the epidemiological card with true information.
          </p>
        </div>
        <div className="col-6 d-flex">
          <img src={ba2} alt="" style={{ width: 70 }} />
          <p style={{ marginLeft: "10px" }}>
            Only travelling passengers with valid tickets can enter the airport
            terminal. Persons that accompany are not provided access into the
            airport.
          </p>
        </div>
      </div>
      <div className="row d-flex my-3">
        <div className="col-6 d-flex">
          <img src={ba3} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Limit the direct contact of any surfaces and remember about social
            distancing.
          </p>
        </div>
        <div className="col-6 d-flex gx-2">
          <img src={ba4} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Mind the respiratory etiquette – covering the mouth and nose with a
            paper towel cover or a flexed elbow when sneezing or coughing, even
            when wearing a mask. Throw the paper towel in the recycle bin
            immediately after use.
          </p>
        </div>
      </div>
      <div className="row d-flex my-3">
        <div className="col-6 d-flex">
          <img src={ba5} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Have your ticket and all travel documents ready. The latest travel
            restrictions can be checked here.
          </p>
        </div>
        <div className="col-6 d-flex gx-2">
          <img src={ba6} alt="" style={{ width: 70 }} />
          <p style={{ alignSelf: "center", marginLeft: 10 }}>
            Allow sufficient time for new safety and checking procedures.
          </p>
        </div>
      </div>
      <div>
        <p>
          <b>
            Be polite, responsible and contribute to the prevention of the
            spread of COVID-19.
          </b>
          <br />
          <br />

          <b>
            Take care of you and the people surrounding you. FLYONE - your safe
            travel partner.
          </b>
        </p>
      </div>
    </>
  );
}

export default GuideForSafeTravel;
