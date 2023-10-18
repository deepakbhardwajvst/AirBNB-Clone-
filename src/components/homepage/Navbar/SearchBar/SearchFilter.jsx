import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchFilter = () => {
  const [buttonClicked, setButtonClicked] = useState(0);

  const handleClick = (index) => {
    setButtonClicked(index);
  };

  return (
    <div>
      <div className="search-filter-box">
        <div className="search-filter-container">
          <div
            className={`search-filter-items ${
              buttonClicked === 0 && "white-button"
            }`}
            onClick={() => handleClick(0)}
          >
            <p className="search-filter-item">Where</p>
            <p className="search-filter-item">Map area</p>
          </div>
          <div
            className={`search-filter-items ${
              buttonClicked === 1 && "white-button"
            }`}
            onClick={() => handleClick(1)}
          >
            <p className="search-filter-item">check in</p>
            <p className="search-filter-item search-filter-item-opacity">
              Add dates
            </p>
          </div>
          <div
            className={`search-filter-items ${
              buttonClicked === 2 && "white-button"
            }`}
            onClick={() => handleClick(2)}
          >
            <p className="search-filter-item">check out</p>
            <p className="search-filter-item search-filter-item-opacity">
              Add dates
            </p>
          </div>
          <div
            className={`search-filter-items search-filter-items4 ${
              buttonClicked === 3 && "white-button"
            }`}
            onClick={() => handleClick(3)}
          >
            <div className="search-filter-row">
              <p className="search-filter-item">Who</p>
              <p className="search-filter-item search-filter-item-opacity">
                Add guests
              </p>
            </div>
            <div className="search-filter-row">
              <button type="button" className="btn1">
                <SearchIcon className="search-filter-logo" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
