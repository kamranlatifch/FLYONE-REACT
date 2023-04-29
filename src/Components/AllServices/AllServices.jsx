import React, { useState } from "react";
import "./allServices.css";
import { useEffect } from "react";
import MyFlyone from "../MyFLYONE/MyFlyone";
import TotalServices from "../TotalServices/TotalServices";
import FareFmilies from "../HowToBook/FareFamilies/FareFmilies";
function AllServices() {
  //   const [howToBookShow, setHowToBookShow] = useState(false);
  const [title, setTitle] = useState("hide");
  const [showingDiv, setShowingDiv] = useState("");
  //   useEffect(() => {
  // if (title === "show" && showingDiv === "howtobook") {
  //   setHowToBookShow(true);
  // } else {
  //   setHowToBookShow(false);
  // }
  // if (title === "show" && showingDiv === "beforeflight") {
  //   setHowToBookShow(true);
  // } else {
  //   setHowToBookShow(false);
  // }
  //   }, [title]);

  return (
    <>
      <div className="container-fluid all-services col-12 t">
        <h1 className="my-5 l-3">All Services</h1>
        <div className="row my-3" style={{ justifyContent: "space-around" }}>
          <div className="col-2 left-div-container">
            <div
              className="services-left-div"
              style={{ border: "1px solid black" }}
            >
              <div className="howToBook my-3">
                <div
                  className="title"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("howtobook");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    <b>How To Book </b>
                    {showingDiv !== "howtobook" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "howtobook" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "howtobook" && (
                  <div id="howToBookDiv" className="services">
                    <a href="How-to-book/MyFLYONE.html">My FLYONE</a>
                    <a href="/">Fare Families</a>
                    <a href="/">MyBookings</a>
                    <a href="/">Passenger Types</a>
                    <a href="/">Group Bookings</a>
                    <a href="/">Voucher Conditions</a>
                    <a href="/">FLYONE Mobile App</a>
                  </div>
                )}
              </div>
              <div>
                <div
                  className="title my-3"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("beforeflight");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    <b>Before Flights</b>{" "}
                    {showingDiv !== "beforeflight" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "beforeflight" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "beforeflight" && (
                  <div id="beforeFlightsDiv" className="services">
                    <a href="fareview.html">Baggage</a>
                    <a href="/">Seat Selection</a>
                    <a href="/">Check-In</a>
                    <a href="/">Meal</a>
                    <a href="/">Menu On Board</a>
                    <a href="/">Unaccompanied Minor</a>
                    <a href="/">Passport Details</a>
                    <a href="/">Electronic Devices</a>
                    <a href="/">Liquids</a>
                    <a href="/">Smoking</a>
                    <a href="/">Zero Tolerance Policy</a>
                    <a href="/">Security: Articles Prohibited</a>
                    <a href="/">Guide For Safe Travel</a>
                    <a href="/">IMPORTANT: Travel Updates</a>
                  </div>
                )}
              </div>

              <div>
                <div
                  className="title my-3"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("tripassistant");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    <b>Trip Assistant</b>{" "}
                    {showingDiv !== "tripassistant" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "tripassistant" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "tripassistant" && (
                  <div
                    id="tripAssistantDiv"
                    className="services"
                    style={{ display: "grid" }}
                  >
                    <a href="/">Flight Status Online</a>
                    <a href="/">Fare Calender</a>
                    <a href="/">Network Map</a>
                  </div>
                )}
              </div>

              <div>
                <div
                  className="title my-3"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("destination");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Destinations</b>{" "}
                    {showingDiv !== "destination" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "destination" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "destination" && (
                  <div
                    id="destinationDiv"
                    className="services"
                    style={{ display: "grid" }}
                  >
                    <a href="/">CHISINAU-PARIS</a>
                    <a href="/">YEREVAN-PARIS</a>
                    <a href="/">CHISINAU</a>
                    <a href="/">PARMA</a>
                    <a href="/">ROME</a>
                    <a href="/">DUBLIN</a>
                    <a href="/">LONDON</a>
                    <a href="/">VERONA</a>
                    <a href="/">MOSCOW</a>
                    <a href="/">YEREVAN-MOSCOW</a>
                    <a href="/">YEREVAN-YEKATERINBURG</a>
                    <a href="/">LISBON</a>
                    <a href="/">BERLIN</a>
                    <a href="/">MUNICH</a>
                    <a href="/">AMSTERDAM</a>
                    <a href="/">TEL-AVIV</a>
                    <a href="/">MADRID</a>
                    <a href="/">BRUSSELS</a>
                    <a href="/">PRAGUE</a>
                    <a href="/">ISTANBUL</a> <a href="/">BEIRUT</a>
                  </div>
                )}
              </div>

              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>All Services</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>
                  </h6>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    <b>Additional Services</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>FLYONE FEES</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>

              <div>
                <div
                  className="title my-3"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("aboutFLYONE");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>About FLYONE </b>
                    {showingDiv !== "aboutFLYONE" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "aboutFLYONE" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "aboutFLYONE" && (
                  <div id="aboutFlyoneDiv" className="services">
                    <a href="/">About Company</a>
                    <a href="/">Fleet</a>
                    <a href="/">General Rules</a>
                    <a href="/">General Rules FLYONE SRL</a>
                    <a href="/">Careers</a>
                    <a href="/">General Rules FLYONE Armenia</a>
                    <a href="/">News</a>
                  </div>
                )}
              </div>

              <div>
                <div
                  className="title my-3"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("businessWithFlyone");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Do Business with FLYONE</b>
                    {showingDiv !== "businessWithFlyone" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "businessWithFlyone" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "businessWithFlyone" && (
                  <div id="doBusinessFlyoneDiv" className="services">
                    <a href="/">Agency Account</a>
                    <a href="/">IATA Travel Agents</a>
                    <a href="/">Cargo</a>
                    <a href="/">ACMI</a>
                    <a href="/">Charter</a>
                    <a href="/">General Rules FLYONE Armenia</a>
                    <a href="/">News</a>
                  </div>
                )}
              </div>

              <div>
                <div
                  className="title my-3"
                  onClick={() => {
                    if (title === "hide") {
                      setShowingDiv("contact");
                      setTitle("show");
                    } else {
                      setShowingDiv("");
                      setTitle("hide");
                    }
                  }}
                >
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Contact</b>
                    {showingDiv !== "contact" && (
                      <i className="fa fa-caret-down"></i>
                    )}
                    {showingDiv === "contact" && (
                      <i className="fa fa-caret-up"></i>
                    )}
                  </h6>
                </div>
                {showingDiv === "contact" && (
                  <div
                    id="contactDiv"
                    className="services"
                    style={{ display: "grid" }}
                  >
                    <a href="/">Contact Us</a>
                    <a href="/">Representatives</a>
                    <a href="/">Ticket Sales</a>
                  </div>
                )}
              </div>

              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>FAQ</b> <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Privacy Policy</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Cookies</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Term of Use</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <h6 style={{ marginLeft: 10 }}>
                    {" "}
                    <b>Gift Voucher - Terms and Conditions</b>{" "}
                    <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 right-div-data">
            {/* <MyFlyone /> */}
            <FareFmilies />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllServices;
