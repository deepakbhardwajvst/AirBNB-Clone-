import React from "react";
import "./CardsHead.css";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const CardsHead = () => {
  return (
    <div>
      <div className="crads-start">
        <div className="cards-head">
          <h3 className="cards-heading">
            Whispering Pines Cottages|Treehouse|Tandi
          </h3>
        </div>
        <div className="cards-head-details">
          <div className="cards-head-detail">
            <div className="cards-head-rating">
              <b>★ 4.91 </b>·{" "}
              <u>
                <span className="Cards-review-span">194 reviews</span>
              </u>
              {"  "}
              ·
              <MilitaryTechIcon fontSize="small" /> Superhost ·{"  "}{" "}
              <a href="http://" className="cards-head-link">
                Jibhi, Himachal Pradesh, India
              </a>
            </div>
            <div className="cards-head-s">
              <span className="cards-head-share">
                <IosShareIcon fontSize="small" />
                Share
              </span>
              <span className="cards-head-save">
                <FavoriteBorderIcon fontSize="small" />
                Save
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsHead;
