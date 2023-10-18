import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const CardsBooking = () => {
  return (
    <div className="cards-booking-container">
      <div className="booking-box">
        <h5 className="booking-price">$12,000</h5>
        <p className="booking-night">night</p>
      </div>
      <div className="booking-date-guest">
        <div className="booking-checkin-out">
          <div className="booking-checkin">
            <p className="booking-label">CHECK-IN</p>
            <p className="booking-placeholder">Add date</p>
          </div>
          <div className="booking-checkin1">
            <p className="booking-label">CHECKOUT</p>
            <p className="booking-placeholder">Add date</p>
          </div>
        </div>
        <div className="booking-guest">
          <div className="">
            <p className="booking-label">GUESTS</p>
            <p className="booking-placeholder">1 guest</p>
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
      <button className="booking-check-availability">Check availability</button>
    </div>
  );
};

export default CardsBooking;
