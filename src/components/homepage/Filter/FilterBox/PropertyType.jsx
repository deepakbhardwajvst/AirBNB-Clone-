import React, { useState } from "react";
import HouseImage from "./img/house.jpg";
import FlatImage from "./img/flat.jpg";
import GuestHouseImage from "./img/guest.jpg";
import HotelImage from "./img/hotel.jpg";

const PropertyType = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const getItemClassName = (item) => {
    return `property-type-item ${
      selectedItems.includes(item) ? "selected" : ""
    }`;
  };

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="property-type">
      <h5 className="property-type-heading">Property type</h5>
      <div className="property-type-items">
        <div
          className={getItemClassName("House")}
          onClick={() => handleItemClick("House")}
        >
          <img src={HouseImage} className="property-type-img" alt="House" />
          <h6 className="property-type-room">House</h6>
        </div>
        <div
          className={getItemClassName("Flat")}
          onClick={() => handleItemClick("Flat")}
        >
          <img src={FlatImage} className="property-type-img" alt="Flat" />
          <h6 className="property-type-room">Flat</h6>
        </div>
        <div
          className={getItemClassName("Guest House")}
          onClick={() => handleItemClick("Guest House")}
        >
          <img
            src={GuestHouseImage}
            className="property-type-img"
            alt="Guest House"
          />
          <h6 className="property-type-room">Guest House</h6>
        </div>
        <div
          className={getItemClassName("Hotel")}
          onClick={() => handleItemClick("Hotel")}
        >
          <img src={HotelImage} className="property-type-img" alt="Hotel" />
          <h6 className="property-type-room">Hotel</h6>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PropertyType;
