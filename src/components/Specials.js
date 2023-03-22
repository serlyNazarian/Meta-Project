import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Specials.css";
import greekSalad from "../assets/images/greek salad.jpg";
import bruchetta from "../assets/images/bruchetta.svg";
import lemonDesert from "../assets/images/lemon dessert.jpg";

const Specials = () => {
  const specialsList = [
    {
      name: "Greek Salad",
      image: greekSalad,
      price: 12.99,
      description:
        "This is a delicious special food item with all kinds of great flavors.",
    },
    {
      name: "Bruchetta",
      image: bruchetta,
      price: 5.99,
      description:
        "This is a delicious special food item with all kinds of great flavors.",
    },
    {
      name: "Lemon Dessert",
      image: lemonDesert,
      price: 4.99,
      description:
        "This is a delicious special food item with all kinds of great flavors.",
    },
  ];
  return (
    <div className="specials-wrapper">
      <div className="specials-wrapper-inner">
        <div className="specials-title-wrapper">
          <div className="specials-title-left">
            <h1>This weeks Specials</h1>
          </div>
          <div className="specials-title-right">
            <Link to="">Online Menu</Link>
          </div>
        </div>
        <div className="specials-menu-wrapper">
          {specialsList.map((special) => (
            <div className="special-menu-wrapper" key={special.name}>
              {/* <img src={special.image} /> */}
              <div className="special-menu-title">
                <h4>{special.name}</h4>
                <span>${special.price}</span>
              </div>
              <div className="special-menu-description">
                <p>{special.description}</p>
              </div>
              <div className="special-delivery-section">
                <Link to={""}>Order a delivery</Link>
                {/* icon */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
