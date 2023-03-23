import React from "react";
import "../assets/styles/CustomersSay.css";
import userImageFirst from "../assets/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpeg";
import userImageSecond from "../assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpeg";
import userImageThird from "../assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpeg";
import userImageFourth from "../assets/images/julian-wan-WNoLnJo7tS8-unsplash.jpeg";

const CustomersSay = () => {
  const UserRatings = [
    {
      rating: "4/5",
      name: "John Doe",
      image: userImageSecond,
      profile: "profile link",
    },
    {
      rating: "3/5",
      name: "Jane Doe",
      image: userImageThird,
      profile: "profile link",
    },
    {
      rating: "4/5",
      name: "Felix Doe",
      image: userImageFourth,
      profile: "profile link",
    },
    {
      rating: "5/5",
      name: "David Doe",
      image: userImageFirst,
      profile: "profile link",
    },
  ];

  return (
    <div className="ratings-wrapper">
      <div className="ratings-inner-wrapper">
        {UserRatings.map((UserRating) => (
          <div className="ratings-card" key={UserRating.name}>
            <h3>Rating {UserRating.rating}</h3>
            <div className="ratings-row">
              <img
                className="ratings-user-image"
                src={UserRating.image}
                alt="user"
              />
              <span>{UserRating.name}</span>
            </div>
            <div className="user-rating-profile">{UserRating.profile}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSay;
