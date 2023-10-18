import React, { useState } from "react";
import "./HelpTravelInfo.css";
import LoginSuggetion from "./LoginSuggetion/LoginSuggetion";
import { HelpData } from "../HelpData";

const HelpTravelInfo = () => {
  const [selectedSection, setSelectedSection] = useState(0);

  const handleSectionClick = (index) => {
    setSelectedSection(index);
  };

  return (
    <div className="help-travel-app">
      <nav className="help-travel-nav">
        <ul className="help-travel-list-items">
          {["Guest", "Host", "Experience Host", "Travel admin"].map(
            (item, index) => (
              <li
                key={index}
                className={`help-travel-list-item help-travel-list ${
                  selectedSection === index ? "selected1" : ""
                }`}
                onClick={() => handleSectionClick(index)}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav>
      <LoginSuggetion />
      {selectedSection !== null && (
        <div className="travel">
          <div className="travel-box">
            <h4 className="travel-heading">
              {HelpData[selectedSection].guests[0].headings}
            </h4>
            <div className="travel-topics">
              <h6>Browse all topics {"\u003e"}</h6>
            </div>
          </div>
          <div className="travel-img-div">
            {HelpData[selectedSection].guests.map((guest, guestIndex) => (
              <div key={guestIndex} className="travel-img-div">
                {guest.HeadingAndImg.map((item, i) => (
                  <div key={i} className="travel-img-box">
                    <img src={item.img} alt="" className="travel-img" />
                    <h6 className="travel-img-heading">{item.imgheading}</h6>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <h4 className="Top-articles">Top articles</h4>
          <div className="article-section">
            {HelpData[selectedSection].guests[0].article.map(
              (article, articleIndex) => (
                <div key={articleIndex} className="article-box">
                  <h6 className="article-heading">{article.aheading}</h6>
                  <p className="article-para">{article.apara}...</p>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpTravelInfo;
