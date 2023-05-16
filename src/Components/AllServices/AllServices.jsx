import React, { useState } from "react";
import "./allServices.css";
import { NavLink } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import MyFlyone from "../MyFLYONE/MyFlyone";
import TotalServices from "../TotalServices/TotalServices";
import FareFmilies from "../HowToBook/FareFamilies/FareFmilies";
import MyBookings from "../HowToBook/MyBookings/MyBookings";
import FlightStatus from "../TripAssistant/FlightStatus/FlightStatus";
import PassangerTypes from "../HowToBook/PassengerTypes/PassangerTypes";
import GroupBookings from "../HowToBook/GroupBookings/GroupBookings";
import VoucherCondition from "../HowToBook/VoucherCondition/VoucherCondition";
import FlyoneMobileApp from "../HowToBook/MobileApp/FlyoneMobileApp";
import NetworkMap from "../TripAssistant/NetworkMap/NetworkMap";
import AdServices from "./AdServices/AdServices";
import FlyOneFee from "./FlyOneFee/FlyOneFee";
import Checkin from "../BeforeFlight/CheckIn/Checkin";
import Baggage from "../BeforeFlight/Baggage/Baggage";
import ElectronicDevices from "../BeforeFlight/ElectronicDevices/ElectronicDevices";
import GuideForSafeTravel from "../BeforeFlight/GuideForSafeTravel/GuideForSafeTravel";
import ImportantTravelUpdates from "../BeforeFlight/IMPORTANT-TravelUpdates/ImportantTravelUpdates";
import Liquids from "../BeforeFlight/Liquids/Liquids";
import Meal from "../BeforeFlight/Meal/Meal";
import MenuOnBoard from "../BeforeFlight/MenuOnBoard/MenuOnBoard";
import PassportDetails from "../BeforeFlight/PassportDetails/PassportDetails";
import SeatSelection from "../BeforeFlight/SeatSelection/SeatSelection";
import ArticlesProhibited from "../BeforeFlight/Security-ArticlesProhibited/ArticlesProhibited";
import Smoking from "../BeforeFlight/Smoking/Smoking";
import ZeroTolerancePolicy from "../BeforeFlight/ZeroTolerancePolicy/ZeroTolerancePolicy";
import UnaccompaniedMinor from "../BeforeFlight/UnaccompaniedMinor/UnaccompaniedMinor";
import AboutCompany from "../AboutFLYONE/AboutCompany/AboutCompany";
import Fleet from "../AboutFLYONE/Fleet/Fleet";
import GeneralRules from "../AboutFLYONE/GeneralRules/GeneralRules";
import Destination from "../Destinations/Destination";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Cookies from "./Cookies/Cookies";
import TermsOfUse from "./TermsOfUse/TermsOfUse";
import GiftVoucher from "./GiftVoucher/GiftVoucher";
function AllServices() {
  const [title, setTitle] = useState("hide");
  const [showingDiv, setShowingDiv] = useState("");

  const params = useParams();
  const { url } = params;
  var replaced = url.split("-").join(" ");

  return (
    <>
      <h1 className="my-5" style={{ marginLeft: 40 }}>
        {" "}
        {replaced}
      </h1>
      <div className="container-fluid all-services col-12 t">
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
                    <NavLink to="/how-to-book/MyFlyone">My Flyone</NavLink>
                    <NavLink to="/how-to-book/Fare-Families">
                      Fare Families
                    </NavLink>
                    <NavLink to="/how-to-book/MyBookings">MyBookings</NavLink>
                    <NavLink to="/how-to-book/Passanger-Types">
                      Passenger Types
                    </NavLink>
                    <NavLink to="/how-to-book/Group-Bookings">
                      Group Bookings
                    </NavLink>
                    <NavLink to="/how-to-book/Voucher-Condition">
                      Voucher Conditions
                    </NavLink>
                    <NavLink to="/how-to-book/Flyone-Mobile-app">
                      FLYONE Mobile App
                    </NavLink>
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
                    <Link to="/Before-flight/Baggage">Baggage</Link>
                    <Link to="/Before-flight/Seat-selection">
                      Seat Selection
                    </Link>
                    <Link to="/Before-flight/Check-in">Check-In</Link>
                    <Link to="/Before-flight/Meal">Meal</Link>
                    <Link to="/Before-flight/Menu-on-Board">Menu On Board</Link>
                    <Link to="/Before-flight/Unaccompanied-Minor">
                      Unaccompanied Minor
                    </Link>
                    <Link to="/Before-flight/Passport-details">
                      Passport Details
                    </Link>
                    <Link to="/Before-flight/Electronic-Devices">
                      Electronic Devices
                    </Link>
                    <Link to="/Before-flight/Liquids">Liquids</Link>
                    <Link to="/Before-flight/Smoking">Smoking</Link>
                    <Link to="/Before-flight/Zero-tolerance-policy">
                      Zero Tolerance Policy
                    </Link>
                    <Link to="/Before-flight/Security:-articles-prohibited">
                      Security: Articles Prohibited
                    </Link>
                    <Link to="/Before-flight/Guide-for-Safe-Travel">
                      Guide For Safe Travel
                    </Link>
                    <Link to="/Before-flight/IMPORTANT:Travel-Updates">
                      IMPORTANT: Travel Updates
                    </Link>
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
                    <Link to="/Trip-Assistant/Flight-status-online">
                      Flight Status Online
                    </Link>
                    <Link to="/Trip-Assistant/Fare-Calendar">
                      Fare Calender
                    </Link>
                    <Link to="/Trip-Assistant/Network-map">Network Map</Link>
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
                  <Link to="/en/All-services">
                    <h6 style={{ marginLeft: 10 }}>
                      <b>All Services</b>{" "}
                      <i className="fa fa-caret-down" id="ct-up"></i>
                    </h6>
                  </Link>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <Link to="/en/Additional-services">
                    <h6 style={{ marginLeft: 10 }}>
                      <b>Additional Services</b>{" "}
                      <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                    </h6>
                  </Link>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <Link to="/en/FLYONE-FEES">
                    <h6 style={{ marginLeft: 10 }}>
                      {" "}
                      <b>FLYONE FEES</b>{" "}
                      <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                    </h6>
                  </Link>
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
                  <div
                    id="aboutFlyoneDiv"
                    className="services"
                    style={{ display: "grid" }}
                  >
                    <Link to="/en/About-FLYONE/About-company">
                      About Company
                    </Link>
                    <Link to="/en/About-FLYONE/Fleet">Fleet</Link>
                    <Link to="/en/About-FLYONE/General-Rules">
                      General Rules
                    </Link>
                    <Link to="/en/About-FLYONE/General-Rules-SRL">
                      General Rules FLYONE SRL{" "}
                    </Link>
                    <Link to="/en/About-FLYONE/Careers">Careers</Link>
                    <Link to="/en/About-FLYONE/General-Rules-Armenia">
                      General Rules FLYONE Armenia
                    </Link>
                    <Link to="/en/About-FLYONE/News">News</Link>
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
                  <Link to="/en/Privacy-policy">
                    <h6 style={{ marginLeft: 10 }}>
                      Privacy Policy
                      <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                    </h6>
                  </Link>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <Link to="/en/Cookies">
                    <h6 style={{ marginLeft: 10 }}>
                      {" "}
                      <b>Cookies</b>{" "}
                      <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                    </h6>
                  </Link>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <Link to="/en/Terms-of-Use">
                    <h6 style={{ marginLeft: 10 }}>
                      <b>Term of Use</b>{" "}
                      <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                    </h6>
                  </Link>
                </div>
              </div>
              <div>
                <div className="title my-3">
                  <Link to="/en/Gift-Voucher-Terms-and-Conditions">
                    <h6 style={{ marginLeft: 10 }}>
                      <b>Gift Voucher - Terms and Conditions</b>{" "}
                      <i className="fa fa-caret-down" id="ct-up"></i>{" "}
                    </h6>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 right-div-data">
            {replaced === "MyFlyone" && <MyFlyone />}
            {replaced === "Fare Families" && <FareFmilies />}
            {replaced === "MyBookings" && <MyBookings />}
            {replaced === "Passanger Types" && <PassangerTypes />}
            {replaced === "Group Bookings" && <GroupBookings />}
            {replaced === "Voucher Condition" && <VoucherCondition />}
            {replaced === "Flyone Mobile app" && <FlyoneMobileApp />}
            {replaced === "Network map" && <NetworkMap />}
            {replaced === "All services" && <TotalServices />}
            {replaced === "Additional services" && <AdServices />}
            {replaced === "FLYONE FEES" && <FlyOneFee />}
            {replaced === "Check in" && <Checkin />}
            {replaced === "Baggage" && <Baggage />}
            {replaced === "Electronic Devices" && <ElectronicDevices />}
            {replaced === "Guide for Safe Travel" && <GuideForSafeTravel />}
            {replaced === "IMPORTANT:Travel Updates" && (
              <ImportantTravelUpdates />
            )}
            {replaced === "Meal" && <Meal />}
            {replaced === "Menu on Board" && <MenuOnBoard />}
            {replaced === "Passport details" && <PassportDetails />}
            {replaced === "Seat selection" && <SeatSelection />}
            {replaced === "Security: articles prohibited" && (
              <ArticlesProhibited />
            )}
            {replaced === "Liquids" && <Liquids />}
            {replaced === "Smoking" && <Smoking />}
            {replaced === "Zero tolerance policy" && <ZeroTolerancePolicy />}
            {replaced === "Unaccompanied Minor" && <UnaccompaniedMinor />}
            {replaced === "About company" && <AboutCompany />}
            {replaced === "Fleet" && <Fleet />}
            {replaced === "General Rules" && <GeneralRules />}
            {replaced === "Destinations" && <Destination />}
            {replaced === "Privacy policy" && <PrivacyPolicy />}
            {replaced === "Cookies" && <Cookies />}
            {replaced === "Terms of Use" && <TermsOfUse />}
            {replaced === "Gift Voucher Terms and Conditions" && (
              <GiftVoucher />
            )}
            {replaced === "About company" && <AboutCompany />}
            {replaced === "Fleet" && <Fleet />}
            {replaced === "General Rules" && <GeneralRules />}
            {replaced === "General Rules SRL" && <GeneralRules />}
            {replaced === "Careers" && <GeneralRules />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllServices;
