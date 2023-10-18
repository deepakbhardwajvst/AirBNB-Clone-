import { useState } from "react";
const accessibilityFeature = [
  {
    category: "Guest entrance and parking",
    items: [
      "Step-free guest entrance",
      "Guest entrance wider than 32 inches (81 centimeters)",
      "Accessible parking spot",
      "Step-free path to the guest entrance",
    ],
  },
  {
    category: "Bedroom",
    items: [
      "Step-free bedroom access",
      "Bedroom entrance wider than 32 inches (81 centimeters)",
    ],
  },
  {
    category: "Bathroom",
    items: [
      "Step-free bathroom access",
      "Bathroom entrance wider than 32 inches (81 centimeters)",
      "Shower grab bar",
      "Toilet grab bar",
      "Step-free shower",
      "Shower or bath chair",
    ],
  },
  {
    category: "Adaptive equipment",
    items: ["Ceiling or mobile hoist"],
  },
];

const AccessibilityFeatures = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="amenities">
        <div className="amenities-heading">
          <h5 className="amenities-head">Accessibility features</h5>
        </div>
        {accessibilityFeature.map((data, index) => {
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
                          <h6 className="amenities-btn-h">{item}</h6>
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

export default AccessibilityFeatures;
