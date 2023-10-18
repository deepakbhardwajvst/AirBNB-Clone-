import React from "react";
import "./CardsCity.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const CardsCity = () => {
  return (
    <div>
      <div className="cardscity">
        <div className="cards-container">
          Airbnb <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} />
          India
          <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} /> Himachal Pradesh
          <ArrowForwardIosOutlinedIcon sx={{ fontSize: 14 }} /> Shimla Division
        </div>
      </div>
    </div>
  );
};

export default CardsCity;
