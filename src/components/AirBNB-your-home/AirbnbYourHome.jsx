import React from "react";
import "./AirbnbYourHome.css";
import HomeHeader from "./Home-header/HomeHeader";
import HomeMap from "./home-map/HomeMap";
import HomeAirbnbSetup from "./Home-Airbnb-Setup/HomeAirbnbSetup";
import HomeAircover from "./Home-Aircover/HomeAircover";
import HomeQuesSection from "./Home-QuesSection/HomeQuesSection";
import HomeAskQues from "./Home-AskQues/HomeAskQues";
const AirbnbYourHome = () => {
  return (
    <div>
      <div className="ayh-container">
        <div className="fixed">
          <HomeHeader className="homeheader" />
        </div>
        <HomeMap />
        <HomeAirbnbSetup />
        <HomeAircover />
      </div>
      <HomeQuesSection />
      <HomeAskQues />
    </div>
  );
};

export default AirbnbYourHome;
