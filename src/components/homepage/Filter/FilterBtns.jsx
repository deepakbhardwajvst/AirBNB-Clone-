import { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import FilterBox from "./FilterBox/FilterBox.jsx";
import "./Filter.css";

const FilterBtns = () => {
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <div>
      <div className="filter-btn-list">
        <div onClick={toggleFilter}>
          <button className="filter-button1">
            <TuneIcon /> Filter
          </button>
        </div>
        <div id="taxes">
          <div className="form-switch form-check">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Display total before taxes
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>
      <div
        className={`filter-overlay ${filterVisible ? "overlay-visible" : ""}`}
      >
        <div className="filter-container">
          <FilterBox isOpen={filterVisible} onClose={toggleFilter} />
        </div>
      </div>
    </div>
  );
};

export default FilterBtns;
