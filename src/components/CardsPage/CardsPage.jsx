import "./CardsPage.css";
import Header from "../homepage/Navbar/Header";
import CardsHead from "./CardsHead/CardsHead";
import CardsImage from "./CardsImage/CardsImage";
import CardDetail from "./CardDetail/CardDetail";
import CardsReviews from "./CardsReviews/CardsReviews";
import CardsRules from "./CardsRules/CardsRules";
import CardsCity from "./CardsCity/CardsCity";
import Footer from "../homepage/Footer/Footer";

const CardsPage = () => {
  return (
    <div>
      <Header />
      <div className="cards-container">
        <CardsHead />
        <CardsImage />
        <CardDetail />
        <hr />
        <CardsReviews />
        <CardsRules />
      </div>
      <CardsCity />
      <Footer />
    </div>
  );
};

export default CardsPage;
