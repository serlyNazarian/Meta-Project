import React from "react";
import "../assets/styles/Chicago.css";
import chicagoImageFirst from "../assets/images/Mario and Adrian A.jpg";
import chicagoImageSecond from "../assets/images/Mario and Adrian b.jpg";

const Chicago = () => {
  return (
    <div className="chicago-wrapper">
      <div className="chicago-inner-wrapper">
        <div className="chicago-left">
          <div className="chicago-titles">
            <h2>Little Lemon</h2>
            <span>Chicago</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras varius
            elit vel mi lacinia, in pellentesque quam accumsan. Cras aliquet
            pellentesque arcu nec porttitor.Donec laoreet nisi fringilla nulla
            aliquam, ac faucibus tortor molestie.
          </p>
        </div>
        <div className="chicago-right">
          <img className="chicago-image" src={chicagoImageFirst} alt="owners" />
          <img
            className="chicago-image"
            src={chicagoImageSecond}
            alt="owners"
          />
        </div>
      </div>
    </div>
  );
};

export default Chicago;
