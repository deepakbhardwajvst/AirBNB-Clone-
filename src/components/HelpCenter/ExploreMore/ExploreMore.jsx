import React from "react";
import "./ExploreMore.css";
import image1 from "./img/exploremore1.png";
import image2 from "./img/exploremore2.png";

const ExploreMore = () => {
  return (
    <div>
      <div className="exploremore-head">
        <div className="help-centre-container">
          <h2 className="exploremore-heading">Explore More</h2>
          <div className="exploremore-boxs">
            <div className="exploremore-box">
              <img src={image1} alt="" className="exploremore-img" />
              <div className="exploremore-bg">
                <h6 className="exploremore-img-heading">
                  Our community policies
                </h6>
                <p className="exploremore-img-para">
                  How we build a foundation of trust.
                </p>
              </div>
            </div>
            <div className="exploremore-box">
              <img src={image2} alt="" className="exploremore-img" />
              <div className="exploremore-bg">
                <h6 className="exploremore-img-heading">
                  Safety tips and guidelines
                </h6>
                <p className="exploremore-img-para">
                  Resources to help travellers.
                </p>
              </div>
            </div>
            <div className="exploremore-box">
              <h3 className="exploremore-box-heading">Need to get in touch?</h3>
              <p className="exploremore-box-para">
                We’ll start with some questions and get you to the right place.
              </p>
              <button className="exploremore-box-btn">Contact us</button>
              <p className="exploremore-feedback">
                You can also <u>give us feedback.</u>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
