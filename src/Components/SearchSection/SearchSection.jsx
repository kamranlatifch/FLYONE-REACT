import React, { useEffect } from "react";
import "./searchsection.css";
import { useState } from "react";

function SearchSection() {
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("flight");
  useEffect(() => {
    if (title === "hotel") {
      setSearch(title);
    } else if (title === "flight") {
      setSearch(title);
    } else if (title === "packages") {
      setSearch(title);
    } else if (title === "tours") {
      setSearch(title);
    } else if (title === "transfers") {
      setSearch(title);
    }
  }, [title]);

  return (
    <>
      <div className="search-section container-fluid col-8">
        <div className="row">
          <button
            className="form-control col-1.25"
            id="btn1"
            onClick={() => setTitle("flight")}
          >
            <i className="fa fa-plane"></i> FLIGHT
          </button>

          <button
            className="form-control col-1.25"
            id="btn2"
            onClick={() => setTitle("packages")}
          >
            <i className="fa fa-plane"></i> +
            <i className="fa fa-map-marker"></i>PACKAGES
          </button>

          <button
            className="form-control col-1.25"
            id="btn13"
            onClick={() => setTitle("hotel")}
          >
            <i className="fa fa-map-marker"></i> HOTEL
          </button>

          <button
            className="form-control col-1.25"
            id="btn4"
            onClick={() => setTitle("tours")}
          >
            <i className="bi bi-camera-fill"></i> TOURS
          </button>

          <button
            className="form-control col-1.25"
            id="btn5"
            onClick={() => setTitle("transfers")}
          >
            <i className="bi bi-car-front-fill"></i> TRANSFERS
          </button>

          <button className="form-control col-1.25" id="btn6">
            <i className="bi bi-car-front-fill"></i> RENT A CAR
          </button>
        </div>

        <div className="row search-below">
          {search === "flight" && (
            <div className="searc-input-fields flight" id="flight">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
              <input type="text" placeholder="Departure" />
              <input type="text" placeholder="Return" />
              <input type="text" placeholder="1 Passenger" />
              <input type="text" placeholder="Promocode" />
              <button className="">
                <i className="fa fa-search" style={{ fontSize: 24 }}></i> SEARCH
              </button>
            </div>
          )}
          {search === "packages" && (
            <div className="searc-input-fields packages" id="packages">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
              <input type="text" placeholder="Departure" />
              <input type="text" placeholder="Return" />
              <input type="text" placeholder="1 Passenger" />
              <select name="" id="">
                <option value="1">Economy</option>
                <option value="1">Economy</option>
                <option value="1">Economy</option>
              </select>
              <button className="">
                <i className="fa fa-search" style={{ fontSize: 24 }}></i> SEARCH
              </button>
            </div>
          )}
          {search === "hotel" && (
            <div className="searc-input-fields hotel" id="hotel">
              <input type="text" placeholder="Enter Destination" />
              <input type="text" placeholder="Check-In" />
              <input type="text" placeholder="Check-Out" />
              <input type="text" placeholder="1 Room, 2 Person" />
              <button className="">
                <i className="fa fa-search" style={{ fontSize: 24 }}></i> SEARCH
              </button>
            </div>
          )}

          {search === "tours" && (
            <div className="searc-input-fields tours">
              <input type="text" placeholder="Arriving at" />
              <input type="text" placeholder="Start Date" />
              <input type="text" placeholder="End Date" />
              <input type="text" placeholder="1 Person" />
              <button className="">
                <i className="fa fa-search" style={{ fontSize: 24 }}></i> SEARCH
              </button>
            </div>
          )}
          {search === "transfers" && (
            <div className="searc-input-fields transfers" id="transfers">
              <input type="text" placeholder="From" />
              <input type="text" placeholder="To" />
              <input type="text" placeholder="Departure" />
              <input type="text" placeholder="Return" />
              <input type="text" placeholder="1 Passenger" />
              <select name="" id="">
                <option value="1">Economy</option>
                <option value="1">Economy</option>
                <option value="1">Economy</option>
              </select>
              <button className="">
                <i className="fa fa-search" style={{ fontSize: 24 }}></i> SEARCH
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchSection;
