import React from "react";
import { useState } from "react";
import hotel from "./hotel.svg";
import rentacar from "./rentACar.svg";
import aitporttransfer from "./AirPortTransfer.svg";
import cityGuide from "./CityGuide.svg";
function AdServices() {
  const [title, setTitle] = useState("hide");
  const [showingDiv, setShowingDiv] = useState("");
  const display = (prameter) => {
    if (title === "hide") {
      setTitle("show");
      setShowingDiv(prameter);
    } else {
      setShowingDiv("");
      setTitle("hide");
    }
  };
  return (
    <>
      <div className="col-12 right-div-data">
        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="airportCheckin"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "hotel" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "hotel" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "hotel" ? 0 : 5,
            }}
            onClick={() => display("hotel")}
          >
            <div className="d-flex col-11">
              <img src={hotel} alt="Hotel" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "hotel"
                      ? "white"
                      : "black",
                }}
              >
                Hotel
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "hotel" && <i className="fa fa-caret-down"></i>}
              {showingDiv === "hotel" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "hotel" && (
            <div
              id="services-data-toggle3"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Choose your hotel for an unforgettable holiday.
                <br />
                <br />
                The service is provided by FLYONE partners. All questions
                regarding administration, cancellation or objections should be
                addressed directly to the provider company.
                <br />
              </p>
            </div>
          )}
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="airportCheckin"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "rentacar" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "rentacar" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "rentacar" ? 0 : 5,
            }}
            onClick={() => display("rentacar")}
          >
            <div className="d-flex col-11">
              <img src={rentacar} alt="Hotel" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "rentacar"
                      ? "white"
                      : "black",
                }}
              >
                Rent a car
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "rentacar" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "rentacar" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "rentacar" && (
            <div
              id="services-data-toggle3"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Car rental services give you maximum comfort for your vacation.
                Drive your dream car at affordable prices.
                <br />
                <br />
                The service is provided by FLYONE partners. All questions
                regarding administration, cancellation or objections should be
                addressed directly to the provider company.
                <br />
              </p>
            </div>
          )}
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="airportCheckin"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor:
                showingDiv === "aitporttransfer" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "aitporttransfer" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "aitporttransfer" ? 0 : 5,
            }}
            onClick={() => display("aitporttransfer")}
          >
            <div className="d-flex col-11">
              <img src={aitporttransfer} alt="Hotel" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "aitporttransfer"
                      ? "white"
                      : "black",
                }}
              >
                Airport transfer
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "aitporttransfer" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "aitporttransfer" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "aitporttransfer" && (
            <div
              id="services-data-toggle3"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Don't worry about getting to the airport. Book your airport
                transfer service and be sure that you will arrive on time.
                <br />
                <br />
                The service is provided by FLYONE partners. All questions
                regarding administration, cancellation or objections should be
                addressed directly to the provider company.
                <br />
              </p>
            </div>
          )}
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="airportCheckin"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "cityGuide" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "cityGuide" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "cityGuide" ? 0 : 5,
            }}
            onClick={() => display("cityGuide")}
          >
            <div className="d-flex col-11">
              <img src={cityGuide} alt="Hotel" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "cityGuide"
                      ? "white"
                      : "black",
                }}
              >
                City Guide
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "cityGuide" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "cityGuide" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "cityGuide" && (
            <div
              id="services-data-toggle3"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Discover the best tourist attraction at the most suitable
                prices. <br />
                <br />
                <ul>
                  <li>
                    Visit the best locations, museums, attractions, restaurants
                    and other activities
                  </li>
                  <br />
                  <li>Special prices</li>
                </ul>
                <br />
                <br />
                The service is provided by FLYONE partners. All questions
                regarding administration, cancellation or objections should be
                addressed directly to the provider company.
                <br />
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdServices;
