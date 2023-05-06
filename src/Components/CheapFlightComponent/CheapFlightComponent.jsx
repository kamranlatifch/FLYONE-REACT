import React from "react";
import { cheapFlightData } from "../DestinationsJASON/DestinationJason";
import "./CFComponent.css";
import CheapFlightSlider from "../CheapFlightSlider/CheapFlightSlider";
import pic1 from "../Images/Main/1.jpg";
import pic2 from "../Images/Main/2.jpg";
import pic3 from "../Images/Main/3.jpg";
import { Link } from "react-router-dom";
function CheapFlightComponent() {
  let slider1 = cheapFlightData.slice(0, 3);
  let slider2 = cheapFlightData.slice(3, 6);
  let slider3 = cheapFlightData.slice(6, 9);
  let slider4 = cheapFlightData.slice(9, 12);
  return (
    <>
      <div className="d-flex">
        <div style={{ marginLeft: 30 }}>
          <h4>Cheap Flights</h4>
        </div>
        <div style={{ marginLeft: 30 }}>
          <Link to="/en/Destinations">
            <button className="btn ad-btn btn-primary">View All</button>
          </Link>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide CfSlider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slider-Div">
          <div className="carousel-item active">
            <div className="row">
              {slider1.map((item) => (
                <div className="col-md-4" id="1">
                  <CheapFlightSlider {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {slider2.map((item) => (
                <div className="col-md-4" id="2">
                  <CheapFlightSlider {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {slider3.map((item) => (
                <div className="col-md-4" id="3">
                  <CheapFlightSlider {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              {slider4.map((item) => (
                <div className="col-md-4" id="4">
                  <CheapFlightSlider {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev btn-previous"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next btn-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default CheapFlightComponent;
