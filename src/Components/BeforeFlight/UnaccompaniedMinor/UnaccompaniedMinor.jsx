import React from "react";
import minor from "./Minors.png";
function UnaccompaniedMinor() {
  return (
    <div>
      <img src={minor} alt="minor" />
      <p>
        UMNR service is mandatory for the following unaccompanied minors:
        <br />
        <br />
        - children aged between 5 and 18, citizens of the Republic of Moldova
        <br />
        - children aged between 5 and 12, foreign citizens.
        <br />
        <br />
        Requirements for UMNRs who are citizens of Republic of Moldova:
        <br />
        <br />
        - prior confirmation from the carrier that shall be requested through
        reservation systems;
        <br />
        - guaranteed payment for the service (please address to FLYONE
        representatives or authorised agencies for details); - statement for
        border crossing on behalf of parents or an appointed guardian (for
        detailed information please address to FLYONE Call Center – 022100003).
        Requirements for UMNRs who are not citizens of the Republic of Moldova:
        - prior confirmation from the carrier that shall be requested through
        reservation systems; - guaranteed payment for the service (please
        address to Fly One representatives or authorised agencies for details).
        <br />
        An UMNR form shall be properly issued and the parent or the appointed
        guardian shall remain at the airport until <br />
        <br />
        the scheduled departure. Due to safety reasons UMNRs cannot be seated in
        emergency exit rows.
        <br />
        <br />
        Children under 5 years cannot be accepted as UMNRs.
        <br />
        <br />
        Please check additional legal requirements of the minor’s country of
        residence, departure, arrival and/or transit in order to ensure a
        pleasant trip. <br />
        <br />
        Service cost – 60 EURO per flight. <br />
        <br />
        <b>
          * This service cannot be offered for the destination Chisinau-Paris,
          Paris-Chisinau
        </b>
        <br />
        <br />
      </p>
    </div>
  );
}

export default UnaccompaniedMinor;
