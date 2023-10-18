import React from "react";
import "./HomeMap.css";
const HomeMap = () => {
  return (
    <div>
      <section className="ayh-map-section">
        <div className="ayh-map-heading">
          <h1 className="ayh-map-Airbnb-it">Airbnb it.</h1>
          <h1 className="ayh-map-para">You could earn</h1>
          <h1 className="ayh-map-price">₹4,329</h1>
          <h6 className="ayh-map-price-estimate">
            <u id="ayh-map-price-estimate-u">1 night</u> at an estimated ₹4,329
            a night
          </h6>
          <p className="ayh-map-learn-calculate">
            <u>Learn how we estimate your earnings</u>
          </p>
          <div className="ayh-map-choose-place"></div>
        </div>
        <div className="ayh-map-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45387.88021778071!2d77.02030205216111!3d28.51223058993139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d195bcc52aeb7%3A0xbed8c84dc6015c84!2sAirbnb%20India!5e0!3m2!1sen!2sin!4v1696624900836!5m2!1sen!2sin"
            width="200%"
            height="550"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="ayh-map-window"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
import "./HomeMap.css";
export default HomeMap;
