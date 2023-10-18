import React from "react";
import "./HomeAskQues.css";
import img from "../img/AirbnbYourHomeThirdImg.png";
const HomeAskQues = () => {
  return (
    <section className="askques">
      <div className="askques-container">
        <div className="askques-img">
          <img src={img} alt="Ask Question" className="askques-image" />
        </div>
        <div className="askques-sec">
          <div className="askques-section">
            <h1 className="askques-heading">Still have questions?</h1>
            <p className="askques-para">
              Get answers from an experienced Superhost near you.
            </p>
            <button className="askques-button aircover-button">
              Match with a Superhost
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAskQues;
