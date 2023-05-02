import React from "react";
import "./checkinStatus.css";
import checkin from "../Images/Main/online-checkin.svg";
import farecalender from "../Images/Main/fareCalender.svg";
import flightStatus from "../Images/Main/Flight status-on time.svg";
import { Link } from "react-router-dom";
function CheckInStatus() {
  return (
    <div>
      <div className="container-fluid fare-calender col-12 my-5">
        <div className="row d-flex justify-content-center w-100 gx-2">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            className="col-4"
          >
            <div
              className="carousel-div  d-flex"
              data-bs-toggle="modal"
              data-bs-target="#loginModel"
            >
              <img src={checkin} alt="" />
              &nbsp;&nbsp;
              <h4>Check-In Online</h4>
            </div>
          </Link>
          <Link
            to="/flightstatus"
            style={{ textDecoration: "none", color: "black" }}
            className="col-4"
          >
            <div className="carousel-div col-12 d-flex">
              <img src={farecalender} alt="" />
              &nbsp;&nbsp;
              <h4>Fare Calender</h4>
            </div>
          </Link>

          <Link
            to="/flightstatus"
            style={{ textDecoration: "none", color: "black" }}
            className="col-4"
          >
            <div className="carousel-div col-12 d-flex">
              <img src={flightStatus} alt="" /> &nbsp;&nbsp;
              <h4>Online Flight Status</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckInStatus;
