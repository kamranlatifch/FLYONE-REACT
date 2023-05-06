import React from "react";
import checkin from "./check in.png";
function Checkin() {
  return (
    <>
      <div className="col-12 right-div-data">
        <div className="my-2">
          <img src={checkin} alt="Check-In" />
          <div>
            <h3>CHECK-IN FEE</h3>
            <p>
              <b>Good news at FLYONE.</b> FLYONE announces that check-in is
              available 30 days before scheduled departure for an additional fee
              or is available while booking, if the passenger selects the seat.
              Also, check-in is available free of charge 24 hours before the
              scheduled departure, but not later than 4 hours on the
              www.flyone.eu.
              <br />
              <br />
              Check-in fee can be purchased on the website for only 15EUR, or
              30EUR, if the service is purchased at the airport. For Advantage
              package, check-in is free of change at the airport.
              <br />
              <br />
              <b>
                {" "}
                Please be aware that check-in confirmation is required to be
                presented in digital format or printed on A4 sheet. Also, the
                passport control authorities may require the printed version.
                <br />
                <br />
                In case you checked-in but you don’t have the confirmation and
                passport control authorities require the printed version, you
                will be charged 5 EUR for printing or it will be free of charge
                for Advantage Package.
                <br />
                <br />
                In case when you don’t have the check-in, 30 EUR will be charged
                for airport check-in.
              </b>
              <br />
              <br />
              Web check-in service is available for all regular flights of
              FLYONE airlines.
              <br />
              <br />
              <b> Check-in fee is non-refundable.</b>
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkin;
