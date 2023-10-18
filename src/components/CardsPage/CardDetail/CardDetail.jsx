import React, { useState } from "react";
import "./CardDetail.css";
import CardsOffer from "./CardsOffers/CardsOffer";
import CardsAmenities from "./cards-amenities/CardsAmenities";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CardsCalendar from "./CardsCalendar/CardsCalendar";
import CardsBooking from "../CardsBooking/CardsBooking";
const img = [
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=240",
    heading: "1 queen bed",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/50af80d8-e7c3-43f7-86ce-23aba0d40cb6.jpeg?im_w=240",
    heading: "1 double bed, 1 single bed",
  },
];

const CardDetail = () => {
  return (
    <div className="Cards-Details">
      <div className="cards-card-detail">
        <h5 className="cards-host">Entire cottage hosted by Daleep</h5>
        <p className="cards-guests">
          4 guests * 2 bedrooms * 3 beds * 1 bathroom
        </p>
        <hr />
        <CardsAmenities />
        <div className="cards-discription">
          <p className="cards-discription-para">
            ★ You’ll be taken care of by one of the most successful Airbnb hosts
            in the country.
          </p>
          <p className="cards-discription-para">
            ★ The treehouse is nestled in the Himalayan subtropical pine
            forests. It is made keeping in mind to provide a comfortable and
            memorable stay to travelers seeking a break from the hustle of city
            life. The house is cozy both in winter and summer. It has a
            360-degree view of the greater Himalayas....
          </p>
          <button type="button" className="cards-discription-btn">
            Show more <KeyboardArrowRightOutlinedIcon />
          </button>
        </div>
        <hr />
        <div className="cards-sleep">
          <h5 className="cards-sleep-heading">Where you'll sleep</h5>
          <div className="cards-sleep-images-box">
            {img.map((data, index) => {
              return (
                <div className="cards-sleep-images" key={index}>
                  <img
                    src={data.image}
                    alt={`Bedroom ${index + 1}`}
                    className="cards-sleep-img"
                  />
                  <p className="cards-sleep-bed">Bedroom{index + 1}</p>
                  <p className="cards-sleep-bedsize">{data.heading}</p>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <CardsOffer />
        <CardsCalendar />
      </div>
      <CardsBooking />
    </div>
  );
};

export default CardDetail;
