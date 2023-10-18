import React from "react";
import logo from "../../../../card-img/logo/long-logo.png";
import CustomizedMenus from ".././CustomizedMenus";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import SearchFilter from "./SearchFilter";
import "./SearchBar.scss";

const UpdatedSearchBar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="updated-search-bar-overlay">
      <div className="updated-search-bar-content">
        <div className="updated-nav">
          <img src={logo} alt="logo" className="updated-nav-logo" />
        </div>
        <div className="updated-dropdown-btn">
          <h5 className="drop-item">Stays</h5>
          <h5 className="drop-item">Experiences</h5>
          <h5 className="drop-item">Online Experiences</h5>
          <button onClick={onClose}>Close SearchBar</button>
        </div>
        <div className="Right-bar">
          <div className="updated-profile">
            <div className="updated-airbnb-your-home">
              <button
                type="button"
                className="updated-btn"
                id="btn-outline-light"
              >
                Airbnb your home
              </button>
            </div>
            <div className="earth">
              <LanguageRoundedIcon />
            </div>
            <div className="updated-menu">
              <CustomizedMenus />
            </div>
          </div>
        </div>
      </div>
      <SearchFilter />
    </div>
  );
};

export default UpdatedSearchBar;
