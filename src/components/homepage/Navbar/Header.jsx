import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../card-img/logo/long-logo.png";
import MobileSearchBar from "./MobileSearchBar";
import CustomizedMenus from "./CustomizedMenus";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import EarthBox from "./EarthBox/EarthBox";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import SearchBar from "./SearchBar/SearchBar";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEarthBoxOpen, setIsEarthBoxOpen] = useState(false);

  const toggleEarthBox = () => {
    setIsEarthBoxOpen(!isEarthBoxOpen);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="logo" className="nav-logo" />

        <div className="search" onClick={toggleModal}>
          <div className="search-text">Any where</div>
          <div className="search-text">Any week</div>
          <div className="btn-3">Add guests</div>
          <div className="search-logo-div">
            <SearchIcon className="search-logo" />
          </div>
        </div>
        <div className="profile">
          <div className="airbnb-your-home">
            <button type="button" className="btn" id="btn-outline-light">
              <Link to="airbnb" className="LinkAirbnbYourHome">
                Airbnb your home
              </Link>
            </button>
          </div>
          <div className="earth" onClick={toggleEarthBox}>
            <LanguageRoundedIcon />
          </div>
          <div className="menu">
            <CustomizedMenus />
          </div>
        </div>
      </nav>
      <MobileSearchBar />
      <hr />

      <SimpleBottomNavigation />
      <SearchBar isOpen={isModalOpen} onClose={toggleModal} />
      <EarthBox isOpen={isEarthBoxOpen} onClose={toggleEarthBox} />
    </div>
  );
};

export default Header;
