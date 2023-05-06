import React from "react";
import { cheapFlightData } from "../DestinationsJASON/DestinationJason";
import CheapFlightSlider from "../CheapFlightSlider/CheapFlightSlider";
function Destination() {
  return (
    <>
      <div className="row">
        {cheapFlightData.map((item) => (
          <div className="col-md-6">
            <CheapFlightSlider {...item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Destination;
