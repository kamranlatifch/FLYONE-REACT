import React from "react";
import "./additionalservices.css";
function AdditionalServices() {
  return (
    <div>
      <div className="container-fluid  add-container col-12 my-5">
        <div className="row">
          <div className="col-4">
            <div
              className="top d-flex"
              style={{ justifyContent: "space-between" }}
            >
              <h3>Additional Services</h3>
              <button className="btn ad-btn btn-primary">View All</button>
            </div>
          </div>
        </div>
        <div className="container-fluid col-12 add-services row my-5">
          <div className="col-8">
            <div className="row add-first-div">
              <div className="additional-divs box-1 col-6">
                <div className="row tags">
                  <div className="col-2">
                    <p>Baggage</p>
                  </div>
                  <div className="col-4 price">
                    <p>from $ 50</p>
                  </div>
                </div>
                <div className="row mx-2">
                  <button
                    className="btn btn-primary col-11"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModel"
                  >
                    Add to your trip +
                  </button>
                </div>
              </div>

              <div className="box-2 col-6">
                <div className="row tags">
                  <div className="col">
                    <p className="col-3">Seats</p>
                  </div>
                  <div className="col-4 price">
                    <p>from $ 4</p>
                  </div>
                </div>
                <div className="row mx-2">
                  <button
                    className="btn btn-primary col-12"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModel"
                  >
                    Add to your trip +
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="box-3 col-12 my-1">
                <div className="row tags">
                  <div className="col-6">
                    <p>FLYONE Priority</p>
                  </div>
                  <div className="col-6 price text-center">
                    <p>from $ 4</p>
                  </div>
                </div>
                <div className="row mx-2">
                  <button
                    className="btn btn-primary col-5"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModel"
                  >
                    Book now <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="box-4 col-4">
            <h2>GIFT VOUCHER</h2>
            <button className="btn btn-primary col-4">
              Book now <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdditionalServices;
