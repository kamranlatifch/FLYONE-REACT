import React from "react";
import CheapFlightSlider from "../CheapFlightSlider/CheapFlightSlider";
import "./CFComponent.css";
function CheapFlightComponent() {
  return (
    <>
      <h4>Cheap Flights</h4>
      <div
        id="carouselExampleControls"
        className="carousel slide CfSlider"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner slider-Div">
          <div className="carousel-item active">
            <CheapFlightSlider />
          </div>
          <div className="carousel-item">
            <CheapFlightSlider />
          </div>
          <div className="carousel-item">
            <CheapFlightSlider />
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
