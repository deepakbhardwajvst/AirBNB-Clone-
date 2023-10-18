import React from "react";
import "./CardsImage.css";
const imgdata = [
  "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/74a03af5-5b47-4ddc-88fc-3cc59bce50e6.jpeg?im_w=960",
  "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/dfcf2101-720c-4090-b394-21e36c15aa98.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/1dfb6630-84af-4988-9b8e-bbeb08e352ca.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/e2fbddf2-f48d-4fff-a904-a8c436daa722.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/be10f9dd-4928-4249-bf7e-8738c2f8a75a.jpeg?im_w=480",
];
const CardsImage = () => {
  return (
    <div>
      <div className="cardsimages">
        <div className="cardsimage">
          <div className="cardsimage1">
            <img src={imgdata[0]} alt="" className="cardsimg1" />
          </div>
          <div className="cardsimage2">
            <div className="cardsimage-box">
              <div className="cards-imgdiv1 a1">
                <img src={imgdata[1]} alt="" className="cards-img" />
              </div>
              <div className="cards-imgdiv2 a1">
                <img src={imgdata[2]} alt="" className="cards-img cards-img2" />
              </div>
              <div className="cards-imgdiv3 a1">
                <img src={imgdata[3]} alt="" className="cards-img" />
              </div>
              <div className="cards-imgdiv4 a1">
                <img src={imgdata[4]} alt="" className="cards-img cards-img4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsImage;
