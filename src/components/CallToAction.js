import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/CallToAction.css";
import RestaurantFood from "../assets/images/restauranfood.jpg";

const CallToAction = () => {
  return (
    <div className="call-to-action-wrapper">
      <div className="call-to-action-left-wrapper">
        <div className="call-to-action-left-inside">
          <h2 className="call-to-action-title">Little Lemon</h2>
          <span className="call-to-action-text">Chicago</span>
          <p className="call-to-action-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link className="call-to-action-link" to={"/booking"}>
            Reserve A Table
          </Link>
        </div>
      </div>
      <div className="call-to-action-right-wrapper">
        <img className="call-to-action-image" src={RestaurantFood} alt="food" />
      </div>
    </div>
  );
};

export default CallToAction;
