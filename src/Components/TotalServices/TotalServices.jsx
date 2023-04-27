import React from "react";
import { useState } from "react";
import club from "./servicesImages/club.svg";
import meal from "./servicesImages/meal.svg";
import fopriority from "./servicesImages/fopriority.svg";
import bfdeparture from "./servicesImages/checkin.svg";
import apcheckin from "./servicesImages/airportchkin.svg";
import autocheckin from "./servicesImages/automatedCI.svg";
import deskCI from "./servicesImages/deskCIfee.svg";
import lateCI from "./servicesImages/lateCIfee.svg";
import baordingpass from "./servicesImages/bordingprintfee.svg";
import prionotification from "./servicesImages/prnotification.svg";
import lostbaggage from "./servicesImages/baggagegurantee.svg";
function TotalServices() {
  const [title, setTitle] = useState("hide");
  const [showingDiv, setShowingDiv] = useState("");

  return (
    <>
      <div className="col-12 right-div-data">
        <div className="row d-flex">
          <div
            className="data-container d-flex form-control p-4"
            style={{ justifyContect: "space-between" }}
          >
            <div className="d-flex col-11">
              <img src={club} alt="" width="50px" />
              <h6 className="my-3 mx-2">FLYONE Club</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "meal" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "meal" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "meal" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("meal");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={meal} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "meal"
                      ? "white"
                      : "black",
                }}
              >
                Meal selection
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "meal" && <i className="fa fa-caret-down"></i>}
              {showingDiv === "meal" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "meal" && (
            <div
              id="services-data-toggle"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                A wide range of sandwiches, soft drinks and hot drinks are
                available on board for all our flights. We are glad to offer our
                Pre-order Meal Service.{" "}
              </p>
              <p>
                Choose one of the 3 menus and enjoy your special menu on the
                board.
              </p>
            </div>
          )}
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="f-one-priority"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor: showingDiv === "priority" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "priority" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "priority" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("priority");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={fopriority} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "priority"
                      ? "white"
                      : "black",
                }}
              >
                FLYONE Priority
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "priority" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "priority" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "priority" && (
            <div
              id="services-data-toggle1"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                The new service will allow our passengers to save time by
                priority boarding.
              </p>
              <p>
                FLYONE PRIORITY benefits:
                <br />{" "}
              </p>
              <ul>
                <li>cabin bag;</li>
                <li>
                  1 bag of up to 10 kg and 50 x 40 x 25 cm on board of the
                  aircraft;
                </li>
                <li>priority check-in;</li>
                <li>priority boarding;</li>
                <li>
                  minibus to the aircraft for flights departing from Chișinău.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="beforeDeparture"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor:
                showingDiv === "bfDeparture" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "bfDeparture" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "bfDeparture" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("bfDeparture");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={bfdeparture} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "bfDeparture"
                      ? "white"
                      : "black",
                }}
              >
                Check-in 30 days before departure
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "bfDeparture" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "bfDeparture" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "bfDeparture" && (
            <div
              id="services-data-toggle2"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Choose the seat and enjoy the trip. <br />
              </p>
              <p>
                Get the boarding pass in advance and choose the seat you like 30
                days before the flight.
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
              backgroundColor: showingDiv === "apCheckin" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "apCheckin" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "apCheckin" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("apCheckin");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={apcheckin} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "apCheckin"
                      ? "white"
                      : "black",
                }}
              >
                Airport check-in
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "apCheckin" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "apCheckin" && <i className="fa fa-caret-up"></i>}
            </div>
          </div>
          {showingDiv === "apCheckin" && (
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
                You don't have the opportunity to check-in online or from your
                mobile app? Choose the service and check-in at the airport.{" "}
                <br />
              </p>
              <p>
                Airport check-in is available 3 hours before the scheduled
                departure and closes 1 hour before the flight.
              </p>
            </div>
          )}
        </div>
        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            id="autoCheckin"
            style={{
              justifyContect: "space-between",
              borderRadius: 5,
              border: "1px solid #6ec3df",
              backgroundColor:
                showingDiv === "autoCheckin" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "autoCheckin" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "autoCheckin" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("autoCheckin");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={autocheckin} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "autoCheckin"
                      ? "white"
                      : "black",
                }}
              >
                Automated check-in
              </h6>
            </div>
            <div className="col-1 my-4" style={{ textAlign: "end" }}>
              {showingDiv !== "autoCheckin" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "autoCheckin" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "autoCheckin" && (
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
                Complete your personal data while booking and we will take care
                of everything. <br />{" "}
              </p>
              <p>
                Select the service and receive the boarding pass automatically
                up to 24 hours and not later than 4 hours before the flight.
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
              backgroundColor:
                showingDiv === "deskCheckin" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "deskCheckin" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "deskCheckin" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("deskCheckin");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={deskCI} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "deskCheckin"
                      ? "white"
                      : "black",
                }}
              >
                DESK CHECK-IN Fee
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "deskCheckin" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "deskCheckin" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "deskCheckin" && (
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
                You don't have the opportunity to check-in online?
                <br />
                Choose the service and check-in at the airport. <br />{" "}
              </p>
              <p>
                Per passenger, per flight <br />
              </p>
              <p>Service cost – 30 EUR per flight.</p>
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
              backgroundColor:
                showingDiv === "lateCheckin" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "lateCheckin" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "lateCheckin" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("lateCheckin");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={lateCI} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "lateCheckin"
                      ? "white"
                      : "black",
                }}
              >
                LATE CHECK-IN fee
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "lateCheckin" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "lateCheckin" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "lateCheckin" && (
            <div
              id="services-data-toggle6"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Are you late at the airport and do not have enough time to
                check-in?
                <br />
                We can offer our help. Our representatives can reopen check-in
                for a fee.{" "}
              </p>
              <p>
                Per passenger, per flight <br />
                <br />
              </p>
              <p>Service cost – 60 EUR per flight.</p>
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
              backgroundColor:
                showingDiv === "boardingpass" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "boardingpass" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "boardingpass" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("boardingpass");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={baordingpass} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "boardingpass"
                      ? "white"
                      : "black",
                }}
              >
                Bording pass print fee
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "boardingpass" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "boardingpass" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "boardingpass" && (
            <div
              id="services-data-toggle7"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                If you do not have the printed boarding pass on the A4 sheet or
                in a digital format, you can choose to print the boarding pass
                at the airport. <br />
                <br />{" "}
              </p>
              <p>
                Per passenger, per flight <br />
                <br />
              </p>
              <p>Service cost – 5 EUR per flight.</p>
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
              backgroundColor:
                showingDiv === "prionotification" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "prionotification" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "prionotification" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("prionotification");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={prionotification} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "prionotification"
                      ? "white"
                      : "black",
                }}
              >
                Priority notification
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "prionotification" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "prionotification" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "prionotification" && (
            <div
              id="services-data-toggle8"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                <b> Find out first!</b> In case of schedule changes the
                passengers will be informed firstly according to the contact
                details (email/phone number) from the reservation. <br />
                <br />
              </p>
              <p>
                Please provide correct contact details and the availability to
                be contacted any time in order to take the full advantage of the
                service.
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
              backgroundColor:
                showingDiv === "lostbaggage" ? "#6ec3df" : "white",
              borderBottomLeftRadius:
                title === "show" && showingDiv === "lostbaggage" ? 0 : 5,
              borderBottomRightRadius:
                title === "show" && showingDiv === "lostbaggage" ? 0 : 5,
            }}
            onClick={() => {
              if (title === "hide") {
                setShowingDiv("lostbaggage");
                setTitle("show");
              } else {
                setShowingDiv("");
                setTitle("hide");
              }
            }}
          >
            <div className="d-flex col-11">
              <img src={lostbaggage} alt="" width="50px" />
              <h6
                className="my-3 mx-2"
                style={{
                  color:
                    title === "show" && showingDiv === "lostbaggage"
                      ? "white"
                      : "black",
                }}
              >
                Baggage Guarantee
              </h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              {showingDiv !== "lostbaggage" && (
                <i className="fa fa-caret-down"></i>
              )}
              {showingDiv === "lostbaggage" && (
                <i className="fa fa-caret-up"></i>
              )}
            </div>
          </div>
          {showingDiv === "lostbaggage" && (
            <div
              id="services-data-toggle9"
              className="services-data-toggle"
              style={{
                border: "1px solid #6ec3df",
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <p>
                Select baggage guarantee and which will be insured in case of
                damage or loss. Maximum ammount of guarantee is 600 eur. <br />
                <br />
              </p>
              <p>
                <b> Baggage Damage:</b> payment compensation related to the
                expenses incurred for the damage repair or 10 EUR per 1 kg.
              </p>
              <p>
                <b>Lost Baggage:</b> 20 EUR per 1 kg.
              </p>
            </div>
          )}
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="baggagePrio()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/baggagegurantee.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Baggage priority</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle10"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>There is no need to wait in long queues!</p>
            <p>
              With baggage priority service your baggage will arrive first on
              the baggage carousel.
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="ontimeGuarantee()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/ontimeguarantee.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Ontime Guarantee</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle11"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              Delayed flight or cancelled flight? <br />
              You get a reward up to 100 EUR. <br />
              <br />
            </p>
            <p>
              <b>Delayed flight:</b> payment compensation of 15 EUR per hour
              starting with the sixth hour of delay.
            </p>
            <p>
              <b>Cancelled flight:</b> payment of documented expenses during the
              period of delay for hotel accommodation within the limits of 70
              EUR and documented expenses for meals up to 23 EUR during the
              delay period.
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="changeFlex()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/changeflex.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Change Flex</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle12"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              <b> Have you changed your travel plans?</b> <br />
              <br />
            </p>
            <p>Have you changed your travel plans?</p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="lockFare()"
          >
            <div className="d-flex col-11">
              <img src="images/AllServices/lockfare.svg" alt="" width="50px" />
              <h6 className="my-3 mx-2">Lock fare</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle13"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>Need more time to decide?</p>
            <p>
              With the Lock Fare service you can block the fare and we can hold
              it from 48 hours up to 6 days before the scheduled flight
              departure.
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="addNameLater()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/addnamelater.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Add name later</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle14"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>Not sure who are you going to travel with?</p>
            <p>Book now and add the name later.</p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="namechangeFee()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/giftvoucher.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Name change fee</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle15"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              Have your travel plans changed? <br />
              <br />
            </p>
            <p>
              No need to worry. Access MyBookings and change the passenger name
              from the booking. <br />
              <br />
            </p>
            <p>
              Service cost – 60 EURO per flight. <br />
              <br />
            </p>
            <p>
              <b>
                *The name correction/change cannot be applied to a partially
                used ticket.
              </b>
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="giftVoucher()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/giftvoucher.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Gift voucher</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle16"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              Are you looking for a special gift? <br />
              <br />
            </p>
            <p>
              You can choose one of the gift vouchers and the person who gets it
              will have the possibility to choose the best holiday destination.
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="itSMS()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/itinerarysms.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Itenarary by sms</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle17"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              Flight details by SMS. <br />
              <br />
            </p>
            <p>Get the flight details directly to your phone.</p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="extraSeat()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/extrasheet.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Extra seat</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle18"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              An extra seat in the aircraft (EXST) can be requested in order to
              meet passenger needs. <br />
              <br />
            </p>
            <p>
              The ticket for an additional seat (EXST) consists of 100% of the
              applicable fare + company fees/taxes (YQ/YR) and needs to be
              issued same time as passenger’s ticket issuance (only after
              Carrier’s approval). Airport taxes/fees and charges will not be
              applied for EXST. <br />
              Online booking is not allowed for additional seats (EXST). Extra
              seats should be requested by company’s authorized agencies or
              representatives. Web check-in is not possible for the passenger
              with EXST. <br />
              <br />
            </p>
            <p>
              For safety reasons passengers with extra seats cannot travel next
              to emergency exists.
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="stroller()"
          >
            <div className="d-flex col-11">
              <img src="images/AllServices/stroller.svg" alt="" width="50px" />
              <h6 className="my-3 mx-2">Stroller</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle19"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              Are you travelling with your baby? You can travel with the baby
              trolley. <br />
              <br />
            </p>
            <p>The service is free for children up to 2 years.</p>
            <p>* For children older than 2 years, Stroller fee will apply. </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="callCenterFee()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/callcenterfee.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Call center fee</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle20"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              Do you want to book a ticket or to add additional services via
              phone? <br />
              <br />
            </p>
            <p>
              Do you want to book a ticket or to add additional services via
              phone? <br />
              <br />
            </p>
            <p>
              Service cost – 10 EUR per information <br />
            </p>
          </div>
        </div>

        <div className="row my-2">
          <div
            className="d-flex data-container p-4"
            style={{ justifyContect: "space-between" }}
            onclick="admissionFee()"
          >
            <div className="d-flex col-11">
              <img
                src="images/AllServices/admissionfee.svg"
                alt=""
                width="50px"
              />
              <h6 className="my-3 mx-2">Admission fee</h6>
            </div>
            <div className="col-1 my-3" style={{ textAlign: "end" }}>
              <i className="fa fa-caret-down" id="ct-up"></i>{" "}
              <i
                className="fa fa-caret-up"
                id="ct-down"
                style={{ visibility: "hidden" }}
              ></i>
            </div>
          </div>
          <div
            id="services-data-toggle21"
            className="services-data-toggle"
            style={{ display: "none" }}
          >
            <p>
              The administration fee is applied for each issued ticket. <br />
              <br />
            </p>
            <p>
              Per passenger, per flight <br />
              <br />
            </p>
            <p>
              Service cost – 13 EUR per flight. <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalServices;
