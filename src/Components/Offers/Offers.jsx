import React from "react";
import "./Offers.css";
import exclusive_image from "../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>exclusive</h1>
        <h1>offers for you</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
