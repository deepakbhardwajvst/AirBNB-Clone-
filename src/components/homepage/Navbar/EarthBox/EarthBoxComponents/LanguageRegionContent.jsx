import React from "react";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

const LanguageRegionContent = () => {
  const languages = [
    { language: "English", country: "United States" },
    { language: "Spanish", country: "Spain" },
    { language: "French", country: "France" },
    { language: "German", country: "Germany" },
    { language: "Chinese", country: "China" },
    { language: "Japanese", country: "Japan" },
    { language: "Russian", country: "Russia" },
    { language: "Arabic", country: "United Arab Emirates" },
    { language: "Italian", country: "Italy" },
    { language: "Portuguese", country: "Portugal" },
    { language: "Dutch", country: "Netherlands" },
    { language: "Swedish", country: "Sweden" },
    { language: "Korean", country: "South Korea" },
    { language: "Turkish", country: "Turkey" },
    { language: "Hindi", country: "India" },
    { language: "Greek", country: "Greece" },
    { language: "Polish", country: "Poland" },
    { language: "Thai", country: "Thailand" },
    { language: "Vietnamese", country: "Vietnam" },
    { language: "Italian", country: "Italy" },
    { language: "Portuguese", country: "Portugal" },
    { language: "Dutch", country: "Netherlands" },
    { language: "Swedish", country: "Sweden" },
    { language: "Korean", country: "South Korea" },
    { language: "Turkish", country: "Turkey" },
    { language: "Hindi", country: "India" },
    { language: "Greek", country: "Greece" },
    { language: "Polish", country: "Poland" },
    { language: "Thai", country: "Thailand" },
    { language: "Vietnamese", country: "Vietnam" },
  ];
  return (
    <div>
      <div id="search-box-translation-main">
        <div className="form-switch form-check search-box-div" id="form-id">
          <p className="search-box-translation">
            Translation
            <GTranslateOutlinedIcon />
          </p>
          <p className="search-box-para">
            Automatically translate descriptions and reviews to English.
          </p>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
        </div>
      </div>
      <div className="search-box-suggestion">
        <h5 className="search-box-suggestion-heading">
          Suggested languages and regions
        </h5>
        <div className="search-box-suggestion-items">
          <div className="search-box-suggestion-item">
            <p className="Search-box-suggestion-lang">English</p>
            <p className="Search-box-suggestion-lang o">United Kingdom</p>
          </div>
          <div className="search-box-suggestion-item">
            <p className="Search-box-suggestion-lang">English</p>
            <p className="Search-box-suggestion-lang o">United States </p>
          </div>
          <div className="search-box-suggestion-item">
            <p className="Search-box-suggestion-lang">हिन्दी</p>
            <p className="Search-box-suggestion-lang o">भारत</p>
          </div>
        </div>
      </div>
      <h5 className="search-box-suggestion-heading">
        Choose a language and region
      </h5>
      <div className="search-box-choose-language">
        {languages.map((data, index) => {
          return (
            <div key={index}>
              <div className="search-box-suggestion-items">
                <div className="search-box-suggestion-item">
                  <p className="Search-box-suggestion-lang">{data.language}</p>
                  <p className="Search-box-suggestion-lang o">{data.country}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageRegionContent;
