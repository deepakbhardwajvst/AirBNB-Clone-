import React from "react";
import { useState } from "react";
const TypesOfPlace = () => {
  const [activeButton, setActiveButton] = useState("Room");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  return (
    <div>
      <div className="type-of-places">
        <h3 className="type-of-place-heading">Type of place</h3>
        <p className="type-of-place-para">
          Search rooms, entire homes and more. Nightly prices don't include fees
          or taxes.
        </p>
        <div className="type-of-place-btn-group">
          <div
            className={`type-of-place-btn type-of-place-btn1 ${
              activeButton === "Any type" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Any type")}
          >
            <h6 className="type-of-place-room">Any type</h6>
            <p className="type-of-place-price">₹15,132 avg.</p>
          </div>
          <div
            className={`type-of-place-btn ${
              activeButton === "Room" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Room")}
          >
            <h6 className="type-of-place-room">Room</h6>
            <p className="type-of-place-price">₹15,132 avg.</p>
          </div>
          <div
            className={`type-of-place-btn ${
              activeButton === "Entire home" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("Entire home")}
          >
            <h6 className="type-of-place-room">Entire home</h6>
            <p className="type-of-place-price">₹15,132 avg.</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TypesOfPlace;
