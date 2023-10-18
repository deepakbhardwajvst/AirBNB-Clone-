import React, { useState } from "react";
import "./EarthBox.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LanguageRegionContent from "./EarthBoxComponents/LanguageRegionContent";
import CurrencyContent from "./EarthBoxComponents/CurrencyContent";

const EarthBox = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [languageAndRegionActive, setLanguageAndRegionActive] = useState(true);
  const [currencyActive, setCurrencyActive] = useState(false);

  const handleNavClick = (navItem) => {
    if (navItem === "languageAndRegion") {
      setLanguageAndRegionActive(!languageAndRegionActive);
      setCurrencyActive(false);
    } else if (navItem === "currency") {
      setCurrencyActive(!currencyActive);
      setLanguageAndRegionActive(false);
    }
  };

  return (
    <div className="EarthBox-overlay">
      <div className="EarthBox-content">
        <div className="search-box-items">
          <div className="search-box-close">
            <CloseOutlinedIcon className="close-btn" onClick={onClose} />
          </div>
          <div>
            <div className="search-box-nav">
              <p
                className={`search-box-language-and-region ${
                  languageAndRegionActive ? "search-box-active" : ""
                }`}
                onClick={() => handleNavClick("languageAndRegion")}
              >
                Language and region
              </p>
              <p
                className={`search-box-currency ${
                  currencyActive ? "search-box-active" : ""
                }`}
                onClick={() => handleNavClick("currency")}
              >
                Currency
              </p>
            </div>
          </div>
          <hr className="hr" />
          {languageAndRegionActive && <LanguageRegionContent />}
          {currencyActive && <CurrencyContent />}
        </div>
      </div>
    </div>
  );
};

export default EarthBox;
