import React, { useRef, useState } from "react";
import { links } from "../../../json-file-js/CategoryLogo.js";
import "./Filter.css";
import FilterBtns from "./FilterBtns.jsx";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Filter = () => {
  const boxRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (index) => {
    setSelectedItem(index);
  };
  const prevPage = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
      console.log(width);
    }
  };

  const nextPage = () => {
    if (boxRef.current) {
      let width = boxRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
      console.log(width);
    }
  };

  return (
    <div className="filt">
      <div className="filter">
        {/* Left arrow button */}
        <button className="prev-btn" onClick={prevPage}>
          <ArrowBackIosIcon className="arrow" />
        </button>
        <div className="filter-box-carousel" ref={boxRef}>
          {links.map((item, index) => (
            <div
              key={index}
              className={`filter-box ${selectedItem === index ? "select" : ""}`}
              onClick={() => handleClick(index)}
            >
              <img src={item.imgSrc} alt={item.label} className="filter-img" />
              <p className={`filter-text`}>{item.label}</p>
            </div>
          ))}
        </div>
        {/* Right arrow button */}
        <button className="next-btn" onClick={nextPage}>
          <ArrowForwardIosIcon className="arrow" />
        </button>
      </div>
      <FilterBtns />
    </div>
  );
};

export default Filter;
