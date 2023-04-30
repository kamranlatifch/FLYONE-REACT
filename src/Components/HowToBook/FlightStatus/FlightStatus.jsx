import React, { useState } from "react";
import "./FlightStatus.css";
function FlightStatus() {
  const [showingDiv, setShowingDiv] = useState("airport");
  const handleClick = (divname) => {
    setShowingDiv(divname);
  };
  return (
    <>
      <div className="flight-search-section col-12">
        <div className="row buttons gx-1 d-flex">
          <button
            className="button"
            onClick={() => handleClick("airport")}
            style={{
              color: showingDiv === "airport" ? "rgb(89, 89, 239)" : "white",
              backgroundColor: showingDiv === "airport" ? "white" : "",
            }}
          >
            BY AIRPORT
          </button>
          <button
            className="button"
            onClick={() => handleClick("number")}
            style={{
              color: showingDiv === "number" ? "rgb(89, 89, 239)" : "white",
              backgroundColor: showingDiv === "number" ? "white" : "",
            }}
          >
            BY FLIGHT NUMBER
          </button>
        </div>
        {showingDiv === "airport" && (
          <div className="search-inputs col-12 my-4 ">
            <div className="row byAirport gx-1 w-100 justify-content-center">
              <div className="col-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Choose Departure Airport"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Choose Arrival Airport"
                />
              </div>
              <div className="col-3 p-1  bg-white" style={{ borderRadius: 5 }}>
                <button
                  className="col-3 w-100 bg-primary text-white fw-bold"
                  style={{
                    height: 50,
                    borderRadius: 5,
                  }}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        )}

        {showingDiv === "number" && (
          <div className="search-inputs col-12 my-4 ">
            <div className="row byAirport gx-1 w-100 justify-content-center">
              <div className="row byAirport gx-1 w-100 justify-content-center">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Choose Arrival Airport"
                  />
                </div>
                <div
                  className="col-3 p-1  bg-white"
                  style={{ borderRadius: 5 }}
                >
                  <button
                    className="col-3 w-100 bg-primary text-white fw-bold"
                    style={{
                      height: 50,
                      borderRadius: 5,
                    }}
                  >
                    SEARCH
                  </button>
                </div>
              </div>
              <div />
            </div>
          </div>
        )}
      </div>

      <div className="col-8 my-4">
        <p>
          The flight schedule is adapted to local time. Flight changes may
          affect other services - check-in, baggage handover, boarding or other
          related services. Please be receptive to additional information
          provided by FLYONE Customer Service or airports staff.
        </p>
      </div>
    </>
  );
}

export default FlightStatus;
