import React, { useState } from "react";
import "./FilterBox.css";

const RoomsAndBads = () => {
  const options = [
    {
      label: "Bedrooms",
      values: ["Any", "1", "2", "3", "4", "5", "6", "7", "8+"],
    },
    {
      label: "Beds",
      values: ["Any", "1", "2", "3", "4", "5", "6", "7", "8+"],
    },
    {
      label: "Bathrooms",
      values: ["Any", "1", "2", "3", "4", "5", "6", "7", "8+"],
    },
  ];
  const initialSelectedValues = {};
  options.forEach((option) => {
    initialSelectedValues[option.label] = "Any";
  });
  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  const handleButtonClick = (category, value) => {
    setSelectedValues({
      ...selectedValues,
      [category]: value,
    });
  };

  return (
    <div className="rooms-and-beds-container">
      <h5 className="rooms-and-bads-heading">Rooms and beds</h5>
      {options.map((option, index) => (
        <div key={index} className="option-container">
          <h3 className="option-label">{option.label}</h3>
          <div className="button-container">
            {option.values.map((value, valueIndex) => (
              <button
                key={valueIndex}
                className={`option-button ${
                  selectedValues[option.label] === value ? "selected" : ""
                }`}
                onClick={() => handleButtonClick(option.label, value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default RoomsAndBads;
