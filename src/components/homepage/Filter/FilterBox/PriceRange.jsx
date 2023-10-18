import React from "react";
import "./FilterBox.css";
import RemoveIcon from "@mui/icons-material/Remove";
const PriceRange = () => {
  return (
    <div className="container">
      <div className="price-range-heading">
        <h5>Price range</h5>
      </div>
      <div className="price-range-boxs">
        <div className="price-range-box">
          <p className="mini">Minimum</p>
          <input
            type="text"
            name=""
            className="mini-input"
            defaultValue="₹  830"
          />
        </div>
        <RemoveIcon className="Remove-icon" />
        <div className="price-range-box">
          <p className="maxi">Maximum</p>
          <input
            type="text"
            name=""
            className="mini-input"
            defaultValue="₹  39000+"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PriceRange;
