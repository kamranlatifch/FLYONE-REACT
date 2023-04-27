import React from "react";
import "./checkinStatus.css";
import checkin from "../Images/Main/online-checkin.svg";
import farecalender from "../Images/Main/fareCalender.svg";
import flightStatus from "../Images/Main/Flight status-on time.svg";

function CheckInStatus() {
  return (
    <div>
      <div className="container-fluid fare-calender col-12 my-5">
        <div className="row">
          <div
            className="carousel-div col-3 d-flex"
            data-bs-toggle="modal"
            data-bs-target="#loginModel"
          >
            <img src={checkin} alt="" />
            &nbsp;&nbsp;
            <h4>Check-In Online</h4>
          </div>

          <div className="col-1"></div>

          <div className="carousel-div col-3 d-flex" onclick="toFareViewPage()">
            <img src={farecalender} alt="" />
            &nbsp;&nbsp;
            <h4>Fare Calender</h4>
          </div>

          <div className="col-1"></div>
          <div
            className="carousel-div col-3 d-flex"
            onclick="toFlightStatusPage()"
          >
            <img src={flightStatus} alt="" /> &nbsp;&nbsp;
            <h4>Online Flight Status</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInStatus;
