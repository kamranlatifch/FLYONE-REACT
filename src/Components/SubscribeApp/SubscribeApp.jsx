import React from "react";
import "./subscribeapp.css";
import followus from "../Images/Main/followUs.png";
import mobileapp from "../Images/Main/mobileApp.png";
import news from "../Images/Main/news.png";
import questionanswers from "../Images/Main/questionanswers.svg";
import subscribe from "../Images/Main/subscribe.png";

function SubscribeApp() {
  return (
    <div>
      <div className="container-fluid col-12 link-cards">
        <div className="row container-fluid link-card-body">
          <div className="col-3 card card1">
            <div className="row my-4">
              <div className="col">
                <img src={news} alt="" />
              </div>
              <div className="col">
                <h3>NEWS</h3>
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a href="">DIRECT FLIGHT CHISINAU-BERLIN!</a>
                <a href="">
                  FLYONE LAUNCHES ITS NEXT NEW FLIGHT DESTINATION - ZURICH!
                </a>
                <a href="">FLYONE LAUNCHES DIRECT FLIGHTS TO ROME!</a>
                <a href="">FLYONE ACTIVATES PROMO MODE!</a>
                <a href="">
                  FLYONE LAUNCHES THE FLIGHT TO MILAN - THE VIBRANT CITY!
                </a>
                <a href="">25% OFF FOR BLUE WEEKEND!</a>
              </div>
            </div>
          </div>
          <div className="col-3 card card2">
            <div className="row upper my-4">
              <div className="col upper-content">
                <div className="row text-center">
                  <h5>FLYONE Mobile App</h5>
                </div>
                <div className="row  app-icon">
                  <div className="col-12 text-center">
                    <i className="fa fa-android"></i>
                    <i className="fa fa-apple"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img src={mobileapp} alt="" />
            </div>
            <div className="row">
              <button className="btn btn-primary">Read More</button>
            </div>
          </div>
          <div className="col-3 card card3">
            <div className="row upper my-4">
              <div className="col-1 my-4">
                <img src={questionanswers} alt="" style={{ width: 50 }} />
              </div>
              <div className="col-9 my-2">
                <h6>We are here to support you</h6>
                <p>Browse our F.A.Q to get instant answer</p>
              </div>
            </div>
            <div className="row upper my-4">
              <div className="col-1 my-4">
                <img src={followus} alt="" style={{ width: 50 }} />
              </div>
              <div className="col-9 my-2">
                <h5>Follow Us</h5>

                <div className="followus-icon">
                  <i className="fa fa-facebook"></i> &nbsp; &nbsp;
                  <i className="fa fa-instagram"></i>&nbsp; &nbsp;
                  <i className="fa fa-linkedin"></i>&nbsp; &nbsp;
                  <i className="fa fa-apple"></i>&nbsp; &nbsp;
                </div>
                <div className="followus-icon">
                  <i className="fa fa-twitter"></i> &nbsp; &nbsp;
                  <i className="fa fa-instagram"></i>&nbsp; &nbsp;
                  <i className="fa fa-youtube"></i>&nbsp; &nbsp;
                  <i className="fa fa-apple"></i>&nbsp; &nbsp;
                </div>
              </div>
            </div>
            <div className="row upper my-4">
              <div className="col-1 my-4">
                <img src={subscribe} alt="" style={{ width: 50 }} />
              </div>
              <div className="col-9 my-2">
                <h6>Add your mail for best offers</h6>
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#subscribeModel"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subscribe model start */}

      <div
        className="modal fade"
        id="subscribeModel"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Subscribe to newsletter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="body-para">
                <p>
                  Subscribe to our newsletter and stay updated on the latest
                  deals
                </p>
                <input
                  type="email"
                  className="form-control p-3"
                  placeholder="abcd@abcd.com"
                />
                <div className="d-flex">
                  <input type="checkbox" name="" id="" /> &nbsp;
                  <p className="my-3">
                    I accept the{" "}
                    <a href="" style={{ textDecoration: "none" }}>
                      {" "}
                      <b>Privacy notice</b>{" "}
                    </a>
                  </p>
                </div>
                <button className="btn btn-primary form-control p-3">
                  <b>Subscribe</b>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeApp;
