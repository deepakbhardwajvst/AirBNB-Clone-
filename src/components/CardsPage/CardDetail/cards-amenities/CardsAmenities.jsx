import React from "react";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
const CardsAmenities = () => {
  return (
    <div>
      <div className="cards-amenities">
        <div className="card-amenitie">
          <div className="card-amenitie-box1">
            <TableRestaurantOutlinedIcon />
          </div>
          <div className="card-amenitie-box">
            <h6 className="card-amenitie-heading">Dedicated workspace</h6>
            <p className="card-amenitie-para">
              A common area with wifi that’s well suited for working.
            </p>
          </div>
        </div>
        <div className="card-amenitie">
          <div className="card-amenitie-box1">
            <PersonOutlineOutlinedIcon />
          </div>
          <div className="card-amenitie-box">
            <h6 className="card-amenitie-heading">Daleep is a Superhost</h6>
            <p className="card-amenitie-para">
              Superhosts are experienced, highly rated Hosts.
            </p>
          </div>
        </div>
        <div className="card-amenitie">
          <div className="card-amenitie-box1">
            <EditCalendarOutlinedIcon />
          </div>
          <div className="card-amenitie-box">
            <h6 className="card-amenitie-heading">
              Free cancellation before 26 Nov.
            </h6>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CardsAmenities;
