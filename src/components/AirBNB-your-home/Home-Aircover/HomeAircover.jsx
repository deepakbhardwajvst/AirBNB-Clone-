import React from "react";
import "./HomeAircover.css";
import img from "../img/AirbnbSecoundImg.png";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const aircoverData = [
  {
    feature: "Guest identity verification",
    airbnb: true,
    competitors: true,
    description:
      "Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.",
  },
  {
    feature: "Reservation screening",
    airbnb: true,
    competitors: false,
    description:
      "Our proprietary technology analyses hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.",
  },
  {
    feature: "$3m damage protection",
    airbnb: true,
    competitors: false,
    description:
      "Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialised protections:",
  },
  {
    feature: "Art & valuables",
    airbnb: true,
    competitors: false,
    description: "",
  },
  {
    feature: "Auto & boat",
    airbnb: true,
    competitors: false,
    description: "",
  },
  {
    feature: "Pet damage",
    airbnb: true,
    competitors: false,
    description: "",
  },
  {
    feature: "Income loss",
    airbnb: true,
    competitors: false,
    description: "",
  },
  {
    feature: "Deep cleaning",
    airbnb: true,
    competitors: false,
    description: "",
  },
  {
    feature: "$1m USD liability insurance",
    airbnb: true,
    competitors: true,
    description:
      "You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.",
  },
  {
    feature: "24-hour safety line",
    airbnb: true,
    competitors: false,
    description:
      "If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.",
  },
];

const HomeAircover = () => {
  return (
    <div>
      <div className="aircover-head-img">
        <img
          src={img}
          alt="Aircover For Hosts"
          className="aircover-head-image"
        />
      </div>
      <h2 className="aircover-heading">
        Airbnb it with top‑to‑bottom protection
      </h2>
      <table className="aircover-table">
        <thead className="aircover-thead">
          <tr className="aircover-th-tr">
            <th className="aircover-th1"></th>
            <th className="aircover-th2">Airbnb</th>
            <th className="aircover-th2">Competitors</th>
          </tr>
        </thead>
        <tbody className="aircover-tbody">
          {aircoverData.map((row, index) => (
            <React.Fragment key={index}>
              <tr className="aircover-tb-tr">
                <th className="aircover-tb-th">{row.feature}</th>
                <td className="aircover-tb-td">
                  {row.airbnb ? (
                    <CheckIcon className="aircover-check" />
                  ) : (
                    <ClearIcon className="aircover-cross" />
                  )}
                </td>
                <td className="aircover-tb-td">
                  {row.competitors ? (
                    <CheckIcon className="aircover-check" />
                  ) : (
                    <ClearIcon className="aircover-cross" />
                  )}
                </td>
              </tr>
              <tr className="aircover-tb-tr1">
                <td className="aircover-tb-td1">{row.description}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <p className="aircover-paragraph aircover-table">
        Comparison is based on public information and free offerings by top
        competitors as of 22/10. Find details and exclusions <u>here</u>.
      </p>
      <div className="aircover-div-button">
        <button className="aircover-button">Learn more</button>
      </div>
    </div>
  );
};

export default HomeAircover;
