import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import CheapFlightComponent from "./Components/CheapFlightComponent/CheapFlightComponent";
import Slider from "./Components/Slider/Slider";
import SearchSection from "./Components/SearchSection/SearchSection";
import CheckInStatus from "./Components/CheckInStatus/CheckInStatus";
import CheapFlightSlider from "./Components/CheapFlightSlider/CheapFlightSlider";
import AdditionalServices from "./Components/AdditionalServices/AdditionalServices";
import SubscribeApp from "./Components/SubscribeApp/SubscribeApp";

import Footer from "./Components/Footer/Footer";
import AllServices from "./Components/AllServices/AllServices";
import FlightStatus from "./Components/HowToBook/FlightStatus/FlightStatus";
function App() {
  return (
    <div>
      <Header />
      {/* <Slider />
      <SearchSection />
      <CheckInStatus />
      <CheapFlightComponent />
      <AdditionalServices />
      <SubscribeApp /> */}
      {/* <AllServices /> */}
      <FlightStatus />
      <Footer />
    </div>
  );
}

export default App;
