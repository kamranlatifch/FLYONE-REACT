import React from "react";
import "./farefamilies.css";
import { useState } from "react";
import standard from "../../TotalServices/servicesImages/standard.svg";
import loyal from "../../TotalServices/servicesImages/loyal.svg";
import advantage from "../../TotalServices/servicesImages/advantage.svg";
function FareFmilies() {
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
              backgroundColor: showingDiv === "standard" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "standard" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "standard" ? 0 : 5,
            }}
            onClick={() => display("standard")}
          >
            <div className="d-flex col-11">
              <img src={standard} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "standard"
                      ? "white"
                      : "black",
                }}
              >
                STANDARD
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "standard" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "standard" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "standard" && (
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
                Bookings issued according to STANDARD fares include: <br />
                <br />
              </p>
              <ol>
                <li>Web check-in 24h before flight</li>
                <li>Small cabin bag up 90 cm (40x30x20)</li>
              </ol>
              <br />
              <br />
              <p>
                <b>Flight change:</b> Date/time/routing changes are not allowed.
              </p>
              <br />
              <br />
              <p>
                <b> Flight cancellation:</b> The fare amount is non-refundable.
                The administration fee and other additional services are
                non-refundable. Refund conditions will be applied separately per
                each flight segment.
              </p>
            </div>
          )}
        </div>
        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "loyal" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "loyal" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "loyal" ? 0 : 5,
            }}
            onClick={() => display("loyal")}
          >
            <div className="d-flex col-11">
              <img src={loyal} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "loyal"
                      ? "white"
                      : "black",
                }}
              >
                LOYAL
              </h6>
            </div>
            <div className="col-1 my-4" style={{ textAlign: "end" }}>
              {showingDiv !== "loyal" && <i className="fa fa-caret-down"></i>}
              {showingDiv === "loyal" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "loyal" && (
            <div
              id="services-data-toggle4"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Bookings issued according to <b> LOYAL </b>fares include:
                <br />{" "}
              </p>
              <ol>
                <li>Web check-in 24h before flight</li>
                <li>Small cabin bag up 90 cm (40x30x20)</li>
                <li>Discounts for children aged between 2 and 11 years</li>
                <li>Standard checked bag up to 20 kg</li>
              </ol>
              <br />
              <br />
              <p>
                <b> Flight change:</b> Date/time changes are permitted for
                additional fees:
              </p>
              <br />
              <br />
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>-</span>{" "}
                &nbsp;
                <b>
                  {" "}
                  60EUR, if changes are made before the actual scheduled
                  departure{" "}
                </b>
              </p>
              <br />
              <br />
              <p>
                The fare difference between the new booking and original booking
                has to be paid additionally. In case the fare for the new flight
                is lower, the change is not permitted. Date/time changes are
                free of charge for infants without pre-booked seats (0-23
                months). Route changes are not permitted. Conditions and charges
                for changes will be applied separately per each flight segment.{" "}
                <br />* If you have booked any additional services, these will
                not be transferred to your new flight.{" "}
              </p>
              <br />
              <br />
              <p>
                <b>Flight cancellation:</b> The refund is possible after
                collecting a penalty fee:
              </p>{" "}
              <br />
              <br />
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>-</span>{" "}
                &nbsp;
                <b>
                  {" "}
                  80EUR if the refund is made before the actual scheduled
                  departure. In case of no-show, the ticket is non-refundable.{" "}
                </b>
              </p>
              <br />
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>-</span>{" "}
                &nbsp;Flight cancellation is free of charge for infants without
                seats (0-23 months). Administration fee and other additional
                services are non-refundable. Refund conditions and charges will
                be applied separately per each flight segment.
              </p>
            </div>
          )}
        </div>
        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "advantage" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "advantage" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "advantage" ? 0 : 5,
            }}
            onClick={() => display("advantage")}
          >
            <div className="d-flex col-11">
              <img src={advantage} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "advantage"
                      ? "white"
                      : "black",
                }}
              >
                ADVANTAGE
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "advantage" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "advantage" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "advantage" && (
            <div
              id="services-data-toggle5"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Bookings issued according to <b> LOYAL </b>fares include:
                <br />{" "}
              </p>
              <ol>
                <li>Web check-in 24h before flight</li>
                <li>Small cabin bag up 90 cm (40x30x20)</li>
                <li>Discounts for children aged between 2 and 11 years</li>
                <li>Standard checked bag up to 20 kg</li>
              </ol>
              <br />
              <br />
              <p>
                <b> Flight change:</b> Date/time changes are permitted for
                additional fees:
              </p>
              <br />
              <br />
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>-</span>{" "}
                &nbsp;
                <b>
                  {" "}
                  60EUR, if changes are made before the actual scheduled
                  departure{" "}
                </b>
              </p>
              <br />
              <br />
              <p>
                The fare difference between the new booking and original booking
                has to be paid additionally. In case the fare for the new flight
                is lower, the change is not permitted. Date/time changes are
                free of charge for infants without pre-booked seats (0-23
                months). Route changes are not permitted. Conditions and charges
                for changes will be applied separately per each flight segment.{" "}
                <br />* If you have booked any additional services, these will
                not be transferred to your new flight.{" "}
              </p>
              <br />
              <br />
              <p>
                <b>Flight cancellation:</b> The refund is possible after
                collecting a penalty fee:
              </p>{" "}
              <br />
              <br />
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>-</span>{" "}
                &nbsp;
                <b>
                  {" "}
                  80EUR if the refund is made before the actual scheduled
                  departure. In case of no-show, the ticket is non-refundable.{" "}
                </b>
              </p>
              <br />
              <p>
                <span style={{ color: "blue", fontWeight: "bold" }}>-</span>{" "}
                &nbsp;Flight cancellation is free of charge for infants without
                seats (0-23 months). Administration fee and other additional
                services are non-refundable. Refund conditions and charges will
                be applied separately per each flight segment.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FareFmilies;
