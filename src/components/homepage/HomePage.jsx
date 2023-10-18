import React from "react";
import Header from "./Navbar/Header";
import Filter from "./Filter/Filter";
import Card from "./Cards/Card";
import DetailedMenu from "./DetailedMenu/DetailedMenu";
const HomePage = () => {
  return (
    <div>
      <div className="fix">
        <Header />
        <Filter />
      </div>
      <Card />
      <DetailedMenu />
    </div>
  );
};

export default HomePage;
