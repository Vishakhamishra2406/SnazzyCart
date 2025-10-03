import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"
import whatsapp_icon from "../../assets/whatsapp_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt="logo" height="50px"/>
            <p>Shopify</p>
        </div>

        <ul className='footer-links'>
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Company</li>
            <li>Contact</li>
        </ul>

        {/* Social Icons Row */}
        <div className='footer-icons'>
          <div className='footer-icon-container'>
            <img src={instagram_icon} alt="Instagram"/>
          </div>
          <div className='footer-icon-container'>
            <img src={facebook_icon} alt="Facebook"/>
          </div>
          <div className='footer-icon-container'>
            <img src={whatsapp_icon} alt="WhatsApp"/>
          </div>
        </div>
    </div>
  )
}

export default Footer
