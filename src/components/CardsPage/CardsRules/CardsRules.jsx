import React from "react";
import "./CardsRules.css";

const CardsRules = () => {
  return (
    <div>
      <h6 className="rules-heading">Things to know</h6>
      <div className="rules-box">
        <div className="rules-boxs">
          <p className="rules-head">House rules</p>
          <p className="rules-para">Flexible check-in</p>
          <p className="rules-para">4 guests maximum</p>
          <p className="rules-para">Pets allowed</p>
          <p className="rules-u">
            <u>Shom more</u>
          </p>
        </div>
        <div className="rules-boxs">
          <p className="rules-head">Safety & property</p>
          <p className="rules-para">Carbon monoxide alarm not reported</p>
          <p className="rules-para">Smoke alarm not reported</p>
          <p className="rules-u">
            <u>Shom more</u>
          </p>
        </div>
        <div className="rules-boxs">
          <p className="rules-head">Cancellation policy</p>
          <p className="rules-para">
            Add your trip dates to get the cancellation details for this stay.
          </p>
          <p className="rules-u">
            <u>Shom more</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardsRules;
