import React from "react";
import "./HelpHeader.scss";
import img from "../../../../public/logoBlack.png";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const HelpHeader = () => {
  return (
    <div>
      <nav className="help-header">
        <div className="help-container">
          <div className="help-head-container">
            <div className="help-logo">
              <img src={img} alt="AirBNB" className="help-image" />
              <h6 className="help-heading">Help Centre</h6>
            </div>
            <div className="profile help-profile">
              <div className="earth">
                <LanguageRoundedIcon />
              </div>
              <button id="demo-customized-button" className="profile-btn" o>
                <MenuIcon className="menu-icon" />
                <AccountCircleIcon className="AccountCircleIcon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="help-search">
        <h1 className="help-search-heading">Hi, how can we help?</h1>
        <div className="help-search-bar">
          <input
            type="search"
            placeholder="Search how-tos and more
"
            className="help-search-input"
          />
          <button type="button" className="search-logo-btn">
            <div className="search-logo-div1">
              <SearchIcon className="search-logo" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpHeader;
