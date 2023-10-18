import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const SocialIcon = () => {
  return (
    <div className="Social">
      <FacebookIcon className="end" />
      <TwitterIcon className="tweet" />
      <InstagramIcon className="end" />
    </div>
  );
};

export default SocialIcon;
