import React from "react";
import "./HelpCenter.css";
import HelpHeader from "./HelpHeader/HelpHeader";
import HelpTravelInfo from "./HelpTravelInfo/HelpTravelInfo";
import ExploreMore from "./ExploreMore/ExploreMore";
const HelpCenter = () => {
  return (
    <>
      <div className="help-centre-container">
        <HelpHeader />
        <HelpTravelInfo />
      </div>
      <ExploreMore />
    </>
  );
};

export default HelpCenter;
