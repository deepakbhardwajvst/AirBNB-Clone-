import React from "react";
import PhotoOutlinedIcon from "@mui/icons-material/PhotoOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import AlarmOffOutlinedIcon from "@mui/icons-material/AlarmOffOutlined";
import TimerOffOutlinedIcon from "@mui/icons-material/TimerOffOutlined";
import PetsIcon from "@mui/icons-material/Pets";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
const offer = [
  { logo: <PhotoOutlinedIcon />, heading: "Mountain view" },
  { logo: <PhotoOutlinedIcon />, heading: "Valley view" },
  { logo: <RestaurantOutlinedIcon />, heading: "Kitchen" },
  { logo: <WifiIcon />, heading: "Wifi" },
  { logo: <TableRestaurantOutlinedIcon />, heading: "Dedicated workspace" },
  { logo: <AlarmOffOutlinedIcon />, heading: "Carbon monoxide alarm" },
  { logo: <TimerOffOutlinedIcon />, heading: "Smoke alarm" },
  { logo: <PetsIcon />, heading: "Pets allowed" },
];
const CardsOffer = () => {
  return (
    <div>
      <div className="cards-offers">
        <h5 className="cards-offer-heading">What this place offers</h5>
        <div className="cartds-offers-box">
          {offer.map((data, index) => {
            return (
              <div className="cards-offer-item" key={index}>
                <div className="cards-offer-logo">{data.logo}</div>
                <p className="cards-offer-headings">{data.heading}</p>
              </div>
            );
          })}
        </div>
        <button type="button" className="cards-offers-btn">
          Show all 57 amenities
        </button>
      </div>
      <hr />
    </div>
  );
};

export default CardsOffer;
