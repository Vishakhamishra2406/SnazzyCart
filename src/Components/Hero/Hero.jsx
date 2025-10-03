import React from "react";
import "./Hero.css";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/men.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="hero-title">Best Deals! Best Prices</h2>
        <h2 className="hero-title"><span>New 👋</span>Collections</h2>
        
  

        <div className="hero-text-group">
          <p className="hero-collection-title">For Everyone</p>
        </div>

      </div>

      <div className="hero-right">
        <img src={men} alt="Men Model" />
      </div>
    </div>
  );
};

export default Hero;
