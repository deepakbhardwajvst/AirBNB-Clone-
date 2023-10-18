import React from "react";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import SocialIcon from "./SocialIcon";
const FooterLast = () => {
  return (
    <div className="copy">
      <div className="strt">
        <p className="foot1">© 2023 Airbnb, Inc. ·</p>
        <p className="foot">Privacy · </p>
        <p className="foot">Terms ·</p>
        <p className="foot">Sitemap ·</p>
        <p className="foot">Company details</p>
      </div>
      <div className="lst">
        <div className="end">
          <LanguageRoundedIcon />
        </div>
        <div className="end">English (IN)</div>
        <div className="end">₹ INR</div>
        <SocialIcon />
      </div>
    </div>
  );
};

export default FooterLast;
