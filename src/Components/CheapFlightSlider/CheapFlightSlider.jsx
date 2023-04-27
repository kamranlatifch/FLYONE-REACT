import React from "react";
import "./cheapflightslider.css";
import pic1 from "../Images/Main/1.jpg";
import pic2 from "../Images/Main/2.jpg";
import pic3 from "../Images/Main/3.jpg";
function CheapFlightSlider() {
  return (
    <div>
      <div className="container-fluid col-12 cheap-flights">
        <div className="row card-slider my-4">
          <div className="flight-card col-4">
            <div className="card">
              <img src={pic1} className="card-img-top" alt="..." />

              <div className="overlay">
                <div className="card-body cheap-flight-card card1 d-flex">
                  <h5>
                    Chisinau <i className="fa fa-plane" aria-hidden="true"></i>{" "}
                    Zurich
                  </h5>
                  <h4>from $93</h4>
                </div>
                <button className="btn btn-primary form-control ">
                  <b>Find and book-</b>{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="flight-card  col-4">
            <div className="card">
              <img src={pic2} className="card-img-top" alt="..." />

              <div className="overlay">
                <div className="card-body cheap-flight-card card2 d-flex">
                  <h5>
                    Chisinau <i className="fa fa-plane" aria-hidden="true"></i>{" "}
                    Tbilisi
                  </h5>
                  <h4>from $93</h4>
                </div>
                <button className="btn btn-primary form-control ">
                  <b>Find and book-</b>{" "}
                </button>
              </div>
            </div>
          </div>

          <div className=" flight-card col-4">
            <div className="card">
              <img src={pic3} className="card-img-top" alt="..." />

              <div className="overlay">
                <div className="card-body cheap-flight-card card3 d-flex">
                  <h5>
                    Chisinau <i className="fa fa-plane" aria-hidden="true"></i>{" "}
                    Dubai
                  </h5>
                  <h4>from $93</h4>
                </div>
                <button className="btn btn-primary form-control ">
                  <b> Find and book-</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheapFlightSlider;
