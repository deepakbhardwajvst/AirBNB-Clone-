import React from "react";
const data = [
  {
    location: "Canmore",
    service: "Chalet rentals",
  },
  {
    location: "Benalmádena",
    service: "Flat rentals",
  },
  {
    location: "Marbella",
    service: "Beach house rentals",
  },
  {
    location: "Mijas",
    service: "House rentals",
  },
  {
    location: "Prescott",
    service: "Cottage rentals",
  },
  {
    location: "Scottsdale",
    service: "House rentals",
  },
  {
    location: "Tucson",
    service: "Rentals with pools",
  },
  {
    location: "Jasper",
    service: "Cabin rentals",
  },
  {
    location: "Mountain View",
    service: "Cabin rentals",
  },
  {
    location: "Devonport",
    service: "Holiday rentals",
  },
  {
    location: "Mallacoota",
    service: "Beach house rentals",
  },
  {
    location: "Ibiza",
    service: "Holiday rentals",
  },

  {
    location: "Santa Barbara",
    service: "Holiday rentals",
  },
  {
    location: "Sonoma",
    service: "Beach house rentals",
  },
  {
    location: "La Serena",
    service: "Beachfront rentals",
  },
  {
    location: "Dubai",
    service: "Villa rentals",
  },
  {
    location: "Birmingham",
    service: "House rentals",
  },
  {
    location: "Brighton",
    service: "Beach apartment rentals",
  },
];

const Popular = () => {
  const [showLocations, setShowLocations] = useState(false);

  const toggleLocations = () => {
    setShowLocations(!showLocations);
  };

  return (
    <div>
      <button onClick={toggleLocations}>Popular</button>
      {showLocations && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item.location} - {item.service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Popular;
