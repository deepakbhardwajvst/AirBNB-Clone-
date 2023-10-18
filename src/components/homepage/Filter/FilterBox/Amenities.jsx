import { useState } from "react";
const Amenitie = [
  {
    category: "Essentials",
    items: [
      "Wifi",
      "Kitchen",
      "Washing machine",
      "Dryer",
      "Air conditioning",
      "Heating",
      "Dedicated workspace",
      "TV",
      "Hair dryer",
      "Iron",
    ],
  },
  {
    category: "Features",
    items: [
      "Pool",
      "Hot tub",
      "Free parking",
      "EV charger",
      "Cot",
      "Gym",
      "BBQ grill",
      "Breakfast",
      "Indoor fireplace",
      "Smoking allowed",
    ],
  },
  {
    category: "Location",
    items: ["Beachfront", "Waterfront"],
  },
  {
    category: "Safety",
    items: ["Smoke alarm", "Carbon monoxide alarm"],
  },
];

const Amenities = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="amenities">
        <div className="amenities-heading">
          <h5 className="amenities-head">Amenities</h5>
        </div>
        {Amenitie.map((data, index) => {
          if (index < 1 || showAll) {
            return (
              <div key={index}>
                <div className="amenities-items-heading">
                  <h6 className="amenities-item-head">{data.category}</h6>
                </div>
                <div className="amenities-items">
                  <div className="amenities-item">
                    {data.items.map((item, itemIndex) => {
                      return (
                        <button className="amenities-btn" key={itemIndex}>
                          <input type="checkbox" name="" id="amenities-input" />
                          <h5 className="amenities-btn-h">{item}</h5>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {!showAll && (
        <button className="amenities-show-more-btn" onClick={toggleShowAll}>
          Show More
        </button>
      )}
      <hr />
    </div>
  );
};

export default Amenities;
