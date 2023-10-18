import React from "react";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import "./CardsReviews.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const CardsReviews = () => {
  return (
    <div className="">
      <div className="review">
        <h5 className="review-head">No reviews(yet)</h5>
        <p className="review-para">
          <StarBorderOutlinedIcon /> This host has 11 reviews for other places
          to stay. <u className="review-para-u">Show other reviews</u>
        </p>
      </div>
      <hr />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13648.861214093957!2d77.6046444!3d31.2147639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905ed539c98566d%3A0x4f5d5af5f01b24b8!2sNirvana%20homes%20Rarta!5e0!3m2!1sen!2sin!4v1697145586472!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <u>
        Show more <ArrowForwardIosOutlinedIcon fontSize="small" />
      </u>
      <hr />
    </div>
  );
};

export default CardsReviews;
