import React from "react";
import children from "./Children and infants.png";
import minor from "./unaccompanied minor.png";
function PassangerTypes() {
  return (
    <div>
      <div className="col-12 right-div-data">
        <div className="my-2 d-flex">
          <img src={children} alt="Children and Infants" />
          <div className="Data mx-3">
            <p>
              <b>Children and infants</b>
            </p>
            <br />
            FLYONE fee for infants aged between 0 and 23 months is 25 EUR.
            <br />
            <br />
            In case you are travelling with more infants aged between 0 and 23
            months, you will purchase tickets with a 25% discount from LOYAL or
            ADVANTAGE fare paid by an adult, or an adult fare without discount
            for STANDART fare under the same reservation with the provision of a
            separate seat.
            <br />
            <br />
          </div>
        </div>
        <div>
          {" "}
          <div>
            {" "}
            Children aged beteen 2 and 11 years will get a discount of 25% from
            LOYAL or ADVANTAGE packages purchased by adults, or they will be
            charged full adult fare for STANDART package if accompanied by
            adults aged 18 or older. Please be aware of exceptions from rules
            for unaccompanied minors or in cases when special/promotional fares
            are apllied.
            <br />
            <br />
            Additional information can be obtained from the FLYONE Call Center,
            phone number 373 22 100003.
          </div>
        </div>

        <div className="my-2 d-flex">
          <img src={minor} alt="Children and Infants" />
          <div className="Data mx-3">
            <p>
              <b>Unaccompanied Minor</b>
            </p>
            <br />
            UMNR is a special service offered by FLYONE for unaccompanied
            minors. UMNR service is mandatory for following unaccompanied
            minors:
            <br />
            <br />
            - Children between the age of 5 and 18, citizens of the Republic of
            Moldova - Children between the age of 5 and 12, foreign citizens.
            <br />
            <br />
          </div>
        </div>
        <div>
          {" "}
          <div>
            {" "}
            Requirements for UMNRs who are citizens of the Republic of Moldova:
            <br />
            - Prior confirmation from the carrier that shall be requested
            through reservation systems;
            <br />
            - Guaranteed payment for the service (please address to FLYONE
            representatives or authorised agencies for details);
            <br />
            - Statement for border crossing on behalf of parents or appointed
            guardian (for detailed information please address to FLYONE Call
            Center – 022100003).
            <br />
            <br />
            Requirements for UMNRs who are not citizens of Republic of Moldova:
            <br />
            - Prior confirmation from the carrier that shall be requested
            through reservation systems;
            <br />
            - Guaranteed payment for the service (please address to FLYONE
            representatives or authorised agencies for details).
            <br />
            <br />
            An UMNR form shall be properly issued and the parent or appointed
            guardian shall remain at the airport until the flight departure.
            <br />
            <br />
            Due to safety reasons UMNRs cannot be seated in emergency exit rows.
            <br />
            <br />
            Children under 5 years cannot be accepted as UMNRs.
            <br />
            <br />
            In order to have a pleasant flight experience, please check
            additional legal requirements of the minor’s country of residence,
            departure, arrival and/or transit countries. Service cost – 60 EURO
            per flight.
            <br />
            <br />
            <b>
              * This service cannot be offered for the destination
              Chisinau-Paris, Paris-Chisinau
            </b>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassangerTypes;
