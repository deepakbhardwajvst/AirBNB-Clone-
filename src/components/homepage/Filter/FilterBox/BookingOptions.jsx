import React from "react";
const BookingOption = [
  {
    category: "Instant Book",
    description: "Listings you can book without waiting for host approval",
  },
  {
    category: "Self check-in",
    description: "Easy access to the property once you arrive",
  },
];

const BookingOptions = () => {
  return (
    <div>
      <div className="BookingOptions">
        <h5 className="BookingOptions-heading">Booking options</h5>
        <div className="BookingOptions-items">
          {BookingOption.map((data, index) => {
            return (
              <div className="search-box-translation1" key={index}>
                <div
                  className="form-switch form-check BookingOptions-item"
                  id="form-id"
                >
                  <p className="search-box-translation1">{data.category}</p>
                  <p className="search-box-para">{data.description}</p>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BookingOptions;
