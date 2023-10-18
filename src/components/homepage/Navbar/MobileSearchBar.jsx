import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

const MobileSearchBar = () => {
  return (
    <div className="mobile-nav">
      <div className="search-bar">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <div className="search-text2">
          <p>Anywhere</p>
        </div>
        <div className="week-and-guests">
          <p>Any Week</p>
          <p>Any Guests</p>
        </div>
      </div>
      <div className="res-filtar">
        <TuneIcon className="tune-icon" />
      </div>
    </div>
  );
};

export default MobileSearchBar;
