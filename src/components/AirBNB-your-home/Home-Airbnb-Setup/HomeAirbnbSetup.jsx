import React from "react";
import "./HomeAirbnbSetup.css";
import img from "../img/AirbnbYourHomeFirstImg.png";
const HomeAirbnbSetup = () => {
  return (
    <div>
      <div className="ayh-setup">
        <div className="ayh-setup-heading">
          <h1 className="ayh-setup-heading-h1">
            Airbnb it easily with Airbnb Setup
          </h1>
        </div>
        <div>
          <img src={img} alt="" className="ayh-setup-img" />
        </div>
        <div className="ayh-setup-items">
          <div className="ayh-setup-item">
            <h6 className="ayh-setup-item-head">
              One-to-one guidance from a Superhost
            </h6>
            <p className="ayh-setup-item-para">
              We’ll match you with a Superhost in your area, who’ll guide you
              from your first question to your first guest – by phone, video
              call or chat.
            </p>
          </div>
          <div className="ayh-setup-item">
            <h6 className="ayh-setup-item-head">
              An experienced guest for your first booking
            </h6>
            <p className="ayh-setup-item-para">
              For your first booking, you can choose to welcome an experienced
              guest who has at least three stays and a good track record on
              Airbnb.
            </p>
          </div>
          <div className="ayh-setup-item">
            <h6 className="ayh-setup-item-head">
              Specialised support from Airbnb
            </h6>
            <p className="ayh-setup-item-para">
              New Hosts get one-tap access to specially trained Community
              Support agents who can help with everything from account issues to
              billing support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAirbnbSetup;
