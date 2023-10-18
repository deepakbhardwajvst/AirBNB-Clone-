import React from "react";
import "./HomeHeader.css";
import smallLogo from "../../../../public/logo.png";
import { RiHomeWifiLine } from "react-icons/ri";
const HomeHeader = () => {
  return (
    <div>
      <nav>
        <div className="ayh-nav">
          <img src={smallLogo} alt="" className="ayh-nav-logo" />
          <div className="ayh-nav-heading">
            <p className="ayh-nav-heading-para">Ready to Airbnb it?</p>
            <div className="ayh-nav-button">
              <button className="ayh-nav-btn">
                <RiHomeWifiLine />
                <p className="ayh-nav-para">Airbnb Setup</p>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="ayh-bottom-heading">
        <p className="ayh-bottom-heading-para">Ready to Airbnb it?</p>
        <div className="ayh-bottom-button">
          <button className="ayh-bottom-btn">
            <RiHomeWifiLine />
            <p className="ayh-bottom-para">Airbnb Setup</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
