import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./HomeQuesSection.css";

const InfoData = [
  {
    heading: "Is my place right for Airbnb?",
    paragraph:
      "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay.",
  },
  {
    heading: "Do I have to host all the time?",
    paragraph:
      "Not at all – you control your calendar. You can host once a year, a few nights a month or more often.",
  },
  {
    heading: "How much should I interact with guests?",
    paragraph:
      "It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.",
  },
  {
    heading: "Any tips on being a great Airbnb Host?",
    paragraph:
      "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.",
  },
  {
    heading: "What are Airbnb's fees?",
    paragraph:
      "Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourism taxes automatically on your behalf.",
  },
];

const HomeQuesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <div className="ques">
        <div className="ques-container">
          <div className="ques-heading">
            <h3 className="ques-heading-text">Your questions, answered</h3>
          </div>
          <div className="ques-section2">
            {InfoData.map((info, index) => (
              <div
                key={index}
                className={`ques-place-info ${
                  expandedIndex === index ? "active" : ""
                }`}
              >
                <div
                  className="ques-toggle-button"
                  onClick={() => toggleExpansion(index)}
                >
                  <h5 className="ques-toggle-button-text">{info.heading}</h5>
                  <div className="">
                    {expandedIndex === index ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </div>
                </div>
                {expandedIndex === index && (
                  <div className="ques-additional-info">
                    <p>{info.paragraph}</p>
                  </div>
                )}
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeQuesSection;
