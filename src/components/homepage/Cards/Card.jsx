import React, { useState } from "react";
import { Link } from "react-router-dom";
import { list } from "../../../json-file-js/Cards-details";
import "./Card.css";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import KeyboardArrowRight from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowLeft from "@mui/icons-material/ArrowForwardIos";

const Card = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    list.map(() => 0)
  );
  const [cardsToShow, setCardsToShow] = useState(18);
  const [clickedHearts, setClickedHearts] = useState([]);
  const nextImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[index] =
        updatedIndexes[index] === list[index].imgSrc.length - 1
          ? 0
          : updatedIndexes[index] + 1;
      return updatedIndexes;
    });
  };

  const prevImage = (index) => {
    setCurrentImageIndexes((prevIndexes) => {
      const updatedIndexes = [...prevIndexes];
      updatedIndexes[index] =
        updatedIndexes[index] === 0
          ? list[index].imgSrc.length - 1
          : updatedIndexes[index] - 1;
      return updatedIndexes;
    });
  };

  const showMoreCards = () => {
    setCardsToShow((prevCards) => prevCards + 12);
  };
  const toggleHeart = (index) => {
    if (clickedHearts.includes(index)) {
      setClickedHearts((prevClickedHearts) =>
        prevClickedHearts.filter((item) => item !== index)
      );
    } else {
      setClickedHearts((prevClickedHearts) => [...prevClickedHearts, index]);
    }
  };
  return (
    <>
      <div className="cards-grid">
        {list.slice(0, cardsToShow).map((item, index) => (
          <div className="card" key={index}>
            <Link to="Cardspage" className="">
              <div className="card-image-container">
                <img
                  src={item.imgSrc[currentImageIndexes[index]]}
                  alt={`${item.title} - Image ${
                    currentImageIndexes[index] + 1
                  }`}
                  className="card-img"
                />
              </div>
              <div className="card-details">
                <div className="left-details">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-distance">{item.desc}</p>
                  <p className="card-date">{item.date}</p>
                  <p className="card-price">
                    <b>{item.price}</b> night
                  </p>
                </div>
                <div className="right-details">
                  <p className="card-rating">
                    <b>★</b> {item.rating}.0
                  </p>
                </div>
              </div>
            </Link>
            <div
              className={`heart ${
                clickedHearts.includes(index) ? "clicked" : ""
              }`}
              onClick={() => toggleHeart(index)}
            >
              <FavoriteTwoToneIcon />
            </div>
            <button className="prev-button" onClick={() => prevImage(index)}>
              <KeyboardArrowRight fontSize="small" />
            </button>
            <button className="next-button" onClick={() => nextImage(index)}>
              <KeyboardArrowLeft fontSize="small" />
            </button>
          </div>
        ))}
      </div>
      <h5 className="explore">Continue exploring farms</h5>
      {cardsToShow < list.length && (
        <button className="show-more-button" onClick={showMoreCards}>
          Show More
        </button>
      )}
    </>
  );
};

export default Card;
