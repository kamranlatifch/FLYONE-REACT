import React from "react";
import "./cheapflightslider.css";

function CheapFlightSlider(props) {
  return (
    <div>
      <div className="container-fluid col-12 cheap-flights" id={props.id}>
        <div className="row card-slider my-4">
          <div className="flight-card">
            <div className="card">
              <img src={props.img} className="card-img-top" alt="..." />

              <div className="overlay">
                <div className="card-body cheap-flight-card card1 d-flex">
                  <h5>
                    {props.from}{" "}
                    <i className="fa fa-plane" aria-hidden="true"></i>{" "}
                    {props.to}
                  </h5>
                  <h4>from ${props.price}</h4>
                </div>
                <button className="btn btn-primary form-control ">
                  <b>Find and book-</b>{" "}
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flight-card  col-4">
            <div className="card">
              <img src={props.img} className="card-img-top" alt="..." />

              <div className="overlay">
                <div className="card-body cheap-flight-card card2 d-flex">
                  <h5>
                    {props.from}{" "}
                    <i className="fa fa-plane" aria-hidden="true"></i>{" "}
                    {props.to}
                  </h5>
                  <h4>from ${props.price}</h4>
                </div>
                <button className="btn btn-primary form-control ">
                  <b>Find and book-</b>{" "}
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className=" flight-card col-4">
            <div className="card">
              <img src={props.img} className="card-img-top" alt="..." />

              <div className="overlay">
                <div className="card-body cheap-flight-card card3 d-flex">
                  <h5>
                    {props.from}{" "}
                    <i className="fa fa-plane" aria-hidden="true"></i>{" "}
                    {props.to}
                  </h5>
                  <h4>from ${props.price}</h4>
                </div>
                <button className="btn btn-primary form-control ">
                  <b> Find and book-</b>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CheapFlightSlider;
