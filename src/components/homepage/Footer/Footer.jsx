import React from "react";
import "./Footer.css";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import FooterLast from "./FooterLast";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <Footer1 />
        <Footer2 />
        <Footer3 />
      </div>
      <FooterLast />
    </div>
  );
};

export default Footer;
