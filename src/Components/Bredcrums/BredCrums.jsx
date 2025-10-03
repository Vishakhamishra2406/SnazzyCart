import React from 'react';
import "./BredCrums.css";
import arrow_icon from '../../assets/arrow_icon.png';

const BredCrums = ({ product }) => {
  if (!product) {
    return <div className='bredcrums'>Loading...</div>; // or return null
  }

  return (
    <div className='bredcrums'>
      <img src={arrow_icon} alt="" height="10px" /> 
      SHOP
      <img src={arrow_icon} alt="" height="10px" />
      {product.category}
      <img src={arrow_icon} alt="" height="10px" />
      {product.name}
      <img src={arrow_icon} alt="" height="10px" />
    </div>
  );
};

export default BredCrums;
