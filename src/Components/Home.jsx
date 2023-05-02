import React from "react";
import Slider from "./Slider/Slider";
import SearchSection from "./SearchSection/SearchSection";
import CheckInStatus from "./CheckInStatus/CheckInStatus";
import CheapFlightComponent from "./CheapFlightComponent/CheapFlightComponent";
import AdditionalServices from "./AdditionalServices/AdditionalServices";
import SubscribeApp from "./SubscribeApp/SubscribeApp";

export default function Home() {
  return (
    <div>
      <Slider />
      <SearchSection />
      <CheckInStatus />
      <CheapFlightComponent />
      <AdditionalServices />
      <SubscribeApp />
    </div>
  );
}
