import React, { useState } from "react";
import "./DetailedMenu.css";

const DetailedMenu = () => {
  const categories = [
    "Popular",
    "Arts & culture",
    "Outdoors",
    "Mountains",
    "Beach",
    "Unique stays",
    "Categories",
    "Things to do",
  ];
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
  const data2 = [
    {
      location: "Phoenix",
      service: "Flat rentals",
    },
    {
      location: "Hot Springs",
      service: "House rentals",
    },
    {
      location: "Los Angeles",
      service: "Beachfront rentals",
    },
    {
      location: "San Diego",
      service: "House rentals",
    },
    {
      location: "San Francisco",
      service: "Holiday rentals",
    },
    {
      location: "Barcelona",
      service: "Holiday rentals",
    },
    {
      location: "Prague",
      service: "Holiday rentals",
    },
    {
      location: "Washington",
      service: "Holiday rentals",
    },
    {
      location: "Keswick",
      service: "House rentals",
    },
    {
      location: "London",
      service: "House rentals",
    },
    {
      location: "Scarborough",
      service: "Holiday rentals",
    },
    {
      location: "Sherwood Forest",
      service: "Holiday rentals",
    },
    {
      location: "York",
      service: "House rentals",
    },
    {
      location: "Paris",
      service: "House rentals",
    },
    {
      location: "Rhodes",
      service: "Flat rentals",
    },
    {
      location: "Nashville",
      service: "Holiday rentals",
    },
    {
      location: "Dublin",
      service: "Cottage rentals",
    },
    {
      location: "Florence",
      service: "Villa rentals",
    },
    {
      location: "Rome",
      service: "Apartment rentals",
    },
    {
      location: "Lisbon",
      service: "Flat rentals",
    },
    {
      location: "Grand Isle",
      service: "Pet-friendly rentals",
    },
    {
      location: "New Orleans",
      service: "Beach house rentals",
    },
    {
      location: "Martha's Vineyard",
      service: "Holiday rentals",
    },
    {
      location: "South Haven",
      service: "Rentals with pools",
    },
    {
      location: "Duluth",
      service: "Cabin rentals",
    },
    {
      location: "Amsterdam",
      service: "Beach house rentals",
    },
    {
      location: "New York",
      service: "Holiday rentals",
    },
    {
      location: "Nice",
      service: "Beachfront rentals",
    },
    {
      location: "Inverness",
      service: "Holiday rentals",
    },
    {
      location: "Málaga",
      service: "House rentals",
    },
    {
      location: "Valencia",
      service: "Beachfront rentals",
    },
    {
      location: "Split",
      service: "Villa rentals",
    },
    {
      location: "Nashville",
      service: "Pet-friendly rentals",
    },
    {
      location: "Austin",
      service: "Cottage rentals",
    },
    {
      location: "Houston",
      service: "Holiday rentals",
    },
    {
      location: "Dartmouth",
      service: "Cottage rentals",
    },
    {
      location: "Edinburgh",
      service: "Holiday rentals",
    },
    {
      location: "Liverpool",
      service: "Flat rentals",
    },
    {
      location: "St Ives",
      service: "Apartment rentals",
    },
    {
      location: "Lake Powell",
      service: "Holiday rentals",
    },
    {
      location: "Lake Anna",
      service: "Lakehouse rentals",
    },
    {
      location: "Leavenworth",
      service: "Holiday rentals",
    },
    {
      location: "Seattle",
      service: "Holiday rentals",
    },
  ];
  const data3 = [
    {
      location: "Lake Martin",
      service: "Lakehouse rentals",
    },
    {
      location: "Banff",
      service: "Chalet rentals",
    },
    {
      location: "Nerja",
      service: "Flat rentals",
    },
    {
      location: "Greer",
      service: "Holiday rentals",
    },
    {
      location: "Lake Havasu City",
      service: "House rentals",
    },
    {
      location: "Lake Powell",
      service: "Holiday rentals",
    },
    {
      location: "North Rim",
      service: "Holiday rentals",
    },
    {
      location: "Payson",
      service: "Holiday rentals",
    },
    {
      location: "Pinetop-Lakeside",
      service: "Holiday rentals",
    },
    {
      location: "Red Rock",
      service: "Cabin rentals",
    },
    {
      location: "Dinner Plain",
      service: "Pet-friendly rentals",
    },
    {
      location: "Streaky Bay",
      service: "Holiday rentals",
    },
    {
      location: "Emerald Lake",
      service: "Holiday rentals",
    },
    {
      location: "Vancouver Island",
      service: "Apartment rentals",
    },
    {
      location: "Victoria",
      service: "Villa rentals",
    },
    {
      location: "Idyllwild-Pine Cove",
      service: "House rentals",
    },
    {
      location: "Mammoth Lakes",
      service: "Holiday rentals",
    },
    {
      location: "Palm Desert",
      service: "Pet-friendly rentals",
    },
    {
      location: "Shaver Lake",
      service: "Holiday rentals",
    },
    {
      location: "South Lake Tahoe",
      service: "Holiday rentals",
    },
    {
      location: "Cultus Lake",
      service: "Cottage rentals",
    },
    {
      location: "Georgian Bay",
      service: "Holiday rentals",
    },
    {
      location: "Manitoulin Island",
      service: "Holiday rentals",
    },
    {
      location: "Ottawa River",
      service: "Holiday rentals",
    },
    {
      location: "The Blue Mountains",
      service: "Holiday rentals",
    },
    {
      location: "West Kelowna",
      service: "Holiday rentals",
    },
    {
      location: "Gran Canaria",
      service: "Cabin rentals",
    },
    {
      location: "Lanzarote",
      service: "Rentals with pools",
    },
    {
      location: "Castle Hill",
      service: "Holiday rentals",
    },
    {
      location: "Aspen",
      service: "Holiday rentals",
    },
    {
      location: "Colorado Springs",
      service: "Holiday rentals",
    },
    {
      location: "Denver",
      service: "Holiday rentals",
    },
    {
      location: "Durango",
      service: "Apartment rentals",
    },
    {
      location: "Estes Park",
      service: "Apartment rentals",
    },
    {
      location: "Grand Lake",
      service: "Holiday rentals",
    },
    {
      location: "Keystone",
      service: "Apartment rentals",
    },
    {
      location: "Vail",
      service: "Holiday rentals",
    },
    {
      location: "Winter Park",
      service: "Holiday rentals",
    },
    {
      location: "Salcombe",
      service: "Flat rentals",
    },
    {
      location: "Swanage",
      service: "Cottage rentals",
    },
    {
      location: "Cape Coral",
      service: "Holiday rentals",
    },
    {
      location: "Blue Ridge",
      service: "Holiday rentals",
    },
    {
      location: "Jekyll Island",
      service: "Holiday rentals",
    },
    {
      location: "Lake Lanier",
      service: "Cabin rentals",
    },
    {
      location: "Corfu",
      service: "Holiday rentals",
    },
    {
      location: "McCall",
      service: "Holiday rentals",
    },
    {
      location: "Clear Lake",
      service: "Apartment rentals",
    },
    {
      location: "Lough Eske",
      service: "Holiday rentals",
    },
    {
      location: "Lake Cumberland",
      service: "Lakehouse rentals",
    },
    {
      location: "Portland",
      service: "Flat rentals",
    },
    {
      location: "South Portland",
      service: "Holiday rentals",
    },
    {
      location: "Deep Creek Lake",
      service: "Flat rentals",
    },
    {
      location: "Lake Michigan Beach",
      service: "Lakehouse rentals",
    },
  ];
  const data4 = [
    {
      location: "Mentone",
      service: "Cabin rentals",
    },
    {
      location: "Sedona",
      service: "Holiday rentals",
    },
    {
      location: "Helen",
      service: "Chalet rentals",
    },
    {
      location: "Pine Mountain",
      service: "Holiday rentals",
    },
    {
      location: "Stone Mountain",
      service: "Cabin rentals",
    },
    {
      location: "Island Park",
      service: "Cabin rentals",
    },
    {
      location: "Blue Mountains",
      service: "Holiday rentals",
    },
    {
      location: "Asheville",
      service: "Flat rentals",
    },
    {
      location: "Blowing Rock",
      service: "Holiday rentals",
    },
    {
      location: "Boone",
      service: "Holiday rentals",
    },
    {
      location: "Hochatown",
      service: "Holiday rentals",
    },
    {
      location: "Pigeon Forge",
      service: "Holiday rentals",
    },
    {
      location: "Townsend",
      service: "Holiday rentals",
    },
    {
      location: "Wears Valley",
      service: "Holiday rentals",
    },
    {
      location: "Cabins",
      service: "Holiday rentals",
    },
  ];
  const data5 = [
    {
      location: "Gulf Shores",
      service: "Holiday rentals",
    },
    {
      location: "Bruny Island",
      service: "Holiday rentals",
    },
    {
      location: "Crescent Head",
      service: "Holiday rentals",
    },
    {
      location: "Gerringong",
      service: "Holiday rentals",
    },
    {
      location: "Hamilton Island",
      service: "House rentals",
    },
    {
      location: "Lancelin",
      service: "Holiday rentals",
    },
    {
      location: "Melbourne Beach",
      service: "Cottage rentals",
    },
    {
      location: "Moonta Bay",
      service: "Holiday rentals",
    },
    {
      location: "Ocean Grove",
      service: "Cabin rentals",
    },
    {
      location: "Majorca",
      service: "Bungalow rentals",
    },
    {
      location: "Big Sur",
      service: "Beach house rentals",
    },
    {
      location: "Bodega Bay",
      service: "Holiday rentals",
    },
    {
      location: "Cambria",
      service: "Beachfront rentals",
    },
    {
      location: "Cayucos",
      service: "Holiday rentals",
    },
    {
      location: "Huntington Beach",
      service: "Flat rentals",
    },
    {
      location: "la Jolla Shores Beach",
      service: "Holiday rentals",
    },
    {
      location: "Laguna Beach",
      service: "Villa rentals",
    },
    {
      location: "Long Beach",
      service: "Apartment rentals",
    },
    {
      location: "Malibu",
      service: "House rentals",
    },
    {
      location: "Mission Beach",
      service: "Beachfront rentals",
    },
    {
      location: "Newport Beach",
      service: "Bungalow rentals",
    },
    {
      location: "Oceanside",
      service: "Cottage rentals",
    },
    {
      location: "Palm Springs",
      service: "Cabin rentals",
    },
    {
      location: "Pismo Beach",
      service: "Cabin rentals",
    },
    {
      location: "Santa Cruz",
      service: "Beachfront rentals",
    },
    {
      location: "Santa Monica",
      service: "Villa rentals",
    },
    {
      location: "Sea Ranch",
      service: "Apartment rentals",
    },
    {
      location: "Playa Blanca",
      service: "Holiday rentals",
    },
    {
      location: "Fuerteventura",
      service: "Holiday rentals",
    },
    {
      location: "Puerto del Carmen",
      service: "Villa rentals",
    },
    {
      location: "Tenerife",
      service: "Villa rentals",
    },
    {
      location: "Ayia Napa",
      service: "Holiday rentals",
    },
    {
      location: "Bethany Beach",
      service: "Rentals with pools",
    },
    {
      location: "Dewey Beach",
      service: "House rentals",
    },
  ];
  const data6 = [
    {
      location: "Mentone",
      service: "Cabin rentals",
    },
    {
      location: "Sedona",
      service: "Holiday rentals",
    },
    {
      location: "Helen",
      service: "Chalet rentals",
    },
    {
      location: "Pine Mountain",
      service: "Holiday rentals",
    },
    {
      location: "Stone Mountain",
      service: "Cabin rentals",
    },
    {
      location: "Island Park",
      service: "Cabin rentals",
    },
    {
      location: "Blue Mountains",
      service: "Holiday rentals",
    },
    {
      location: "Asheville",
      service: "Flat rentals",
    },
    {
      location: "Blowing Rock",
      service: "Holiday rentals",
    },
    {
      location: "Boone",
      service: "Holiday rentals",
    },
    {
      location: "Hochatown",
      service: "Holiday rentals",
    },
    {
      location: "Pigeon Forge",
      service: "Holiday rentals",
    },
    {
      location: "Townsend",
      service: "Holiday rentals",
    },
    {
      location: "Wears Valley",
      service: "Holiday rentals",
    },
    {
      location: "Cabins",
      service: "Holiday rentals",
    },
    {
      location: "Dauphin Island",
      service: "Flat rentals",
    },
    {
      location: "Fort Morgan",
      service: "Holiday rentals",
    },
    {
      location: "Gulf Shores",
      service: "Holiday rentals",
    },
    {
      location: "Bruny Island",
      service: "Holiday rentals",
    },
    {
      location: "Crescent Head",
      service: "Holiday rentals",
    },
    {
      location: "Gerringong",
      service: "Holiday rentals",
    },
    {
      location: "Hamilton Island",
      service: "House rentals",
    },
    {
      location: "Lancelin",
      service: "Holiday rentals",
    },
    {
      location: "Melbourne Beach",
      service: "Cottage rentals",
    },
    {
      location: "Moonta Bay",
      service: "Holiday rentals",
    },
    {
      location: "Ocean Grove",
      service: "Cabin rentals",
    },
    {
      location: "Majorca",
      service: "Bungalow rentals",
    },
    {
      location: "Big Sur",
      service: "Beach house rentals",
    },
    {
      location: "Bodega Bay",
      service: "Holiday rentals",
    },
    {
      location: "Cambria",
      service: "Beachfront rentals",
    },
    {
      location: "Cayucos",
      service: "Holiday rentals",
    },
    {
      location: "Huntington Beach",
      service: "Flat rentals",
    },
    {
      location: "la Jolla Shores Beach",
      service: "Holiday rentals",
    },
  ];
  const data7 = [
    {
      name: "Amazing Pools",
    },
    {
      name: "Arctic",
    },
    {
      name: "Camping",
    },
    {
      name: "Camper Vans",
    },
    {
      name: "Castles",
    },
    {
      name: "Containers",
    },
    {
      name: "Countryside",
    },
    {
      name: "Design",
    },
    {
      name: "Earth Homes",
    },
    {
      name: "Farms",
    },
    {
      name: "National Parks",
    },
    {
      name: "Vineyards",
    },
    {
      name: "OMG!",
    },
    {
      name: "Tiny Homes",
    },
    {
      name: "Towers",
    },
    {
      name: "Windmills",
    },
  ];
  const data8 = [
    {
      location: "London",
      service: "England",
    },
    {
      location: "Paris",
      service: "Île-de-France",
    },
    {
      location: "New York",
      service: "New York",
    },
    {
      location: "Barcelona",
      service: "Catalonia",
    },
    {
      location: "İstanbul",
      service: "İstanbul",
    },
    {
      location: "Bali",
      service: "Indonesia",
    },
    {
      location: "Amsterdam",
      service: "North Holland",
    },
    {
      location: "Miami",
      service: "Florida",
    },
    {
      location: "Madrid",
      service: "Community of Madrid",
    },
    {
      location: "Los Angeles",
      service: "California",
    },
    {
      location: "Rome",
      service: "Lazio",
    },
    {
      location: "Lisbon",
      service: "Lisbon",
    },
    {
      location: "Tokyo",
      service: "Tokyo",
    },
    {
      location: "Vienna",
      service: "Vienna",
    },
    {
      location: "Athens",
      service: "Greece",
    },
    {
      location: "Prague",
      service: "Czechia",
    },
    {
      location: "Orlando",
      service: "Florida",
    },
    {
      location: "Cancún",
      service: "Quintana Roo",
    },
    {
      location: "Santorini",
      service: "Greece",
    },
    {
      location: "Mexico City",
      service: "Mexico City",
    },
    {
      location: "Venice",
      service: "Veneto",
    },
    {
      location: "Playa del Carmen",
      service: "Quintana Roo",
    },
    {
      location: "San Francisco",
      service: "California",
    },
    {
      location: "Las Vegas",
      service: "Nevada",
    },
    {
      location: "Boston",
      service: "Massachusetts",
    },
    {
      location: "San Diego",
      service: "California",
    },
    {
      location: "Chicago",
      service: "Illinois",
    },
    {
      location: "Seattle",
      service: "Washington",
    },
    {
      location: "Washington",
      service: "District of Columbia",
    },
    {
      location: "Atlanta",
      service: "Georgia",
    },
    {
      location: "Austin",
      service: "Texas",
    },
    {
      location: "Maui",
      service: "Hawaii",
    },
    {
      location: "New Orleans",
      service: "Louisiana",
    },
    {
      location: "San Juan",
      service: "San Juan",
    },
    {
      location: "O‘ahu",
      service: "Hawaii",
    },
    {
      location: "Denver",
      service: "Colorado",
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [item, setitem] = useState(10);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  const showMoreItem = () => {
    setitem((prevCards) => prevCards + 10);
  };
  return (
    <div className="detail-nav">
      <div className="container">
        <div className="detail-nav-title">
          <h3>Inspiration for future getaways</h3>
        </div>
        <div className="category-menu">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${
                category === activeCategory ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {activeCategory === "Popular" && (
          <div className="popular-data">
            <ul className="lists">
              {data.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.location}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Arts & culture" && (
          <div className="popular-data">
            <ul className="lists">
              {data2.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.location}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data2.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Outdoors" && (
          <div className="popular-data">
            <ul className="lists">
              {data3.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.location}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data3.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Mountains" && (
          <div className="popular-data">
            <ul className="lists">
              {data4.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.location}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data4.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Beach" && (
          <div className="popular-data">
            <ul className="lists">
              {data5.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.location}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data5.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Unique stays" && (
          <div className="popular-data">
            <ul className="lists">
              {data6.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.location}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data6.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Categories" && (
          <div className="popular-data">
            <ul className="lists">
              {data7.slice(0, item).map((item, index) => (
                <div className="data" key={index}>
                  <li className="item-1">{item.name}</li>
                  <li className="item-2">{item.service}</li>
                </div>
              ))}
              {item < data7.length && (
                <button className="btn" onClick={showMoreItem}>
                  Show More
                </button>
              )}
            </ul>
          </div>
        )}
        {activeCategory === "Things to do" && (
          <div>
            <div className="popular-data">
              <ul className="lists">
                {data8.slice(0, item).map((item, index) => (
                  <div className="data" key={index}>
                    <li className="item-1">{item.location}</li>
                    <li className="item-2">{item.service}</li>
                  </div>
                ))}
                {item < data8.length && (
                  <button className="btn" onClick={showMoreItem}>
                    Show More
                  </button>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedMenu;
