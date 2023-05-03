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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import TotalServices from "./Components/TotalServices/TotalServices";
import MyBookings from "./Components/HowToBook/MyBookings/MyBookings";
import MyFlyone from "./Components/MyFLYONE/MyFlyone";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flightStatus" element={<FlightStatus />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/how-to-book/:url" element={<AllServices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
