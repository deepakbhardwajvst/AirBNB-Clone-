import { useState } from "react";
import "./FilterBox.css";
import TypesOfPlace from "./TypesOfPlace";
import CloseIcon from "@mui/icons-material/Close";
import PriceRange from "./PriceRange";
import RoomsAndBads from "./RoomsAndBads";
import PropertyType from "./PropertyType";
import Amenities from "./Amenities";
import BookingOptions from "./BookingOptions";
import AccessibilityFeatures from "./AccessibilityFeatures";
const FilterBox = ({ isOpen, onClose }) => {
  return (
    <div className="filter-box-tab">
      <div className="filter-box-close">
        <CloseIcon className="filter-box-close-btn" onClick={onClose} />
      </div>
      <h5 className="filter-box-heading">Filters</h5>
      <hr />
      <div className="filter-box-items">
        <TypesOfPlace />
        <PriceRange />
        <RoomsAndBads />
        <PropertyType />
        <Amenities />
        <BookingOptions />
        <AccessibilityFeatures />
      </div>
    </div>
  );
};

export default FilterBox;
